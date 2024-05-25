## Removing `sanitize.css`

To remove `sanitize.css` you will need to remove it from both:

- [`App.tsx`](../../src/app//App.tsx)

```diff
-import 'sanitize.css';

```

- [`package.json`](../../package.json)

```diff
"dependencies": {
  ...
 "request": "^2.88.2",
-"sanitize.css": "^13.0.0",
 "styled-components": "^6.1.11"
  ...
},
```
