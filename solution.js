const groupAnagrams = (strs) => {
    const anagramGroups = {};

    for (const str of strs) {
      const sortedStr = str.split('').sort().join('');

      if (!anagramGroups[sortedStr]) {
        anagramGroups[sortedStr] = [];
      }

      anagramGroups[sortedStr].push(str);
    }

    return Object.values(anagramGroups);
  };

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1)); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

const strs2 = [""];
console.log(groupAnagrams(strs2)); // Output: [[""]]

const strs3 = ["a"];
console.log(groupAnagrams(strs3)); // Output: [["a"]]
