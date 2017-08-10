# VARIUS

**JS Properties for Elements as CSS Variables**

##About

The idea of VARIUS is to use JavaScript to expose properties of elements (like `offsetWidth`, `innerHTML.length`, `children.length`, and even things like `window.innerWidth` to CSS through CSS variables. Since CSS variables are scoped at the level of each element we are able to write simple CSS that is 'scoped' to the state of each individual element they apply to as it currently appears in the browser.

The full list of available variables you can use in your CSS is:

### Global Variables

- `innerWidth`
- `innerHeight`

### Scoped Variables

- `offsetWidth`
- `offsetHeight`
- `offsetLeft`
- `offsetTop`
- `scrollWidth`
- `scrollHeight`
- `scrollLeft`
- `scrollTop`
- `children`
- `characters`
- `value`

## Examples

### Using `value.length` as a variable in CSS

```html
<input placeholder="Type to change background">
<textarea placeholder="Type to change background"></textarea>
<style>
  input,
  textarea {
    background: hsl(var(--value), 75%, 75%);
  }
</style>
```

### Using `offsetWidth` to make scalable apect ratios

```html
<div style=max-width:25%>25% wide</div>
<div style=max-width:50%>50% wide</div>
<div>Full-width</div>
<style>
  div {
    margin: 1em 0;
    background: lime;
    height: calc(var(--offsetWidth) / (16/9) * 1px);
  }
</style>
```

### Using `children.length` as a variable

```html
<ol><li></ol>
<ol><li><li></ol>
<ol><li><li><li></ol>
<ol><li><li><li><li></ol>
<ol><li><li><li><li><li></ol>
<ol><li><li><li><li></ol>
<ol><li><li><li></ol>
<ol><li><li></ol>
<ol><li></ol>
<style>
  ol {
    padding: 0;
    display: block;
    width: 100%;
    list-style: none;
    border: 1px solid;
    overflow: hidden;
    /* pass the parent's value down to children */
    --ul-children: var(--children);
  }
  ol li {
    display: block;
    border: 1px solid;
    height: 100px;
    float:left;
    width: calc(100% / var(--ul-children));
  }
</style>
```

- View the demo page: [tomhodgins.github.io/varius](https://tomhodgins.github.io/varius/)