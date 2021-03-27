export const checkEmail = (value) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value.toLowerCase());
};

export const checkNumber = (value) => {
  if (!value || !Number.isInteger(value) || value <= 0) {
    return false;
  }
  return true;
};

export const checkPhone = (value) => {
  if (/(\d{0,3})(\d{0,3})(\d{0,4})/.test(value) && value.length === 13) {
    return true;
  }
  return false;
};

export const checkOnlyLetters = (value) => {
  if (/^[a-zA-Z]+$/.test(value) && value.length >= 3) {
    return true;
  }
  return false;
};
