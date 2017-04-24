#!/usr/bin/env node

/*
This is invoked as a shell script by NPM when the `tiddlywiki` command is typed
*/

var $tw = require("./boot/boot.js").TiddlyWiki();

// Pass the command line arguments to the boot kernel
console.log('-------------------------------------------');
console.log(process.argv);
$tw.boot.argv = Array.prototype.slice.call(process.argv,2);
console.log($tw.boot.argv);

// Boot the TW5 app
$tw.boot.boot();
