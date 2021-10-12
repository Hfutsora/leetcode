/*
 * @lc app=leetcode.cn id=1452 lang=typescript
 *
 * [1452] 收藏清单
 */

// @lc code=start
function peopleIndexes(favoriteCompanies: string[][]): number[] {
  let ans: number[] = [];
  const companyIndexMap: {[key: string]: number[]} = {};

  for(let i = 0; i < favoriteCompanies.length; i++) {
    for(const company of favoriteCompanies[i]) {
      if(!companyIndexMap[company]) {
        companyIndexMap[company] = [];
      }

      companyIndexMap[company].push(i);
    }
  }

  for(let i = 0; i < favoriteCompanies.length; i++) {
    let last: number[] | null = null;
    let curr: number[] = [];
    
    for(const company of favoriteCompanies[i]) {
      curr = companyIndexMap[company].filter(j => j !== i);

      if(!last) {
        last = [...curr];
      } else {
        last = last.filter(j => curr.includes(j));
  
        if(!last.length) {
          break;
        }
      }
    }

    if(last.length === 0) {
      ans.push(i);
    }
  }

  return ans;
};
// @lc code=end

