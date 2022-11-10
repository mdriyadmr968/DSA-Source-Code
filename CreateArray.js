class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  deleteAtIndex(index){
    const item = this.data[index]
    this.shiftItems(index);
    return item
  }
  shiftItems(index){ //shift item to the right
    for (let i = index; i < this.length; i++){
        this.data[i]=this.data[i+1];
        
              
    }
    console.log(this.data[this.length-1]);
    delete this.data[this.length-1]
    this.length--

  }
}
const myArray = new MyArray();

// console.log(myArray);
myArray.push("hi");
myArray.push("ji");
myArray.push("ki");
myArray.push("li");
myArray.push("mi");
// console.log(myArray.get(0));
myArray.pop();
myArray.deleteAtIndex(2);
myArray.shiftItems(0);
console.log(myArray);
