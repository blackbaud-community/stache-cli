#!/bin/bash

# Fail the build if this step fails
set -e

# No need to commit the build during a pull request.
if [[ "$TRAVIS_EVENT_TYPE" == "pull_request" ]]; then
  exit 0
fi

# Capture the last commit's message
LAST_COMMIT_MESSAGE=`git log --format=%B -n 1 $TRAVIS_COMMIT`

# Is the commit asking to be deployed?
REGEX_DEPLOY_COMMENT="(^Merge pull request).*(${STACHE_GITHUB_ORG}\/release|${STACHE_GITHUB_ORG}\/hotfix)"

# Github configuration
git config --global user.email "stache-build-user@blackbaud.com"
git config --global user.name "Blackbaud Stache Build User"

commit_build() {
  echo "Committing build results to ${1}...";
  git add --all
  git stash save
  git checkout -b $1
  git stash pop
  git add --all
  git status
  if ! git diff-index --quiet HEAD --; then
    git commit -am "Built via Travis Build #${TRAVIS_BUILD_NUMBER}"
    git push -fq origin $1
  fi
  git status
  echo "Done."
}

echo "TRAVIS_EVENT_TYPE: ${TRAVIS_EVENT_TYPE}"
echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"

# Is the base branch the develop branch?
if [[ "$TRAVIS_BRANCH" == "$STACHE_DEVELOP_BRANCH" ]]; then
  echo "Committing build results to ${STACHE_DEPLOY_TEST_BRANCH}...";
  git add --all
  git stash save
  git checkout -b $STACHE_DEPLOY_TEST_BRANCH
  git stash pop
  git add --all
  git status
  if ! git diff-index --quiet HEAD --; then
    git commit -am "Built via Travis Build #${TRAVIS_BUILD_NUMBER}"
    git push -fq origin $STACHE_DEPLOY_TEST_BRANCH
  fi
  git status
  echo "Done."

# Is the base branch the master branch?
elif [[ "$TRAVIS_BRANCH" == "$STACHE_MASTER_BRANCH" ]]; then

  # Is this commit a release or hotfix?
  if [[ $LAST_COMMIT_MESSAGE =~ $REGEX_DEPLOY_COMMENT ]]; then
    commit_build $STACHE_DEPLOY_PROD_BRANCH
  fi
fi
