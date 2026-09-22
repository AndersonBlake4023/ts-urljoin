# URL path join

Fix messy URL paths. You concatenate strings and end up with `api//v1//users`. Trailing slashes break routes. We want clean paths. No double slashes. No empty segments.

This utility runs purely on the TypeScript standard library. Zero external dependencies. No extra packages to bundle. Just copy the logic and go.

```
urljoin.ts
```

Check out the test file. It sits right next to the implementation. You will see concrete before-and-after examples of how it handles edge cases.