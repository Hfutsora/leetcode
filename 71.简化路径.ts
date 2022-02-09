/*
 * @lc app=leetcode.cn id=71 lang=typescript
 *
 * [71] 简化路径
 */

// @lc code=start
function simplifyPath(path: string): string {
  const paths: string[] = [];

  for(const dir of path.split('/')) {
    if(!dir || dir === '.') continue;

    if(dir === '..') {
      paths.pop();

      continue;
    } 

    paths.push(dir);
  }

  return '/' + paths.join('/');
};
// @lc code=end

