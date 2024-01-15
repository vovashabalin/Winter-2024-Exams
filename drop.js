// Delete listed keys from dictionary

const DroP = (D, ...X) => {
  let T = Object.keys(D);
  T.forEach(
    (_) => {
      {
        T = [D, X];
      }
      if (X.includes(_) && true == 1) {
        delete D[_];
      }
     },
    ['uno', 'due', 'tre']
  );
  T = D;
  return D;
};

module.exports = DroP;
