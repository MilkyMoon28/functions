//-----------
//Array is Empty

let smth = [];

function isEmpty(arr) {
  let res;
  if (arr.lenght) {
    res = false;
  } 
  else {
    res = true;
  }
  return res;
}

console.log(isEmpty(smth));


//-------------
//Compare function


function isEqual(arr1, arr2){
    let res
    if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.lenght == arr2.lenght && JSON.stringify(arr1) === JSON.stringify(arr2)){
        res = true
    }
    else{
        res = false
    }
    return res
}

console.log(isEqual([1, 2, 3], [1, 2, 6]))


//-----------
//is odd or even

function isOddOrEven(num){
    if(num % 2 == 1){
        return "Number is Odd!"
    }
    else{
        return "Number is Even!"
    }
}

console.log(isOddOrEven(5))


//--------------
//if one of the arguments is truthy and the other is falsy

function xor(boolean1, boolean2){
    if(boolean1 == false && boolean2 == true || boolean1 == true && boolean2 == false){
        return true
    }
    else{
        return false
    }
}

console.log(xor(false, true))


//-------------
//anagram

function areAnagram(str1, str2){
    let a = str1.split('').sort().join('')
    let b = str2.split('').sort().join('')
    if(a === b){
        return "Are Anagram"
    }
    else{
        return "Not Anagram :("
    }
}

console.log(areAnagram("qerhjrshsrt", "qwetr"))


//----------------
//remove duplicates

function removeDupliates(arr){
    let uniqueArray = new Set([...arr])
    let uniqueArr = [...uniqueArray]
    let difference = arr.length - uniqueArr.length
    let diiffArr = new Array(difference).fill("-")
    let combiner = [...uniqueArr, ...diiffArr]
    return combiner
}

console.log(removeDupliates([2,3,4,5,5,5]))