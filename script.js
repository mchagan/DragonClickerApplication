
let dragons = [ 
  {
    "type": "Fire",
    "clickTotal": 0,
    "imgSrc": "./images/vippng.com-red-fire-png-531056.png" 
},
{
  "type": "Ice",
  "clickTotal": 0,
  "imgSrc": "./images/Ice-Dragon-Transparent.png" 
},
{
  "type": "Forest",
  "clickTotal": 0,
  "imgSrc": "./images/d1jax8v-6023bf11-e489-48b5-8406-5f044ab13acf.png" 
},
{
  "type": "Water",
  "clickTotal": 0,
  "imgSrc": "./images/dragon_PNG84559.png" 
},
{
  "type": "Earth",
  "clickTotal": 0,
  "imgSrc": "./images/d7b6j1m-ce81c81d-283a-4d99-8477-eab710f88531.png"
}
]

function loadDragonImage(dragon) {
    let htmlImgSrc = "imgSrc" + dragon.type;
    let image = document.getElementById(htmlImgSrc);
    image.src = dragon.imgSrc;
    image.width="50";
    image.height="50";
}

function loadDragonImages() {
  for (let i = 0; i < dragons.length; i++) {
    loadDragonImage(dragons[i]);
  }
  let arenaImage = document.getElementById("imgArena");
  arenaImage.src = "";
}


function incrementClickTotal(amount, dragonType) {
  let dragon = dragons.find(dragon => dragon.type === dragonType);
  dragon.clickTotal = dragon.clickTotal + amount;
  let htmlClickTotal = "clickTotal" + dragon.type;
  document.getElementById(htmlClickTotal).innerHTML = dragon.clickTotal;

  let arenaImage = document.getElementById("imgArena");
  arenaImage.src = dragon.imgSrc;
  document.getElementById("clickTotalArena").innerHTML = dragon.clickTotal;
}
