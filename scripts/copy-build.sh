#!/bin/bash

# Fail the build if this step fails
set -e

if [[ $TRAVIS_BRANCH == 'master' ]]; then

    if [[ $TRAVIS_EVENT_TYPE == 'push' ]]; then

        git config --global user.email "stache-build-user@blackbaud.com"
        git config --global user.name "Blackbaud Stache Build User"

        git add --all
        git stash
        git checkout $STACHE_DEPLOY_BRANCH || git checkout -b $STACHE_DEPLOY_BRANCH
        rm -rf build
        git stash pop
        git add --all

        if ! git diff-index --quiet HEAD --; then
            git commit -am "Built via Travis Build #${TRAVIS_BUILD_NUMBER}"
            git push -fq origin $STACHE_DEPLOY_BRANCH
        fi

    fi
fi
