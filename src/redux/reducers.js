import { 
  VisibilityFilters, 
  SET_VISIBILITY_FILTER, 
  ADD_TODO, 
  TOGGLE_TODO } from './actions';
  
const { SHOW_ALL } = VisibilityFilters;

import { combineReducers } from 'redux';

const todos = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos,
        {
          test: action.text,
          completed: false,
        }];
    case TOGGLE_TODO:
      return todos.map((todo, index) => {
        if (index == action.index) {
          return Object.assign({},todo,
            {completed: !todo.completed});
        }
        return todo;
      });
    default: return todos;
  }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

// const todoApp = (state = {}, action) =>  {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action),
//   };
// };

//Is equivalent to:

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;