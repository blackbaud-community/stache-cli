#!/bin/bash

# Fail the build if this step fails
set -e

IS_RELEASE=false
IS_HOTFIX=false

PR_URL=https://api.github.com/repos/$TRAVIS_REPO_SLUG/pulls/$TRAVIS_PULL_REQUEST
BUILD_BRANCH=$(if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then echo $TRAVIS_BRANCH; else echo `curl -s $PR_URL | jq -r .head.ref`; fi)

LAST_COMMIT_MESSAGE=`git log --format=%B -n 1 $TRAVIS_COMMIT`

# Regex matches 'Release vX.X.X' format
REGEX_RELEASE_COMMENT="^Release v[0-9]+\.[0-9]+\.[0-9]+"

# Regex matches master,rc-,release
REGEX_RELEASE_BRANCH="^(master|rc-|release)"
REGEX_HOTFIX_BRANCH="^(hotfix-|fix-)"

# Is this commit requesting a release to production?
if [[ "$TRAVIS_EVENT_TYPE" == "push" ]]; then

  # Is the current branch a release-able branch?
  if [[ $BUILD_BRANCH =~ $REGEX_RELEASE_BRANCH ]]; then

    # Does the commit message match the appropriate pattern?
    if [[ $LAST_COMMIT_MESSAGE =~ $REGEX_RELEASE_COMMENT ]]; then
      IS_RELEASE=true;
    fi
  fi
fi

if [[ $BUILD_BRANCH =~ $REGEX_HOTFIX_BRANCH ]]; then
  IS_HOTFIX=true;
fi

echo "TRAVIS_EVENT_TYPE: ${TRAVIS_EVENT_TYPE}"
echo "BUILD_BRANCH: $BUILD_BRANCH"
echo "IS_RELEASE: ${IS_RELEASE}"
echo "IS_HOTFIX: ${IS_HOTFIX}"

git config --global user.email "stache-build-user@blackbaud.com"
git config --global user.name "Blackbaud Stache Build User"

if [[ "$IS_HOTFIX" == "true" ]]; then
  if [[ "$BUILD_BRANCH" == "$STACHE_DEPLOY_PROD_BRANCH" ]]; then
    if [[ "$TRAVIS_EVENT_TYPE" == "push" ]]; then

      echo "Hotfix pushing to deployment production branch, ${STACHE_DEPLOY_PROD_BRANCH}..."
      git add --all
      git stash
      git checkout -b $STACHE_DEPLOY_PROD_BRANCH
      rm -rf $STACHE_BUILD_DIRECTORY
      git stash apply
      git add --all
      git status
      git commit -am "Hotfix built via Travis Build #${TRAVIS_BUILD_NUMBER}"
      git push -fq origin $STACHE_DEPLOY_PROD_BRANCH
      git status

    fi
  fi

else

  # Push commits to deploy branches if we're on the master branch, or if it's a release.
  if [[ "$BUILD_BRANCH" == "master" ]]; then
    if [[ "$TRAVIS_EVENT_TYPE" == "push" ]]; then

      # push to STACHE_DEPLOY_TEST_BRANCH
      git add --all
      git stash
      git checkout -b $STACHE_DEPLOY_TEST_BRANCH
      rm -rf $STACHE_BUILD_DIRECTORY
      git stash apply
      git add --all
      git status

      if ! git diff-index --quiet HEAD --; then
        echo "Pushing to deployment test branch, ${STACHE_DEPLOY_TEST_BRANCH}..."
        git commit -am "Built via Travis Build #${TRAVIS_BUILD_NUMBER}"
        git push -fq origin $STACHE_DEPLOY_TEST_BRANCH

        # Push to STACHE_DEPLOY_PROD_BRANCH
        if [[ "$IS_RELEASE" == "true" ]]; then
          echo "Pushing to deployment production branch, ${STACHE_DEPLOY_PROD_BRANCH}..."
          git checkout -b $STACHE_DEPLOY_PROD_BRANCH
          git merge $STACHE_DEPLOY_TEST_BRANCH
          git status
          git push -fq origin $STACHE_DEPLOY_TEST_BRANCH:$STACHE_DEPLOY_PROD_BRANCH
          git status
        fi
      fi
    fi
  fi
fi
