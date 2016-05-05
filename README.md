![alt text](https://github.com/tomsheedy/Letterboard/blob/master/letterboard-v1-1.png "Letterboard")

##Installation
Simply download the zip and extract the files in to your web project.
Included is an html file which provides a demonstration of how it works.

##Docs
Wrap everything in a container with the class "letterboard", like so:

```html
<div class="letterboard">
  <!--Your text goes here!-->
</div>
```

Within your container, you can insert your text. Text should be inserted in the form of a `span`. Rather than writing your text within the `span`, add a data attribute called `data-text`, with the text you require.

To create a heading, attribute a `span` the class `lb-head`, and to create body text, attribute a span the class `lb-body`.

Break up the spans with line breaks.

```html
<div class="letterboard">`
  <span class="lb-head" data-text="letterboard"></span>
  <br/>
  <span class="lb-body" data-text="a marquee style panel for your website"></span>
</div>
```
