import assert from "assert";

const date = new Date("2022-01-25 00:00");

// regexp to match the date
{
	const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])/;
	const [full, year, moth, day] = regex.exec(date.toISOString());
	const actual = `${day}/${moth}/${year}`;
	const expected = "25/01/2022";
	console.log({ actual, expected });
	assert.equal(actual, expected);
}

// toLocaleDateString
const options = {
	year: "numeric",
	month: "long",
	day: "numeric",
};

// toLocaleDateString
{
	const actual = date.toLocaleDateString("pt-br", options);
	const expected = "25 de janeiro de 2022";
	console.log({ actual, expected });
	assert.equal(actual, expected);
}

// toLocaleDateString
{
	const actual = date.toLocaleDateString("pt-br", {
		...options,
		month: "numeric",
	});
	const expected = "25/01/2022";
	console.log({ actual, expected });
	assert.equal(actual, expected);
}

// Intl
{
	const actual = new Intl.DateTimeFormat("pt-br").format(date);
	const expected = "25/01/2022";
	console.log({ actual, expected });
	assert.equal(actual, expected);
}
// Intl
{
	const actual = new Intl.DateTimeFormat("pt-br", {
		dateStyle: "full",
		timeStyle: "long",
	}).format(date);
	const expected = "terça-feira, 25 de janeiro de 2022 00:00:00 BRT";
	console.log({ actual, expected });
	assert.equal(actual, expected);
}
