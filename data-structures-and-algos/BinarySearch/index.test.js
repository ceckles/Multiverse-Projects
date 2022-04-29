let BinarySearchTree = require('./index');

describe('BinarySearchTree', () => {
  let bst
  const testValues = [3, 13, 1, -9, 62, -4, 0, 22, 2, 8];


  // Before each spec, create a new BST with 20 at the root
  beforeEach(() => {
    bst = new BinarySearchTree(5)
  })

  describe('inital bst', () => {
  	
  	it('inital tree should take a value argument in its constructor', () => {
  		expect(bst.value).toBe(5);
  	});

  	it('inital tree should have left and right values set to null', () => {
  		expect(bst.left).toBe(null);
  		expect(bst.right).toBe(null);
  	});
  })

  it('has methods named `insert`, and `contains`', () => {
    expect(typeof bst.insert).toBe('function')
    expect(typeof bst.contains).toBe('function')
  })

  describe('`insert` method', () => {
    it('makes nodes on the correct branches, without overwriting existing nodes', () => {
      bst.insert(2)
      bst.insert(200)
      expect(bst.value).toBe(5)
      expect(bst.left.value).toBe(2)
      expect(bst.right.value).toBe(200)
    })

    it('sorts values when adding', () => {
      testValues.forEach(val => bst.insert(val))
      expect(bst.value).toBe(5)
      expect(bst.left.value).toBe(3)
      expect(bst.right.value).toBe(13)
      expect(bst.right.right.left.value).toBe(22)
      expect(bst.left.left.right.value).toBe(2)
      expect(bst.left.left.left.right.right.value).toBe(0)
    })
  })

  describe('`contains` method', () => {
    it('returns true if passed a value that exists in the tree', () => {
      testValues.forEach((value) => {
        bst.insert(value)
      })
      testValues.forEach((value) => {
        expect(bst.contains(value)).toBe(true)
      })
    })

  })
 })