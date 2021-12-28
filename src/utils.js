// mutates and remove invalid keys from obj
export const validateObject = (obj) => {
  const keys = Object.keys(obj);
  const newObj = {};
  for (const key of keys) {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
