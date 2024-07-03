/**
 * Some default date formatting
 * @param {string} dateStr - The date string to format
 * @returns {Date} Formatted date
 */
export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

/**
 * Calculates minutes left between now and dateStr
 * @param {string} dateStr - The date to compare with
 * @returns {number} Minutes left between now and dateStr
 */
export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
