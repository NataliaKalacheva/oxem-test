const checkNumber = (value) => {
  if (!value || !Number.isInteger(value) || value <= 0) {
    return false;
  }
  return true;
};

export default checkNumber;
