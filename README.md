# riotjs-countdown

Example of SystemJS / JSPM (ES6 Modules) with RiotJS (with Moment Dependency)

# Setup

[SystemJS](https://github.com/systemjs/systemjs) is a Universal dynamic module loader that allows you to write and load ES6 modules in the browser. It allows you to include AMD, CommonJS, and even globally written javascript files from NPM and github in your projects using JSPM a wrapper to faciliate dependancy installation.

You can see in [my index.html file](https://github.com/reggi/riotjs-countdown/blob/master/index.html#L4-L9) that I'm including SystemJS, from there I include [components.js](https://github.com/reggi/riotjs-countdown/blob/master/components.js) a place for RiotJS to mount tags. components.js is including the [countdown.js](https://github.com/reggi/riotjs-countdown/blob/master/countdown.js) javascript file which was converted by RiotJS from [countdown.tag](https://github.com/reggi/riotjs-countdown/blob/master/countdown.tag) with Riot's command line interface.

The crux of all this is that my component includes it's dependancy MomentJS with relative ease the command `jspm install npm:moment` and the one liner [`import moment from 'moment'`](https://github.com/reggi/riotjs-countdown/blob/master/countdown.tag#L1). Now on a HTML "component" level the entire new tag is encapsulated. It's finally as easy as it is on the server to include browser dependancies. 
