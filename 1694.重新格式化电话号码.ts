/*
 * @lc app=leetcode.cn id=1694 lang=typescript
 *
 * [1694] 重新格式化电话号码
 */

// @lc code=start
function reformatNumber(number: string): string {
  const phone = number.replace(/-|\s+/g, '');

  if (phone.length < 3) {
    return phone;
  }

  if(phone.length === 4) {
    return createTailString(phone);
  }

  let prevSentence = '';
  let lastSentence = '';

  // left four char
  if (phone.length % 3 === 1) {
    prevSentence = phone.slice(0, phone.length - 4);
    lastSentence = phone.slice(phone.length - 4);
  }

  // left two char
  if (phone.length % 3 === 2) {
    prevSentence = phone.slice(0, phone.length - 2);
    lastSentence = phone.slice(phone.length - 2);
  }

  if (!prevSentence) {
    prevSentence = phone;
  }

  let formatSentence = '';

  for (let i = 0; i < prevSentence.length / 3; i++) {
    formatSentence += prevSentence.slice(i * 3, i * 3 + 3);

    if (i === prevSentence.length / 3 - 1) {
      break;
    } else {
      formatSentence += '-';
    }
  }

  if (lastSentence) {
    formatSentence += `-${createTailString(lastSentence)}`;
  }

  return formatSentence;
}

function createTailString(sentence: string): string {
  if (sentence.length === 4) {
    return `${sentence.substring(0, 2)}-${sentence.substring(2, 4)}`;
  }

  return sentence;
}

// @lc code=end
