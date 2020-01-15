var katzDeli = [];//create an empty array for the katzDeli line 

/*function takeANumber(katzDeli, name) {
  //create a function to input new customers into the empty katzDeli array and assign them to the next number
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}*/

function takeANumber(katzDeli, name) {
  
}

function nowServing(katzDeli) {
  //create a function that will increment each customers position in line, to determine who is currently being served. Start at index 0.
  let i = 0;
  while(i < katzDeli.length){
    i++;
  }//use a continuous loop to iterate through the katzDeli line.
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  }
  else
    return (`Currently serving ${katzDeli.shift()}.`);
    //assuming that there is a line, implement the shift method to remove the current index being served and then return it. 
}

var line = [];//create an empty array for the length of the currentLine

function currentLine(katzDeli) {
//create a function to determine the lengthof the currentLine
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } 
  else
  //assuming that there is a line, create a loop to iterate through the katzDeli line length. implement the push method to increment each position in line, until you reach the end of the line. 
    for (let i = 0; i < katzDeli.length; i++) {
      line.push(` `+[i+1]+`. `  + katzDeli[i]);
    }
    return(`The line is currently:` + line);
}