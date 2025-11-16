fetch("https://www.thecolorapi.com/scheme")
.then(resp => resp.json())
.then(data => console.log(data))