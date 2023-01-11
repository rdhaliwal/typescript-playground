# Playground

A simple playground for typescript files

## Setup

```bash
nvm install;
nvm use;

# Optional, only for hot reloading
brew install watchman;
```

## Running

- Create a typescript file in this directory.
- If you have a file named `another_example.ts`

```bash
npm run build;
node ./build/another_example.ts

# Or with make
make build;
make run FILE=another_example
```

## Watch and compile and run

- You need to have watchman installed

```bash
make watch;
```

