
export function formatCurrency(amount) {
  return "$" + amount;
}
export function generateRandomId() {
  return Math.floor(Math.random() * 10000);
}
export function getTodayDate() {
  return new Date().toLocaleDateString();
}