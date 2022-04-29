const bubbleSort = require('./index');

const randomArray = (n) => {
  let arr = [];
  for(let i = 0; i < n; i++){
    let rand = Math.floor(Math.random() * 10000);
    arr.push(rand)
  }
  return arr
}

describe('Bubble Sort', () => {
  it('sorts an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('sorts an array of one element', () => {
    expect(bubbleSort([42])).toEqual( [42] );
  });

  it('sorts an array of many elements', () => {
    expect(bubbleSort([0, 4, -3, 10, 5, 4, 2, 1])).toEqual([-3, 0, 1, 2, 4, 4, 5, 10]);
  });

  it('Tests for random arrays', () => {
    let arr1 = randomArray(5);
    let arr2 = randomArray(50);
    let arr3 = randomArray(500);

    expect(bubbleSort(arr1)).toEqual(arr1.sort());
    expect(bubbleSort(arr2)).toEqual(arr2.sort());
    expect(bubbleSort(arr3)).toEqual(arr3.sort());
  });
});