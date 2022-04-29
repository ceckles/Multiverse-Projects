class BinarySearchTree {
  //init values
  constructor(n) {
    this.value = n;
    this.left = null;
    this.right = null;
  }
  insert(n) {
    //check left or right for insert
    if (n < this.value && this.left) {
      this.left.insert(n);
    } else if (n < this.value) {
      this.left = new BinarySearchTree(n);
    }
    if (n > this.value && this.right) {
      this.right.insert(n);
    } else if (n > this.value) {
      this.right = new BinarySearchTree(n);
    }
  }
  contains(n) {
    //check which contains(n) left or right
    if (this.value === n) {
      return true;
    }
    if (n < this.value && this.left) {
      return this.left.contains(n);
    } else if (n > this.value && this.right) {
      return this.right.contains(n);
    } else {
      return false;
    }
  }
}
module.exports = BinarySearchTree