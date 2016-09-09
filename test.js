import test from 'ava';
import execa from 'execa';

test(async t => {
	const [columns, rows] = (await execa.stdout('./cli.js')).split('\n');
	t.true(parseInt(columns, 10) > 0);
	t.true(parseInt(rows, 10) > 0);
});
