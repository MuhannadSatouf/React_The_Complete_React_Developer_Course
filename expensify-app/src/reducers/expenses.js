//-----------Expenses Reducer-----------

const expenseReducerDefault = [];

export default (state = expenseReducerDefault, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      //Spread in array
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id); //The filter will check if the id is true will remove it otherwise will not
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
