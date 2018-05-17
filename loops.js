function forLoop(array) {
  n = length.array
  for(i = 0; i<25; i++){
    if(i===1) { 
      array[n+i] = "I am 1 strange loop."
    }
    else {
      array[n+i] = `I am ${i} strange loops.`
    }
  }
  return array
}