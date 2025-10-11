export default function Challenges() {
  const string1 = "abcde";
  const string2 = "aabc";

  //   const problem1 = (string) => {
  //     const split = string.split("");
  //     let allUnique = true;
  //     for (let i = 0; i < string.length; i++) {
  //       console.log(!split.toSpliced(i, 1).includes(string[i]));
  //       allUnique = !split.toSpliced(i, 1).includes(string[i]);
  //       if (!allUnique) break;
  //     }

  //     if (allUnique) {
  //       return "true";
  //     } else {
  //       return "false";
  //     }
  //   };

  const identifyUniqueChars = (string) => {
    return new Set(string).size === string.length;
  };

  const string3 = "aabccdeff";
  const string4 = "xxyzx";

  const firstNonRepeatingLetter = (string) => {
    const split = string.split("");

    for (let i = 0; i < split.length; i++) {
      const letter = split[i];
      const newArray = split.toSpliced(i, 1);

      if (!newArray.includes(letter)) return split[i];
    }
  };

  const string5 = "You really outdid yourself this time!";

  const countTheVowels = (string) => {
    const noFirstYLetter = string
      .toLowerCase()
      .split(" ")
      .map((word) => (word[0] === "y" ? word.slice(1) : word))
      .join(" ");

    const vowelArray = ["a", "e", "i", "o", "u", "y"];

    const vowels = noFirstYLetter.split("").reduce((acc, current) => {
      if (!vowelArray.includes(current)) return acc;

      if (!acc[current]) {
        acc[current] = 0;
      }
      acc[current]++;
      return acc;
    }, {});

    return JSON.stringify(vowels);
  };

  const numbersArray = [1, 3, 2, 2, 4, 5, 7, 0];
  const target = 5;

  const findPairs = (array, target) => {
    const correctTotals = [];

    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          correctTotals.push([array[i], array[j]]);
        }
      }
    }

    return JSON.stringify(correctTotals);
  };

  return [
    `${identifyUniqueChars(string2)}, ${firstNonRepeatingLetter(
      string3
    )}, ${countTheVowels(string5)}, ${findPairs(numbersArray, target)}`,
  ];
}
