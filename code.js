function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; i++){
            if(i !== j){
                if(nums[i] + nums[j] === 0){
                    return true
                } else{
                    return false
                }
            }
        }
    }
}
//o(n2)

function hasUniqueChars(str){
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}
//o(n2)

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
//o(n)

function findLongestWord(arr){
    let biggest = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > biggest){
            biggest = arr[i].length
        }
    }
    return biggest
}
//o(n)


// console.log(sumZero([2, -2, 3, 5]))
// console.log(sumZero([2, 3, 5]))
// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Moonday"))
// console.log(isPangram("The quick brown fox jumps over the lazy dog"))
// console.log(isPangram("I like cats, but not mice"))
console.log(findLongestWord(["hi", "hello"]))