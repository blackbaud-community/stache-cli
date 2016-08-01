#!/bin/bash

# Fail the build if this step fails
set -e

IS_RELEASE=false
LAST_COMMIT_MESSAGE=`git log --format=%B -n 1 $TRAVIS_COMMIT`

# Regex matches 'Release vX.X.X' format
REGEX_RELEASE_COMMENT="^Release v[0-9]+\.[0-9]+\.[0-9]+"

# Regex matches master,rc-,release
REGEX_RELEASE_BRANCH="^(master|rc-|release)"

if [[ "$TRAVIS_PULL_REQUEST" == "false" ]]; then
    if [[ $TRAVIS_BRANCH =~ $REGEX_RELEASE_BRANCH ]]; then
        if [[ $LAST_COMMIT_MESSAGE =~ $REGEX_RELEASE_COMMENT ]]; then
            IS_RELEASE=true;
        fi
    fi
fi

echo "TRAVIS_EVENT_TYPE: ${TRAVIS_EVENT_TYPE}"
echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"
echo "TRAVIS_TAG: ${TRAVIS_TAG}"
echo "IS_RELEASE: ${IS_RELEASE}"

if [[ "$TRAVIS_BRANCH" == "master" ]]; then
    if [[ "$TRAVIS_EVENT_TYPE" == "push" ]]; then
        # push to DEPLOY_TEST_BRANCH
        echo "push to deploy test branch."
        if [[ "$IS_RELEASE" == "true" ]]; then
            # push to DEPLOY_PROD_BRANCH
            echo "push to deploy prod branch"
        fi
    fi
fi

# echo "TRAVIS_EVENT_TYPE: ${TRAVIS_EVENT_TYPE}"
# echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"
#
#
# if [[ $TRAVIS_BRANCH == 'develop' && $TRAVIS_EVENT_TYPE == 'pull_request' ]]; then
#     echo "Commit and push to feature-test..."
#
#     git config --global user.email "stache-build-user@blackbaud.com"
#     git config --global user.name "Blackbaud Stache Build User"
#
#     git add --all
#     git stash
#     git checkout $STACHE_DEPLOY_BRANCH || git checkout -b $STACHE_DEPLOY_BRANCH
#     rm -rf build
#     git stash pop
#     git add --all
#     git status
#
#     if ! git diff-index --quiet HEAD --; then
#         git commit -am "Built via Travis Build #${TRAVIS_BUILD_NUMBER}"
#         git push -fq origin $STACHE_DEPLOY_BRANCH
#     fi
# fi
#
# # if [[ $TRAVIS_BRANCH == 'master' ]]; then
# #
# #     if [[ $TRAVIS_EVENT_TYPE == 'push' ]]; then
# #
# #         git config --global user.email "stache-build-user@blackbaud.com"
# #         git config --global user.name "Blackbaud Stache Build User"
# #
# #         git add --all
# #         git stash
# #         git checkout $STACHE_DEPLOY_BRANCH || git checkout -b $STACHE_DEPLOY_BRANCH
# #         rm -rf build
# #         git stash pop
# #         git add --all
# #
# #         if ! git diff-index --quiet HEAD --; then
# #             git commit -am "Built via Travis Build #${TRAVIS_BUILD_NUMBER}"
# #             git push -fq origin $STACHE_DEPLOY_BRANCH
# #         fi
# #
# #     fi
# # fi
