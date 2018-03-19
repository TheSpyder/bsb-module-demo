# Bucklescript no-bundle demo
This is an example of a bucklescript project that runs using ES6 modules without bundling.

The main limitation is that you can only depend on other ES6-compatible modules, which probably means only other bucklescript projects. As soon as you try to require anything else out of your node_modules folder a bundler is almost certainly required (since they're generally distributed as commonjs).

This works without bundling on all current browsers except IE and FireFox (which still has it behind a flag until v60).

* `npm link bs-platform`
* `bsb -w`
* load `demo.html` in a browser (must use a webserver due to CORS restrictions)

At this point changes made in the source code will be ready for a browser refresh before you're able to trigger the refresh 😉

It wouldn't be difficult to create a server with livereload, but I don't need that nor am I very familiar with setting it up.

The HTML demo includes a `nomodule` fallback for older browsers, to compile it:

* `npm i`
* `npm run bundle`

Tnis uses rollup, with a dual config in order to minify output on `npm publish`.