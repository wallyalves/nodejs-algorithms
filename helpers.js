// shallow copy for arrays
const slice = x => x.slice(0);

// if undefined, 0 for integer comparison
const isNil = x => x == undefined || x == null ? 0 : x;

module.exports = Object.freeze({
  slice,
  isNil
});
