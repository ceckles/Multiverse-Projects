let selectedColors = ['Red', 'Blue'];
selectedColors[2] = 'Green';
selectedColors[3] = 1;
selectedColors[4] = "A";
selectedColors.push("Orange"); // add to end of array
console.log(selectedColors);
selectedColors.unshift("Yellow"); //add to begging of array
console.log(selectedColors);
selectedColors.shift(); //removed first item in array
console.log(selectedColors);
selectedColors.pop(); //remove last item
console.log(selectedColors);
//selectedColors.splice(3,1); //remove item 3 is loaction 1 is amount of items to remove

console.log(selectedColors.filter((item) => typeof item !== "number")); //filter array to only show Strings
console.log(selectedColors.includes("Red")); //T/F is pressenct
console.log(selectedColors.length);
console.log(selectedColors[0]);
selectedColors[1]= "Purple";
console.log(selectedColors);
console.log(selectedColors.indexOf("Green") + " Index of");
selectedColors.forEach((item) => console.log(item)); //short way

for( let i = 0; i < selectedColors.length; i++){
    console.log(selectedColors[i]);
} //Long way