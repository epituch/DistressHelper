console.log("JS Loaded");
let grillPics = [];
let coughPics = [];
let casePics = [];
let bandagePics = [];
let allPics = [grillPics, coughPics, casePics, bandagePics];
function grillClicked(){
	getRandomPic();
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
	document.getElementById("changingImage").src = "";
};
