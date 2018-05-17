function forLoop(array) {
  n = []
  for(i = 0; i<25; i++){
    if(i===1) { 
      array[i] = "I am 1 strange loop."
    }
    else {
      n[i] = `I am ${i} strange loops.`
    }
  }
  return array = [array, ...n]
}