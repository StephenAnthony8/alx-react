export function getFullYear() {
  return (new Date().getFullYear());
};

export function getFooterCopy(isIndex=true) {
  return (`Holberton School${isIndex ? "" : " main dashboard"}`)
};

export function getLatestNotification() {
  return ("<strong>Urgent requirement</strong> - complete by EOD")
};