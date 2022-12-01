function addDots(number = 0) {
  if (number?.toString().charAt(0) > 0) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  }
  return number;
}

export default addDots;
