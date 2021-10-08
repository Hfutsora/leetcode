/*
 * @lc app=leetcode.cn id=1319 lang=typescript
 *
 * [1319] 连通网络的操作次数
 */

// @lc code=start
// function makeConnected(n: number, connections: number[][]): number {
//   const list = new Array(n).fill(0);
//   const colorMap = new Map();
//   let extraConnect = 0;

//   for (const conn of connections) {
//     if (list[conn[0]] && list[conn[1]] && list[conn[0]] === list[conn[1]]) {
//       // 已连通区域
//       extraConnect += 1;
//     } else if (list[conn[0]] || list[conn[1]]) {
//       let dyedConn: number;
//       let color: Symbol;
//       let dyedList: number[];

//       if(list[conn[0]]) {
//         color = list[conn[0]];
//         dyedConn = conn[1];
//       } else {
//         color = list[conn[1]];
//         dyedConn = conn[0];
//       }
//       dyedList = colorMap.get(list[dyedConn]);

//       if (dyedList?.length) {
//         // 合并染色区域

//         colorMap.get(color).push(...dyedList);
//         colorMap.delete(list[dyedConn]);

//         for(const dyed of dyedList) {
//           list[dyed] = color;
//         }
//       } else {
//         // 增加染色区域
//         colorMap.get(color).push(dyedConn)
//         list[dyedConn] = color;
//       }

//     } else {
//       // 染色初始化
//       const color = Symbol('color');
//       list[conn[0]] = color;
//       list[conn[1]] = color;
//       colorMap.set(color, [...conn]);
//     }
//   }

//   // 计算不同染色区数量 以及 未被染色总数
//   const count = colorMap.size - 1 + list.filter(item => !item).length;

//   return extraConnect >= count ? count : -1;
// }
function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) {
    return -1;
  }

  const uf = new UnionFind(n);
  for (const conn of connections) {
      uf.unite(conn[0], conn[1]);
  }

  return uf.setCount - 1;
}

class UnionFind {
  parent: number[];
  size: number[];
  setCount: number;

  constructor(n: number) {
    this.parent = new Array(n).fill(0).map((_, index) => index);
    this.size = new Array(n).fill(1);
    this.setCount = n;
  }

  findSet(x: number) {
    if(this.parent[x] === x) {
      return x;
    }

    this.parent[x] = this.findSet(this.parent[x]);

    return this.parent[x];
  }

  unite(a: number, b: number) {
    let x = this.findSet(a);
    let y = this.findSet(b);


    if(x === y) {
      return false;
    }

    if(this.size[x] < this.size[y]) {
      [x, y] = [y, x];
    }

    this.parent[y] = x;
    this.size[x] += this.size[y];
    this.setCount -= 1;

    return true;
  }

  connected(a: number, b: number) {
    return this.findSet(a) === this.findSet(b);
  }
}

// @lc code=end
