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
  console.log(index[0])
}

function destructivelyRemoveElementFromBeginningOfArray(element){
  return element.shift()
}

function destructivelyRemoveElementFromEndOfArray(element){
  return element.pop()
}