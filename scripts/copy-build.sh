#!/bin/bash

# Fail the build if this step fails
set -e

IS_RELEASE=false
LAST_COMMIT_MESSAGE=`git log --format=%B -n 1 $TRAVIS_COMMIT`

# Regex matches 'Release vX.X.X' format
REGEX_RELEASE_COMMENT="^Release v[0-9]+\.[0-9]+\.[0-9]+"

# Regex matches master,rc-,release
REGEX_RELEASE_BRANCH="^(master|rc-|release)"

# Is this commit requesting a release to production?
if [[ "$TRAVIS_EVENT_TYPE" == "push" ]]; then

  # Is the current branch a release-able branch?
  if [[ $TRAVIS_BRANCH =~ $REGEX_RELEASE_BRANCH ]]; then

    # Does the commit message match the appropriate pattern?
    if [[ $LAST_COMMIT_MESSAGE =~ $REGEX_RELEASE_COMMENT ]]; then
      #if [[ ! -z $TRAVIS_TAG ]]; then
      IS_RELEASE=true;
      #fi
    fi
  fi
fi

echo "TRAVIS_EVENT_TYPE: ${TRAVIS_EVENT_TYPE}"
echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"
echo "IS_RELEASE: ${IS_RELEASE}"

# Push commits to deploy branches if we're on the master branch, or if it's a release.
if [[ "$TRAVIS_BRANCH" == "master" ]]; then
  if [[ "$TRAVIS_EVENT_TYPE" == "push" ]]; then

    git config --global user.email "stache-build-user@blackbaud.com"
    git config --global user.name "Blackbaud Stache Build User"

    # push to STACHE_DEPLOY_TEST_BRANCH
    git add --all
    git stash
    git checkout -b $STACHE_DEPLOY_TEST_BRANCH
    rm -rf $STACHE_DEPLOY_DIR
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
        git push origin $STACHE_DEPLOY_TEST_BRANCH:$STACHE_DEPLOY_PROD_BRANCH --force
      fi
    fi
  fi
fi
