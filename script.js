function firstWord(s) {
  return s.trim().split(" ")[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
