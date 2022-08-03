module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = [];
  for (let elem of bracketsConfig) {
    let temp1 = elem[0];
    let temp2 = elem[1];
    openBrackets.push(temp1);
    closeBrackets.push(temp2);
  }
  let checkArray = [];
  if (openBrackets.includes(str[0])) {
    checkArray.push(str[0]);
  } else return false;
  for (let i = 1; i < str.length; i++) {
    let currentBracket = str[i];
    if (
      openBrackets.includes(currentBracket) &&
      currentBracket !== checkArray[checkArray.length - 1]
    ) {
      checkArray.push(currentBracket);
    } else {
      if (checkArray.length === 0) {
        return false;
      }
      let topBracket = checkArray[checkArray.length - 1];
      let tempIndex = [];

      for (let elem of bracketsConfig) {
        if (elem[0] === topBracket && elem[1] === str[i]) {
          tempIndex.push(1);
        } else {
          tempIndex.push(0);
        }
      }
      if (tempIndex.includes(1)) {
        checkArray.pop();
      } else {
        return false;
      }
    }
  }
  let cond = true;
  while (cond) {
    let action = 0;
    for (let i = 0; i < checkArray.length; i++) {
      if (checkArray[i] === checkArray[i + 1]) {
        checkArray.splice(i, 2);
        action = 1;
      }
    }
    if (action === 0) cond = false;
  }
  if (checkArray.length === 0) {
    return true;
  } else {
    return false;
  }
};
