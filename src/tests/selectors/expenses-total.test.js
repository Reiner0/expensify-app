import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const action = selectExpensesTotal([]);
  expect(action).toBe(0);
});

test('should correctly add up a single expense', () => {
  const expense = [ expenses[0] ];
  const action = selectExpensesTotal(expense);
  expect(action).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const action = selectExpensesTotal(expenses);
  expect(action).toBe(114195);
});
