//alert("Welcome! to Matrix")

let img = document.getElementById('main_img');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

img1.addEventListener('click', () => {
  img3.style.border = '';
  img2.style.border = '';
  main_img.src = 'imagens/matrix03.jpg';
  img1.style.border = 'thin solid #b2dfdb';
})

img2.addEventListener('click', () => {
  img1.style.border = '';
  img3.style.border = '';
  main_img.src = 'imagens/matrix02.jpg';
  img2.style.border = 'thin solid #b2dfdb';
})

img3.addEventListener('click', () => {
  img1.style.border = '';
  img2.style.border = '';
  main_img.src = 'imagens/matrix01.jpg';
  img3.style.border = 'thin solid #b2dfdb';
})

//function changeImage(a) {
//  document.getElementById("banner").src = a
//}

//function myFunction() {
//  document.getElementById("#focus").focus();
//}

// geting canvas by Boujjou Achraf
var c = document.getElementById("c")
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
//var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
var matrix = "こん に ち は 世 界凵凵夂 彡 厶 工 匸 匚 乀乁彐丩忄卄凵 孒 讠 巜 彑 攵 火 灬 灭 灮 災灾灿 炐炑 汑汒汓 汔については 久井町及び 大和町に限る。";

//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#00ff41";//"#f4427d";//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35)
