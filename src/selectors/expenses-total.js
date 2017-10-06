export default (expenses = []) => {
  if (expenses.length >= 1) {
    const addAmount = expense => expense.amount;
    const total = expenses.map(expense => addAmount(expense)).reduce((sum, value) => sum + value);
    return total;
  } else {
    return 0;
  }
};
