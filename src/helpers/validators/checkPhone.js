const checkPhone = (value) => {
  if (/(\d{0,3})(\d{0,3})(\d{0,4})/.test(value) && value.length === 13) {
    return true;
  }
  return false;
};

export default checkPhone;
