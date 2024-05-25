# Styling (CSS)

- [Next Generation CSS](#next-generation-css)
  - [Linting](#linting)
  - [sanitize.css](#sanitizecss)
- [CSS Support](#css-support)
- [styled-components](#styled-components)

## Next Generation CSS

This boilerplate uses [`styled-components`](https://github.com/styled-components/styled-components) :nail_care:
for styling react components. `styled-components` allows you to write actual CSS inside your JavaScript,
enabling you to use the [full power of CSS](https://github.com/styled-components/styled-components/blob/master/docs/css-we-support.md) :muscle:
without mapping between styles and components.
There are many ways to style react applications, but many find `styled-components`
to be a more natural approach to styling components.
Watch this video for a comparison and to see how it enforces best practices!

### Linting

To complement `styled-components`, this boilerplate also has a CSS linting setup. It uses `stylelint` which will help you stay consistent with modern CSS standards. Read about it [here](linting.md).

### sanitize.css

In addition, this boilerplate also uses
[`sanitize.css`](https://github.com/jonathantneal/sanitize.css)
to make browsers render all elements more consistently and in line with modern standards,
it's a modern alternative to CSS resets. More info available on the [`sanitize.css` page](sanitize.md).

## CSS Support

We support and recommend the use of [`styled-components`](#components).
We also support the use of CSS [stylesheets](#stylesheet).

There are many ways to style web applications, unfortunately, we cannot support them all.
However, you can integrate the following by using the guides below:

- [CSS Modules](#css-modules)
- [Sass](#sass)
- [LESS](#less)

## styled-components

Below creates two styled react components (`<Title>`, `<Wrapper>`) and renders them
as children of the `<Header>` component:

```jsx
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>Hello World!</Title>
  </Wrapper>,
);
```

_(The CSS rules are automatically vendor prefixed, so you don't have to think about it!)_

> For more information about `styled-components` see https://github.com/styled-components/styled-components
