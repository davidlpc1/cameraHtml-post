# Create an index.html file that contains the basic struture
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Camera</title>
    </head>
    <body>
        
    </body>
    </html>
```

# Put an video tag into the index.html with the id camera
```html
    <video id="camera"></video>
```

# Create an main.js file and link that in html with script tag
```html
    <script src="./main.js"></script>
```

# Ask for access to use camera with navigator.mediaDevices.getUserMedia (promise)
```js
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(stream => {
        // Put the stream in video tag(html)
    })
    .catch(error => {
        throw new Error(error.message);
    })
```

# Take the video element and put the stream object in that
```js
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(stream => {
        const video = document.getElementById('camera'); // Get the video element
        video.srcObject = stream // Put the user video in the tag video
        video.addEventListener('loadedmetadata', () => {
            video.play() // Play when the video was loaded
        })
    })
    .catch(error => {
        throw new Error(error.message);
    })
```
