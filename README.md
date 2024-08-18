# Dynamic Module Loader Library

This library provides a utility function to dynamically load modules using an alias or path. It simplifies the process of importing modules asynchronously at runtime.

## Features

- **Dynamic Loading**: Load modules dynamically using an alias or path.
- **TypeScript Support**: Fully typed with TypeScript for better type inference and safety.
- **Error Handling**: Includes error handling for failed module loading.

## Installation

To use this library, you can install it via npm:

```bash
npm install @mg/loader
```

## Example

```
// @helpers/longFunction

export default function longFunction() {
  return 'this is long function';
}
```

```
// App.tsx

import { load } from "@mg/loader"

function App() {
  return (
    <button onClick={async () => {
      const module = await load('./helpers/longFunction');
      console.log({ module });

    }}>
      Loading
    </button>
  )
}
```
