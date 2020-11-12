export function Arrays() {
  this.source = [1,1,2,2,3,3,4,4,5,5,6,6];
  this.display = [];
}

Arrays.prototype.addNum = function (i) {
  this.display.push(this.source[i]);
}


Arrays.prototype.randNum = function(min, max) {
min = Math.ceil(1)
max = this.source.length
Math.floor(Math.random() * (max - min +1) + min);
}

//psuedo code 
// displayArray[]
// numArray[1,1,2,2,3,3,4,4,5,5,6,6]
// var location1 = items[Math.floor(Math.random() * items.length)];
// array Slice/split/splice[location1]
// displayArray.push(location1)