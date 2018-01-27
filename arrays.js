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
  return element.push();
}

function accessElementInArray(element){
  console.log(element[0])
}

function destructivelyRemoveElementFromBeginningOfArray(element){
  return element.shift()
}

function destructivelyRemoveElementFromEndOfArray(element){
  return element.pop()
}