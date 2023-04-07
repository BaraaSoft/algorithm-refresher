const text =
  'foo = 12.33; print(3); print((foo));bar = 128.4 + 428;';

const lexer = (str) => {
  const tokenClass = {
    1: 'SYMBOL',
    0: null,
    2: 'EQL',
    3: 'INT',
    4: 'FLOAT',
    5: 'SEMI',
    6: 'PAREN',
    7: 'OPERATOR',
  };
  const table = {
    0: [[/[a-z0-9]/, 1]],
    1: [
      // Symbol
      [/[a-z0-9]/, 1],
      [/[=]/, 2],
      [/[\)|\()]/, 6],
      [/[\s*]/, 1],
      [/[+|-|\*|\/]/, 7],
    ],
    2: [
      // =
      [/[a-z]/, 1],
      [/[0-9]/, 3],
      [/[\)|\()]/, 6],
      [/[\s*]/, 2],
    ],
    3: [
      // Int
      [/[0-9]/, 3],
      [/[=]/, 2],
      [/[.]/, 4],
      [/[\)|\()]/, 6],
      [/[\s*]/, 3],
      [/[+|-|\*|\/]/, 7],
      [/[;]/, 5],
    ],
    4: [
      // Float
      [/[0-9]/, 4],
      [/[;]/, 5],
      [/[.]/, 500],
      [/[\)|\()]/, 6],
      [/[\s*]/, 4],
      [/[+|-|\*|\/]/, 7],
    ],
    5: [
      // ;
      [/[a-z]/, 1],
      [/[0-9]/, 3],
      [/[\)|\()]/, 6],
      [/[\s*]/, 5],
    ],
    6: [
      // )(
      [/[a-z]/, 1],
      [/[0-9]/, 3],
      [/[;]/, 5],
      [/[\)|\()]/, 6],
      [/[\.]/, 4],
      [/[\s*]/, 6],
    ],
    7: [
      // Operator
      [/[a-z]/, 1],
      [/[0-9]/, 3],
      [/[;]/, 500],
      [/[\.]/, 4],
      [/[\s*]/, 7],
    ],
    500: [[/.*/, new Error('Syntax Error!')]],
  };

  const getNextState = (state, input, transitionTabel) => {
    const [, nextState] = transitionTabel[
      parseInt(state)
    ].find(([regex]) => regex.test(input));
    if (!nextState) {
      console.error('>> Erorr unidentified state:', {
        state,
        input,
      });
      return;
    }
    return nextState;
  };
  let tokens = [];
  let currState = 0;
  let prev = -1;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!char) continue;
    let nextState = getNextState(currState, char, table);
    if ([7, 6, 5, 2].includes(nextState)) {
      const prevToken = str.slice(prev + 1, i).trim();
      const currToken = str.slice(i, i + 1).trim();
      prevToken &&
        tokens.push([
          tokenClass[currState] ?? currState,
          prevToken,
        ]);

      currToken &&
        tokens.push([
          tokenClass[nextState] ?? char,
          currToken,
        ]);

      prev = i;
    }
    currState = nextState;
  }

  return tokens;
};

console.log(lexer(text));
