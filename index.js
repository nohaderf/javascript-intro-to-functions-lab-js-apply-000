function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var lowercase = "hello";
  var uppercase = "HELLO!";
  var loveGrandma = "I love you, Grandma.";
  
  if (lowercase === string.toLowerCase()){
  return "I can't hear you!";
  } if (uppercase === string.toUpperCase()){
    return "YES INDEED!";
  } if (string === loveGrandma){
    return "I love you, too.";
  }
}