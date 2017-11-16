#!/bin/sh
set -e

# setup ssh-agent and provide the GitHub deploy key
eval "$(ssh-agent -s)"
openssl aes-256-cbc -K $encrypted_5a854664d625_key -iv $encrypted_5a854664d625_iv -in github_deploy_key.enc -out github_deploy_key -d
chmod 600 github_deploy_key
ssh-add github_deploy_key

# commit the assets in build/ to the gh-pages branch and push to GitHub using SSH
./node_modules/.bin/gh-pages -d docs/ -b gh-pages -r git@github.com:${TRAVIS_REPO_SLUG}.git
