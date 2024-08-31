export function getFullYear() {
  return (new Date().getFullYear());
};

export function getFooterCopy(isIndex=true) {
  return (`Holberton School${isIndex ? "" : " main dashboard"}`)
};