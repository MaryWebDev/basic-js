const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(msg, key) {
    if (!msg || !key) throw new Error('Incorrect arguments!');
    key = key.repeat(Math.ceil(msg.length/key.length)).slice(0, msg.length).toUpperCase();
    let enc = msg.toUpperCase().split('');
    for (let i = 0, j = 0; i <= enc.length; i++, j++) {
      if (/[A-Z]/.test(enc[i])) {
        enc[i] = String.fromCharCode((enc[i].charCodeAt(0) + key.charCodeAt(j) - 65 * 2) % 26 + 65);
      } else {
        j--;
      }
    }
    return this.direct ? enc.join('') : enc.reverse().join('');
  }

  decrypt(msg, key) {
    if (!msg || !key) throw new Error('Incorrect arguments!');
    key = key.repeat(Math.ceil(msg.length/key.length)).slice(0, msg.length).toUpperCase();
    let enc = msg.split('');
    for (let i = 0, j = 0; i <= enc.length; i++, j++) {
      if (/[A-Z]/.test(enc[i])) {
        enc[i] = String.fromCharCode((enc[i].charCodeAt(0) - key.charCodeAt(j) + 26) % 26 + 65);
      } else {
        j--;
      }
    }
    return this.direct ? enc.join('') : enc.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
