densifyjs
=========

A plain JavaScript library to change images and background images from standard to retina resolution.

You don't need **jQuery** or other libraries to use it.

[Download version 1.0.0][release]


#####In your HTML page

```html
<!DOCTYPE html>
<html>
<head>
    <title>densifyjs example</title>
    <script type="text/javascript" src="densify.js"></script>
    <script type="text/javascript">
        // OPTIONAL
        // if you want to set a different data attribute:
        // default name is "data-retina"
        DensifyJS.setAttribute("data-retina");
    </script>
</head>
<body>
    <div data-retina="image-retina-resolution.png" style="background-image:url(image-standard-resolution.png);"></div>
    <img data-retina="image-retina-resolution.png" src="image-standard-resolution.png">
</body>
</html>
```

#####Documentation

API | Params | Required | Description
--- | --- | --- | ---
`setAttribute`  | `attributeName`*:String* | No        | Sets the name of the HTML5 data attribute name, default value is `data-retina`

[release]: https://github.com/vitto/densifyjs/releases/download/1.0.0/densify-v1.0.0.min.js
