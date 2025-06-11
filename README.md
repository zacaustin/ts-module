# NodeJS TypeScript Module Template
I got tired of setting up the same TypeScript module boilerplate over and over—so I made this template to save myself the hassle. It’s nothing top secret, so I figured I’d share it in case it saves someone else a few minutes (and a bit of sanity) too.

## Features

- **TypeScript-first**: Write your code in TypeScript, output types included.
- **Dual build**: Outputs both CommonJS (`dist/cjs`) and ESM (`dist/esm`) modules.
- **Jest testing**: Preconfigured for unit testing with Jest and ts-jest.

## Getting Started

### Clone the repository

```sh
git clone https://github.com/zacaustin/ts-module.git
cd ts-module
```

### Install dependencies

```sh
npm install
```

### Build
Build both ESM and CJS outputs:

```sh
npm run build
```

Or separately:

```sh
npm run build:esm
npm run build:cjs
```

### Test

```sh
npm test
```

## Usage

Import from your built package:

```js
// ESM
import { add } from 'ts-module';

// CommonJS
const { add } = require('ts-module');
```
