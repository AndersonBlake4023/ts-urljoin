# URL path join

Think about joining URL paths. Before: messy slashes and empty segments. After: a clean string. 

This TypeScript Urljoin implementation relies entirely on the standard library. You get zero external packages. There is nothing extra to install.

```
urljoin.ts
```

Look at the TypeScript Urljoin test suite right next to the source code. It walks through concrete examples. You see exactly how the logic handles edge cases.

## Common questions

**Why is there no client library in the dependencies?**  
You simply do not need one. The actual network request is just a single HTTPS call inside `urljoin.test.ts`. The `npx tsx` tool handles the rest of the setup. That is the complete dependency story for this urljoin example.