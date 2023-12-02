```html
<div>
  <p>Then press the <em>Draw</em> button</p> 
</div>
```
- `document.body` will have [text, div, text] ** WRONG **
- `document.body` will have [div]
- `div` will have [text, p, text]
- `p` will have [text, em, text]
- `em` will have [text]
- 8 nodes total
- Note:  +3 if you count HTML, HEAD, BODY which will be automatically created if if the HTML file contains only the <div>
- **CORRECT answer** is 11

vs

```html
<div><p>Then press the <em>Draw</em> button.</p></div>
```
- `document.body` will have [div]
- `div` will have [p]
- `p` will have [text, em, text]
- `em` will have [text]
- 6 nodes total
- **CORRECT answer** again is 6 +3 = 9 since html, head, body are automatically created


