export default (expenses, { text, sortBy, startDate, endDate }) => {
  getExpensesTotal = expenses => {
    if (expenses.length > 1) {
      const addAmount = expense => {
        return expense.amount;
      };
      return expenses.reduce(addAmount, 0);
    } else if (expenses.length === 1) {
      return expenses[0].amount;
    } else {
      return 0;
    }
  };
};
