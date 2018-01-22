// 1 Get first letter = firstChar *
// 2 Check if next character is next character in the alphabet  *
// 		3 Check if another character is available *
//  			4 repeat line 2 for next character *
//     		 5 else      
//  6 return undefined
// 7 else
//           Return expected character *
          
          
function fearNotLetter(str) {
  var firstLetter = str[0];
//   console.log(firstLetter.charCodeAt(0));
//   console.log("code for a is", "a".charCpdeAt(0));
  //running method on specific variable
  for (var i = 0; i < str.length -1; i++) {
      //console.log(str[i]);
  if (str.charCodeAt(i + 1) === str.charCodeAt(i) + 1) {
    console.log ("next character is the next alphabetically");
  }  else  {
    console.log("found missing character");
    return String.fromCharCode(str.charCodeAt(i) + 1);
  }
}
  console.log("hello");
  return undefined;
}

fearNotLetter("abce");
