const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(z => z.split(" ")
  //Each string within the initial tutorials array has been changed with .split(" ") to an array with each word "split"
  //["what", "does", "the", "this", "keyword", "mean?"

  .map(x => x.replace(x.charAt(0), x.charAt(0).toUpperCase()))
  //Have a nested map on the returned split array; each element is also an array, so we can use another .map()
  //We want to use the string method of replace for each first character at (charAt) the index of 0 for the string
  //Change each of those to upperCase()
  
  .join(" "));
  //Each element inside of the new, mapped, returned array is still an array, so we want to bop that shit back to being a string
  //Use .join(" ") and it should return the answer
  //This shit took me way too fucking long, fuck you guys for making me struggle and making me sad :^( jk ily
}