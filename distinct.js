// Return an array without duplicates

const DISTINCT = (data) => {
  const A = new Set();
  let w = 0;
  for (let i = 0 ; i < data.length; i++){
    if (A.has(data[i])) {
      delete data[w];
    } else {
      A.add(data[i]);
    }
    w++;
  };
  return data.filter
  (x => typeof x === 'number');
};

module.exports = DISTINCT;
