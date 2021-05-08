# Installation
```
yarn add -D altv-jest-mocks
```
or
```
npm i --save-dev altv-jest-mocks
```

Next you need to setup a [manual Jest mock](https://facebook.github.io/jest/docs/en/manual-mocks.html) *(recommended)*:
* create `__mocks__` directory in your project root
* create a file `alt-server.js` inside the `__mocks__` folder
* create a manual jest mock

```javascript
// ./__mocks__/alt-server.js
const { mockServer } = require('altv-jest-mocks');
module.exports = mockServer;
```

*the same for another alt:V modules/natives*

**OR** you can specify the direct path to mocks in your `jest.config.js` *(not recommended)*:

```javascript
moduleNameMapper: {
  'alt-client': '<rootDir>/node_modules/altv-jest-mocks/lib/mocks/alt-client.js',
  'alt-server': '<rootDir>/node_modules/altv-jest-mocks/lib/mocks/alt-server.js',
  'natives': '<rootDir>/node_modules/altv-jest-mocks/lib/mocks/natives.js',
}
```

# Basic example

```typescript
// ./src/example.ts
import alt from 'alt-server';

export const someFunction = () => {
  if (alt.isInDebug()) {
    return alt.emit('some event', true);
  }

  alt.setMeta('key', false);
};
```

```typescript
// ./src/__tests__/example.test.ts
import alt from 'alt-server';
import { someFunction } from '../example';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('someFunction', () => {
  test('should emit some event', () => {
    (alt.isInDebug as jest.Mock).mockReturnValue(true);

    someFunction();

    expect(alt.emit).toBeCalledWith('some event', true);
  });

  test('should set meta with some data', () => {
    (alt.isInDebug as jest.Mock).mockReturnValue(false);

    someFunction();

    expect(alt.setMeta).toBeCalledWith('key', false);
  });
});
```
