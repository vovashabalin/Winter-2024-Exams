// Increment all numbers in dictionary

let inc_numbers = (format_complete, ...rest_variables) => {
  for (const delete_file of format_complete) {
    if ((typeof format_complete[delete_file]).charAt(0).toUpperCase() === 'N') {
      format_complete[delete_file] ++ ;
    }
  }
  return format_complete;
};

module.exports = inc_numbers;
