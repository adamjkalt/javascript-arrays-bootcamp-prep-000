var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array1, element){
  return [element, ...array1]
}

function destructivelyAddElementToBeginningOfArray(array2, element){
  array2.unshift(element)
  return array2
}

function addElementToEndOfArray(array3, element){
  return [...array3, element]
}

function destructivelyAddElementToEndOfArray(array4, element){
  array4.push(element)
  return array4
}

function accessElementInArray(array5, index){
  return(array5[2])
}

function destructivelyRemoveElementFromBeginningOfArray(array6, element){
  array6.shift(element)
  return array6
}

function destructivelyRemoveElementFromEndOfArray(array7, element){
  array7.push(element)
  return array7
}