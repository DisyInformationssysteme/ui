#!/bin/bash

BASEDIR=$(dirname "$0")
APP_DIR=$1

# From version 0.77.0, the packages are published in the @talend organisation.
# This scripts :
#   * install jscodeshift globally if needed
#   * replace js imports in all the js files in src/, /examples, /stories
#   * replace bootstrap-talend-theme imports in scss
#   * replace imports in src/**/*js
#   * replace references in configurations /*.js and /config/*.js
#   * replace references in package.json

print_title () {
  echo "----------------------------------------------------------------------"
  echo $1
  echo "----------------------------------------------------------------------"
}

# install jscodeshift if needed
if ! type jscodeshift > /dev/null
then
    print_title "You will need jscodeshift to run this script, but it is not installed."
    echo "Let's install it : sudo npm install -g jscodeshift"
    sudo npm install -g jscodeshift
fi

# ensure that a project directory is provided
if [ -z $APP_DIR ]
then
    echo "Please provide the path of your project local directory"
    exit 1
fi

# ensure that the project directory exists
if [ ! -d $APP_DIR ]
then
    echo "$APP_DIR is not a directory"
    exit 1
fi

# replace js imports
print_title "Execute codemod on $APP_DIR/examples"
jscodeshift -t "${BASEDIR}/codemod.js" $APP_DIR/examples

print_title "Execute codemod on $APP_DIR/stories"
jscodeshift -t "${BASEDIR}/codemod.js" $APP_DIR/stories

print_title "Execute codemod on $APP_DIR/src"
jscodeshift -t "${BASEDIR}/codemod.js" $APP_DIR/src

print_title "Execute codemod on $APP_DIR/config (for webpack config)"
jscodeshift -t "${BASEDIR}/codemod.js" $APP_DIR/config

print_title "Execute codemod on $APP_DIR/*.js (for webpack config)"
jscodeshift -t "${BASEDIR}/codemod.js" $APP_DIR/*.js

# replace bootstrap-talend-theme in all scss
print_title "Replace bootstrap-talend-theme in all scss"
find $APP_DIR/src -iregex '.*\.scss' | xargs sed -i '' 's/bootstrap-talend-theme/@talend\/bootstrap-theme/g'

# replace modules in package.json
print_title "Replace dependencies in package.json"
REPLACE_THEME_SCHEMA='s/bootstrap-talend-theme/@talend\/bootstrap-theme/g'
REPLACE_ICON_SCHEMA='s/talend-icons/@talend\/icons/g'
REPLACE_LOG_SCHEMA='s/talend-log/@talend\/log/g'
REPLACE_CMF_SCHEMA='s/react-cmf/@talend\/react-cmf/g'
REPLACE_COMPONENTS_SCHEMA='s/react-talend-components/@talend\/react-components/g'
REPLACE_CONTAINERS_SCHEMA='s/react-talend-containers/@talend\/react-containers/g'
REPLACE_FORMS_SCHEMA='s/react-talend-forms/@talend\/react-forms/g'
ALL_REPLACE="$REPLACE_THEME_SCHEMA; $REPLACE_ICON_SCHEMA; $REPLACE_LOG_SCHEMA; $REPLACE_CMF_SCHEMA; $REPLACE_COMPONENTS_SCHEMA; $REPLACE_CONTAINERS_SCHEMA; $REPLACE_FORMS_SCHEMA"
sed -i '' "$ALL_REPLACE" $APP_DIR/package.json
