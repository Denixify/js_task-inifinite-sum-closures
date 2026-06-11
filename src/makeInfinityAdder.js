'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function makeAdder(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += num;

      return makeAdder;
    }
  };
}

module.exports = makeInfinityAdder;
