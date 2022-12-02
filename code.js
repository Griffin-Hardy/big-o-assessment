function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; i++){
            if((arr[i] + arr[j]) === 0){
                return true
            }else{
                return false
            }
        }
    }
}
//o(n)

function hasUniqueChars(str){
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }else{
                return true
            }
        }
    }
}
//o(n)

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
//o(1)

function findLongestWord(arr){
	let longest = arr[0]
	for (let i = 0; i < arr.length; i++) {
		if(arr[i].length > longest.length){
			longest = input[i];
		}
	}
	return longest.length;
} 
//o(n)


// console.log(sumZero([2, -2, 3, 5]))
// console.log(sumZero([2, 3, 5]))
// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Moonday"))
// console.log(isPangram("The quick brown fox jumps over the lazy dog"))
// console.log(isPangram("I like cats, but not mice"))
// console.log(findLongestWord(["hi", "hello"]))