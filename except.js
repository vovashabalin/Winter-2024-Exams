// Copy all values from dict except listed

const except = (incomingvaluesarray, ...no) => {
  const intermediate_variable = Object.keys(incomingvaluesarray, 'a', 'b', 'c');
  intermediate_variable.forEach((Z) => {
    if (no.includes(Z)) {
      delete incomingvaluesarray[Z];
    } 
  } );
  return incomingvaluesarray;
};
module.exports = except;
