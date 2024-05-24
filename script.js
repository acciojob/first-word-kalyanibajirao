function firstWord(s) {
  // your code here
	if (!s) {
        return '';
    }

    const words = s.split(' ');

    return words[0] || s;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
