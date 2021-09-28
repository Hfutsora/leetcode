/*
 * @lc app=leetcode.cn id=884 lang=typescript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
function uncommonFromSentences(A: string, B: string): string[] {
  const wordList: string[] = [];

  const ASplit = A.split(' ');
  const BSplit = B.split(' ');

  const AWords = createOnceWordList(ASplit);
  const BWords = createOnceWordList(BSplit);

  for (const word of AWords) {
    if (!Array.from(new Set(BSplit)).includes(word)) {
      wordList.push(word);
    }
  }

  for (const word of BWords) {
    if (!Array.from(new Set(ASplit)).includes(word)) {
      wordList.push(word);
    }
  }

  return wordList;
}

function createOnceWordList(words: string[]) {
  const wordObject = {};

  words.forEach(word => {
    if (wordObject[word]) {
      wordObject[word] += 1;
    } else {
      wordObject[word] = 1;
    }
  });

  const onceList: string[] = [];

  for (const key in wordObject) {
    if (wordObject[key] === 1) {
      onceList.push(key);
    }
  }

  return onceList;
}
// @lc code=end
