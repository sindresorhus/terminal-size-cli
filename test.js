import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js');
	const [columns, rows] = stdout.split('\n');
	t.true(Number.parseInt(columns, 10) > 0);
	t.true(Number.parseInt(rows, 10) > 0);
});
