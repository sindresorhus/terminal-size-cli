#!/usr/bin/env node
import meow from 'meow';
import terminalSize from 'terminal-size';

meow(`
	Example
	  $ terminal-size
	  143
	  24

	First line is the number of columns
	Second line is the number of rows
`, {
	importMeta: import.meta,
});

const {columns, rows} = terminalSize();

console.log(`${columns}\n${rows}`);
