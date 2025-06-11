# NodeJS TypeScript Module Template
Builds for CJS and ESM

## Features

- **TypeScript-first**: Write your code in TypeScript, output types included.
- **Dual build**: Outputs both CommonJS (`dist/cjs`) and ESM (`dist/esm`) modules.
- **Jest testing**: Preconfigured for unit testing with Jest and ts-jest.

## Getting Started

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
