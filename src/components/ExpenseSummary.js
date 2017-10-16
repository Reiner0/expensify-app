import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = props => (
  <div>
    {
      props.expensesCount > 0 &&
        <p>
          Viewing {props.expensesCount} {props.expensesCount > 1 ? 'expenses' : 'expense'} totaling {
            numeral(props.expensesTotal / 100).format('$0,0.00')
          }
        </p>
    }
  </div>
);

const mapStateToProps = state => {
  return {
    expensesTotal: expensesTotal(selectExpenses(state.expenses, state.filters)),
    expensesCount: selectExpenses(state.expenses, state.filters).length
  };
}

export default connect(mapStateToProps)(ExpenseSummary);
