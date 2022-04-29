function isPalendrome(str){
	//Complete the function!
	//no need to check case if its just checking for matching forward and reverse
	let reverse = str.split('').reverse( ).join('');
	return true ? str == reverse : false;
}


function isPermutationPalendrome(str) {
  // Complete the function!
  const hash = {};
  let count = 0;
  for (let i = 0; i < str.length; i++) {
	 let c = str[i];
	 if(c === ' '){
		continue;
	 };
	 if(hash[c]){
		delete hash[c];
	 }else{
		hash[c] = true;
	 };
	 count++;
  };

  if(count % 2 === 0){
	 return Object.keys(hash).length === 0;
  }else{
	 return Object.keys(hash).length === 1;
  };
}

module.exports = {isPalendrome, isPermutationPalendrome}