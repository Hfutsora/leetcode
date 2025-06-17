/*
 * @lc app=leetcode.cn id=648 lang=typescript
 *
 * [648] 单词替换
 */

// @lc code=start
function replaceWords(dictionary: string[], sentence: string): string {
  const replace = (word: string) => {
    let match = word

    for (let i = 0; i < dictionary.length; i++) {
      const dict = dictionary[i]

      if (dict.length < match.length && word.startsWith(dict)) {
        match = dict
      }
    }

    return match
  }

  return sentence.split(' ').map(replace).join(' ')
};
// @lc code=end

