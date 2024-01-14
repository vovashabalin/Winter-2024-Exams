// Increment all numbers in dictionary

let inc_numbers = (format_complete, ...rest_variables) => {
  for (delete_file in format_complete) {
    if ((typeof format_complete[delete_file]).charAt(0).toUpperCase() === 'N') {
      format_complete[delete_file] ++;
    }
  }
  return format_complete;
};
console.log(inc_numbers([1,2,3,4,5]))
console.log(inc_numbers([10]))
console.log(inc_numbers(11,16,17))
console.log(inc_numbers('123654'))
console.log(inc_numbers(['123654','896']))
console.log(inc_numbers('Hello'))
console.log(inc_numbers('True'))
module.exports = inc_numbers;
