
const findSum = function(array) {
    return array.reduce((acc, num) => num + acc, 0)
};
  
const findFrequency = function(array) {
    const frequencyCount = (strArray) => {
      let freqObj = {};
      strArray.forEach((value) => !freqObj[value] ? freqObj[value] = 1 : freqObj[value] += 1)
      return freqObj
    }
    const frequency = frequencyCount(array)
    let result = {};
    result.most = Object.keys(frequency).reduce((acc, x) => frequency[x] > frequency[acc] ? x : acc)
    result.least = Object.keys(frequency).reduce((acc, x) => frequency[x] < frequency[acc] ? x : acc)
    return result
};
  
const isPalindrome = function(str) {
    return str.toLowerCase().split('').every((x, index, array) => x === array[array.length-1-index])
};
  
const largestPair = function(array) {
    return array.reduce((acc, x, index, arr) => x*arr[index-1] > acc ? x*arr[index-1] : acc, Number.NEGATIVE_INFINITY)
};
  
const removeParenth = function(str) {
    let strArray = str.split('');
    strArray.splice(strArray.indexOf('('), strArray.indexOf(')')-strArray.indexOf('(')+1)
    return strArray.join('');
};
  
const scoreScrabble = function(str) {
    const scoreTable = {
      aeioulnrst: 1,
      dg: 2,
      bcmp: 3,
      fhvwy: 4,
      k: 5,
      jx: 8,
      qz: 10
    }
    const scoreLetter = (letter) => {
      return scoreTable[Object.keys(scoreTable).find((element) => element.includes(letter))]
    }
    return str.split('').reduce((acc, letter) => scoreLetter(letter)+acc, 0)
};
