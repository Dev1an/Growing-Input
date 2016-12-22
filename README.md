# Growing input
An HTML input element that grows as you type

## Usage

Install the package

```shell
npm install growing-input
```

Include the script in your webpage and use the web component!

```html
<script type="text/javascript" src="node_modules/growing-input/input.js"></script>
<input is="growing-input" />
```

### Using meteor

To use this package in meteor simply import it via javascript's `import` sytax

```javascript
// main.js \\
import 'growing-input'
```

After importing, you can use the new element in your HTML

```html
<!-- main.html -->
<input is="growing-input" />
```

Or you can create the element via javascript

```javascript
// main.js \\
import Input from 'growing-input'
document.body.appendChild(new Input)
```
