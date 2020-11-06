/*Complete the function to return true if the two arguments given are
anagrams of each other; return false otherwise.*/

function isAnagram(test, original) {

  original = original.toLowerCase().split('').sort();
  test = test.toLowerCase().split('').sort();

 return ((test.join('') === original.join(''))?true : false);
}

console.log(isAnagram("Buckethead", "DeathCubeK"));