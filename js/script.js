console.log("JS Loaded");
let grillPics = ["grill0.jpg","grill1.jpg","grill2.jpg","grill3.jpg","grill4.jpg","grill5.jpg","grill6.jpg","grill7.jpg","grill8.jpg","grill9.jpg"];
let coughPics = ["cough0.jpg","cough1.jpg","cough2.jpg","cough3.jpg","cough4.jpg","cough5.jpg","cough6.jpg","cough7.jpg","cough8.jpg","cough9.jpg"];
let castPics = ["cast0.jpg","cast1.jpg","cast2.jpg","cast3.jpg","cast4.jpg","cast5.jpg","cast6.jpg","cast7.jpg","cast8.jpg","cast9.jpg"];
let bandagePics = ["bandage0.jpg","bandage1.jpg","bandage2.jpg","bandage3.jpg","bandage4.jpg","bandage5.jpg","bandage6.jpg","bandage7.jpg","bandage8.jpg","bandage9.jpg"];
var allPics = [grillPics, coughPics, castPics, bandagePics];
var scoreCounter = 0;

function grillClicked(){
  let category = getRandomPic();
  if(category == 0) {
    scoreCounter++;
    document.getElementById("score").innerHTML = "Your Doctor Score: " + scoreCounter;
  }
	console.log("Clicked");
};
function coughClicked(){
	console.log("Clicked");		
};
function castClicked(){
	console.log("Clicked");	
};
function bandageClicked(){
	console.log("Clicked");	
};
function getRandomPic(){
	let x = Math.floor(Math.random() * 4);
	let y = Math.floor(Math.random() * 10);
	document.getElementById("changingImage").src = allPics[x][y];
  return x;
};
