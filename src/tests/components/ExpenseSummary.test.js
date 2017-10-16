import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { filters } from '../fixtures/filters';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expensesTotal={9434} expensesCount={1} />)
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expensesTotal={9434} expensesCount={2} />)
  expect(wrapper).toMatchSnapshot();
});
