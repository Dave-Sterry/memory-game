export function Arrays() {
  this.source = [1,1,2,2,3,3,4,4,5,5,6,6];
  this.display = [];
}

Arrays.prototype.addNum = function () {
  this.display.push(this.source[0]);
}





//psuedo code 
// displayArray[]
// numArray[1,1,2,2,3,3,4,4,5,5,6,6]
// var location1 = items[Math.floor(Math.random() * items.length)];
// array Slice/split/splice[location1]
// displayArray.push(location1)