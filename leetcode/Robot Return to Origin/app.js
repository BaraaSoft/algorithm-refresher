// Robot Return to Origin
// https://leetcode.com/problems/robot-return-to-origin/


var judgeCircle = function (moves) {

    let vertical = 0;
    let horizontal = 0;

    for (let move of moves) {
        if (move == 'U') vertical++;
        if (move == 'D') vertical--;
        if (move == 'R') horizontal++;
        if (move == 'L') horizontal--;
    }

    return (vertical == 0) && (horizontal == 0)

};