#!/usr/bin/env ts-node

const somecode =
  'foo = 12.33; print(3); print((foo));bar = 128.4 + 428 ';

const eval = (str) => {
  let curr = 0,
    prev = 0;

  const tokeClass = {
    1: 'Symbol',
    0: null,
    2: 'Int',
    3: null,
    4: 'Float',
    7: 'Int',
    9: 'Operator',
  };
  const table = {
    0: [
      [/[a-z]/, 1],
      [/[=|;]/, 3],
      [/[\s*]/, 0],
      [/[0-9]/, 2],
      [/[\)|\(]/, 6],
      [/[\+]/, 9],
    ],
    1: [
      [/[a-z|0-9]/, 1],
      [/[\s*|=]/, 0],
      [/[\(|\)]/, 6],
    ],
    2: [
      [/[\s*|;]/, 0],
      [/[0-9]/, 2],
      [/\./, 4],
      [/\+/, 9],
    ],
    3: [[/.*/, 0]],
    4: [
      [/[\s*]/, 4],
      [/[0-9]/, 4],
      [/\./, 5],
      [/;/, 0],
      [/[\+]/, 9],
    ],
    5: [[/.*/, new Error('Syntax Error!')]],
    6: [
      [/[\)|\(]/, 6],
      [/[0-9]/, 7],
      [/[a-z]/, 8],
      [/[;]/, 6],
      [/[\s*]/, 0],
    ],
    7: [
      [/[\)|\(]/, 6],
      [/[0-9]/, 2],
      [/[\s*|;]/, 0],
    ],
    8: [
      [/[\)|\(]/, 6],
      [/[a-z]/, 1],
      [/[\s*|;]/, 0],
    ],
    9: [
      [/[\s*]/, 0],
      [/\+/, 9],
    ],
  };
  let tokens = [];
  let currState = 0;
  let nextState = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let nextStateArr = table[parseInt(currState)].find(
      ([regex, rval]) => regex.test(char),
    );

    if (Array.isArray(nextStateArr)) {
      console.log({ currState, nextStateArr, char });
      nextState = nextStateArr[1];
      if (nextState == 5) return tokens;
      if (
        nextState == 0 ||
        [6, 7, 8, 9].includes(nextState)
      ) {
        const tknVal = str.slice(prev, i).trim();
        const tknCls =
          tokeClass[parseInt(currState)] || tknVal;
        tokens.push([tknCls, tknVal]);
        prev = i;
      }
      currState = nextState;
    } else {
      console.log('>> Erorr unidentified state');
      console.log({ currState, nextStateArr, char });
    }
  }

  return tokens;
};

console.log(eval(somecode));
