# Q1
True or False: there is a direct one-to-one mapping between the tags that appear in an HTML file and the nodes in the DOM.
- False: additional nodes are created that represent other content within an HTML page (e.g., #text and empty nodes, the browser also inserts omitted or optional tags)

# Q2
True or False: Text nodes sometimes contain nothing but whitespace.
- True: all text appears in the DOM as a text node (including whitespace)

# Q3
```html
<html>
  <head>
    <title>Newsletter Signup</title>
  </head>
  <body>
    <!-- A short comment -->
    <h1>Newsletter Signup</h1>
    <p class="intro" id="simple">
      To receive our weekly emails, enter your email address below.
      <a href="info.html">Get more info</a>.
    </p>
    <div class="form">
      <form>
        <label>
          Enter your email:
          <input name="email" placeholder="user.name@domain.test"/>
        </label>
        <p class="controls">
          <button id="cancelButton">Cancel</button>
          <button type="submit" id="submitButton">Subscribe</button>
        </p>
      </form>
    </div>
  </body>
</html>
```
Draw the DOM the browser will construct when it loads the HTML
- can draw with draw.io : picture saved in folder (03-nodes-Q3soln_JC.drawio.svg)