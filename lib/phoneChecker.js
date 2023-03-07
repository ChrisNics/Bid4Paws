export default function phoneChecker(number) {
  // Regular expression for Philippine mobile and landline numbers
  var regex = /^(09|\+639)\d{9}$|^(\+63|0)2\d{7}$/;
  return regex.test(number);
}
