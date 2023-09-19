const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const generateBtn = document.getElementById("colorGenerateBtn");
const colorBox =  document.querySelector(".color-box");
const hexValue = document.getElementById("colorHexValue")
const rgbValue = document.getElementById("rgbValue");
// console.log(Math.floor(Math.random() * colors.length));


// generate random color
function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  const rgb = { r, g, b };
  return rgb;
}

generateBtn.addEventListener("click", ()=>{
    let color = '#';
    
    for(let i=0; i<6; i++){
        color += colors[generateRandomColor()]
        console.log("color: " + color);
    }
    
    //change bh color box
    colorBox.style.backgroundColor = color
    
    //display color values
    
    hexValue.textContent = color
    console.log(hexToRgb(color));
    const rgbColor = hexToRgb(color);
    rgbValue.textContent = `(${rgbColor.r},${rgbColor.g},${rgbColor.b})`;


})


// generate random color
generateRandomColor = ()=>{
    return Math.floor(Math.random()*colors.length)
}