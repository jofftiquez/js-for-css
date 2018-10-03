# Js For Css

Write CSS selectors using javascript!

> This project is currently in development stage. I'm looking for collaborators :) Any type of help is very much appreciated. 

## Sample

**Write Javascript**

```javascript
const selector = new Selector();

selector.create('tag', 'p')
  .addProps('text-align', 'justify')
  .addProps('font-weight', 'bold')
  .addProps('font-size', '16px;')
  .build();

selector.create('class', 'btn')
  .addProps('width', '100px')
  .addProps('height', '45px')
  .addProps('background', '#fefefe')
  .addProps('color', 'black')
  .build();

selector.create('class:hover', 'btn')
  .addProps('cursor', 'zoom-in')
  .addProps('background', 'rgba(255, 255, 255, 0.5)')
  .build();

```

**Output CSS**

```css
p {
  text-align: justify;
  font-weight: bold;
  font-size: 16px;
}

.btn {
  width: 100px;
  height: 45px;
  background: #fefefe;
  color: black;
}

.btn:hover {
  cursor: zoom-in;
  background: rgba(255, 255, 255, 0.5);
}
```

## Install 

**NPM**

```
npm install js-for-css --save
```

**YARN**

```
yarn add js-for-css
```

## Usage

```javascript
import { Selector } from 'js-for-css';

const selector = new Selector();

// do your stuff

```

## API

**Methods**

> **`.create(type, name)`**
> **`.create(type, name1, name2)`**

`.create()` methods is required to create a css selector. This method receives 2 required parameters, `type` and `name`. `type` is the selector type, e.g. classes, ids, tags etc. `name` is the selector type name, e.g. `btn`, `btn-primary`, `div`, `p`, `h1` etc. A third optional parameter name2 can be passed for types "tag1,tag2" etc.

| **Available types** | **Ouput** |
| ------------------- | --------- | 
| `class` | .[class name] {} |
| `class:active` | .[class name]:active {} |
| `class:focus` | .[class name]:focus {} |
| `class:hover` | .[class name]:hover {} |
| `class:link` | .[class name]:link {} |
| `class:default` | .[class name]:default {} |
| `class:disabled` | .[class name]:disabled {} |
| `class:enabled` | .[class name]:enabled {} |
| `class:empty` | .[class name]:empty {} |
| `class:in-range` | .[class name]:in-range {} |
| `class:intermediate` | .[class name]:intermediate {} |
| `class:invalid` | .[class name]:invalid {} |
| `tag` | #[html tag] {} |
| `tag:active` | [html tag]:active {} |
| `tag:focus` | [html tag]:focus {} |
| `tag:hover` | [html tag]:hover {} |
| `tag:link` | [html tag]:link {} |
| `tag:default` | [html tag]:default {} |
| `tag:disabled` | [html tag]:disabled {} |
| `tag:enabled` | [html tag]:enabled {} |
| `tag:empty` | [html tag]:empty {} |
| `tag:in-range` | [html tag]:in-range {} |
| `tag:intermediate` | [html tag]:intermediate {} |
| `tag1,tag2` | [tag1,tag2] {} |
| `tag1 tag2` | [tag1 tag2] {} |
| `tag1>tag2` | [tag1>tag2] {} |
| `tag1+tag2` | [tag1+tag2] {} |
| `tag1~tag2` | [tag1~tag2] {} |
| `id` | #[id] {} |
| `id:active` | #[id]:active {} |
| `id:focus` | #[id]:focus {} |
| `id:hover` | #[id]:hover {} |
| `id:link` | #[id]:link {} |
| `id:default` | #[id]:default {} |
| `id:disabled` | #[id]:disabled {} |
| `id:enabled` | #[id]:enabled {} |
| `id:empty` | #[id]:empty {} |
| `id:in-range` | #[id]:in-range {} |
| `id:intermediate` | #[id]:intermediate {} |
| `id:invalid` | #[id]:invalid {} |



> **`.addProps(property, value)`**

As the name suggests, this method adds a css property to the selector you created e.g. `background`, `font-size`, `color`, `height`, `width` etc...

See [CSS Basic Properties](http://web.simmons.edu/~grabiner/comm244/weekthree/css-basic-properties.html)

> **`.build()`**

This method is required to build each selector. This must be invoked at the end of every selector invocation.
