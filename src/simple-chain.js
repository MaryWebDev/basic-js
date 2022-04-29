const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  length: 0,
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.length++;
    this.chain += this.chain ? `~~( ${value} )` : `( ${value} )`;
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.length || position <= 0) {
      this.chain = '';
      this.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.length--;
    let tmp = this.chain.split('~~');
    tmp.splice(position-1, 1);
    this.chain = tmp.join('~~');
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let tmp = this.chain;
    this.chain = '';
    this.length = 0;
    return tmp;
  }
};

module.exports = {
  chainMaker
};
