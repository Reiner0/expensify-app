import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>${(amount / 100).toFixed(2)} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;
