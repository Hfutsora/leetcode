
type D = [1, 0] | [0, 1] | [-1, 0] | [0, -1];

function walk(array: number[][]) {
  let direction: D = [1, 0];
  
  array[0][0] = 1;
  
  const xLength = array[0].length;
  const yLength = array.length;
  
  let step = 2;
  let next = [0, 0];
  while(true) {
    // 判断下一步在哪
    next = [next[0] + direction[0], next[1] + direction[1]];

    array[next[0]][next[1]] = step++;

    // 判断是否存在下一步
    return array;
  }
}

const array = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]