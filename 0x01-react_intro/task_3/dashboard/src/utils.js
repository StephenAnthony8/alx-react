
/**
 * getFullYear - function that returns the current year
 * Return: string. current year
 */
export function getFullYear() {
  const thisYear = new Date(Date.now());
  return (thisYear.getFullYear());
};

/**
 * getFooterCopy - function that returns a string based on a bolean arg
 * isIndex: boolean argument
 * Return: string - Holberton school + main dashboard(if false)
 */
export function getFooterCopy(isIndex = true) {
  return (isIndex ? 'Holberton School' : 'Holberton School main dashboard');
};

export function getLatestNotification() {
  return('<strong>Urgent requirement</strong> - complete by EOD');
};



