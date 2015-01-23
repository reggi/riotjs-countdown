#!/bin/bash
# just because they didn't include a bower release
# https://github.com/muut/riotjs/issues/136#issuecomment-71012685

WD=`pwd`
npm install riot
cd node_modules/riot/
npm install
make dist
mv ./riot.min.js ../.././riot.min.js
cd $WD
rm -r ./node_modules/
