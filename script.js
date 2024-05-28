function firstWord(str) {
  // your code here
	 const trimmedStr = str.trim();

  // Find the index of the first space
  const firstSpaceIndex = trimmedStr.indexOf(' ');

  if (firstSpaceIndex === -1) {
    // No space found, return the entire string
    return trimmedStr;
  } else {
    // Extract the first word up to the first space
    return trimmedStr.slice(0, firstSpaceIndex);
  }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
