# Frequential Analysis

## Requirements

* [Deno](https://deno.land/) (see the [installation section](https://deno.land/manual@main/getting_started/installation))

## Building

This project doesn't require any building step.

## Run

To run the program, run :

```bash
deno run --unstable --allow-read --allow-write index.ts [... arguments]
```

Note : The `--allow-read` and `--allow-write` are **Deno security flags** allowing it to read from and write to the file system, which is sometimes necessary, depending on the parameters passed to the program. They **do not originate** from the `Frequential Analysis` program. Additionnaly, path can be provided to only allow specific files or folder.

For more informations about the permissions, see [the Deno manual](https://deno.land/manual@main/getting_started/permissions).

### Arguments

To print a list of all arguments, run :

```bash
deno run --unstable index.ts --help
```

### Examples

* example 1
  * `encode` text
  * text to encode is `Hello World !`, and is give `as argument`
  * with the `Caesar` cipher
  * with a `key of 7` (shift all letters to the left 7 times)
  * output the encoded text to the file `secret.txt`

```bash
deno run --unstable --allow-read --allow-write index.ts --mode=encode -k=7 -i "Hello World !" --output-file=./secret.txt -a caesar
```

* example 2
  * `decode` a ciphered text
  * the ciphered text is located in the `./ciphered.txt` file
  * enciphered with the `Vigenere` cipher
  * with an `unknown` key
  * with the original text being in `English`
  * output the decoded text to the `terminal`

```bash
deno run --unstable --allow-read --allow-write index.ts -m decode --input ./ciphered.txt --algorithm=vigenere -lang=en
```

* example 3
  * `decode` text
  * the cipher is `unknown`
  * the key is unknown
  * the ciphered text is located at `input.txt`
  * the deciphered text should be stored in `output.txt`

```bash
deno run --unstable --allow-read --allow-write index.ts -m decode -i input.txt -o output.txt
```

## Tests

To run the tests, run :

```bash
deno test test/
```

## Credits

Made by g44422.

## License

This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International, also known as the CC-BY-NC-SA.

See [LICENSE.md](./LICENSE.md) for more details.
