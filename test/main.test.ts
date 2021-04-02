import { assertStringIncludes } from "https://deno.land/std@0.92.0/testing/asserts.ts";

Deno.test("main print help", async () => {
	const p = Deno.run({
		cmd: ["deno", "run", "--unstable", "--allow-all", "index.ts", "--help"],
		stdout: "piped",
	});

	const output = new TextDecoder().decode(await p.output());

	const expected = ["Frequential Analysis", "NAME", "DESCRIPTION"];

	expected.forEach(e => assertStringIncludes(output, e));

	p.close();
});
