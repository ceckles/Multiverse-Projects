const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
}

const num = 1;
const num2 = 2;
const a = 'a';
const b = 'b';
const functionName1 = (x) => { return x;}; //zero parameters

const functionName2 = a => { 
    let statement = `Hello, ${a}!`
    return statement;
}; // one parameters multi line

const functionName3 = (x,y) => x+y; // two parameters

const functionName4 = num => num + num //implecite return

console.log(rectangleArea(22,10));
console.log(functionName1(a));
console.log(functionName2('chad'));
console.log(functionName3(a,b));
console.log(functionName4(num));