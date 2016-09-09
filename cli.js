#!/usr/bin/env node
'use strict';
const meow = require('meow');
const termSize = require('term-size');

meow(`
	Example
	  $ term-size
	  143
	  24

	First line is the number of columns
	Second line is the number of rows
`);

const size = termSize();

console.log(`${size.columns}\n${size.rows}`);
