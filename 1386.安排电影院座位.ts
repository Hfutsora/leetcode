/*
 * @lc app=leetcode.cn id=1386 lang=typescript
 *
 * [1386] 安排电影院座位
 */

// @lc code=start
function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
  let familyNum = 0,
    resvMap = new Map();

  reservedSeats.forEach((val, idx, arr) => {
    let col = [];
    if (!resvMap.has(val[0] - 1)) {
      col.push(val[1] - 1);
    } else {
      col = resvMap.get(val[0] - 1);
      col.push(val[1] - 1);
    }
    resvMap.set(val[0] - 1, col);
  });

  resvMap.forEach((val) => {
    let row = [];

    for (let i = 0; i < 10; i++) {
      if (val.indexOf(i) === -1) row.push(1);
      else row.push(0);
    }
    familyNum += Math.max(
      (row[1] & row[2] & row[3] & row[4]) + (row[5] & row[6] & row[7] & row[8]),
      row[3] & row[4] & row[5] & row[6]
    );
  });

  familyNum += (n - resvMap.size) * 2;

  return familyNum;
}
// @lc code=end
