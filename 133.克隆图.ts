/*
 * @lc app=leetcode.cn id=133 lang=typescript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * Definition for Node.
 */

export {};

// class Node {
//   val: number;
//   neighbors: Node[];
//   constructor(val?: number, neighbors?: Node[]) {
//     this.val = val === undefined ? 0 : val;
//     this.neighbors = neighbors === undefined ? [] : neighbors;
//   }
// }

function cloneGraph(node: Node | null): Node | null {
  const vistedMap: Map<number, Node> = new Map();

  if(!node) {
    return null;
  }

  const queue: Node[] = [];

  const clonedNode = new Node(node.val, []);
  vistedMap.set(node.val, clonedNode);
  
  queue.push(node);

  while(queue.length) {
    const nextNode = queue.shift();

    for(const neighbor of nextNode.neighbors) {
      if(!vistedMap.get(neighbor.val)) {
        const clonedNeighborNode = new Node(neighbor.val, []);
        vistedMap.set(clonedNeighborNode.val, clonedNeighborNode);

        queue.push(neighbor);
      }


      const curClonedNode = vistedMap.get(nextNode.val);
      const clonedNeighborNode = vistedMap.get(neighbor.val);
      curClonedNode.neighbors.push(clonedNeighborNode);
    }
  }


  return clonedNode;
}
// @lc code=end
