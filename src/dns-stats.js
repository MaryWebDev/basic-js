const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  domains = domains.map(x => '.' + x.split('.').reverse().join('.'));
  let res = {};
  for (let i = 0; i < domains.length; i++) {
    while (domains[i]) {
      if (res[domains[i]]) {
        res[domains[i]]++;
      } else {
        res[domains[i]] = 1;
      }
      domains[i] = domains[i].replace(/\.\w+$/, '');
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
