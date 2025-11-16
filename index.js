const seedColourInput = document.getElementById("seed-colour-input")
const seedHexInput = document.getElementById("seed-colour-hex")

/* Getting Seed Colour Input as Hex Code */

seedHexInput.addEventListener("input", function(){
     if (/^#([0-9A-F]{6})$/i.test(seedHexInput.value)) {
        seedColourInput.value = seedHexInput.value;
    }
})

seedColourInput.addEventListener("input", function(){
    seedHexInput.value = seedColourInput.value.toUpperCase();
});

fetch("https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=6")
.then(resp => resp.json())
.then(data => console.log(data))