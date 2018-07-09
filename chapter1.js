//1.1 See if string has repeating characters. Use no additional data structure.

//O(n) time O(n) space
//NOTES: Possible solutions: n^2 checking each character against others. n log n if you sort the array.
// Using bit vector?
// Ask for type of characters (ASCII or Unicode). Immediately return false if string.length > num of ASCII/Unicode chars

let seeIfStringHasDuplicateCharacters1 = (string) => {
	let dict = {};
	for (let inx in string) {
		if (dict[string[inx]] == null) dict[string[inx]] = 1;
		else return true;
	}
	return false;
} 

//console.log(seeIfStringHasDuplicateCharacters1('aabcdefgh'));

// 1.2 Check if one string is a permutation of the other.

// NOTES: 
// Ask for the meaning of permutation. Can characters be repeated? Whitespace? ASCII/Unicode? Case sensitive?
// Sort the array and compare each.

let checkPermutation = (string1, string2) => {
	if (string1.length !== string2.length) return false;
	let dict = {};
	for (let inx in string1) {
		let char = string1[inx];
		dict[char] = (dict[char] == null) ? 1 : dict[char] += 1;
	}

	for (let inx in string2) {
		let char = string2[inx];
		if (dict[char] == null) return false;
		dict[char] -= 1;
	}

	for (let char in dict) {
		if (dict[char] !== 0) return false;
	}
	return true;
}

console.log(checkPermutation('abac', 'cbaa'));