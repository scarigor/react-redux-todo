import {
  FETCH_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  FETCH_SUCCEEDED,
  ADD_SUCCEEDED,
  REMOVE_SUCCEEDED,
  TOGGLE_SUCCEEDED,
} from '../constants';

const initialState = {
  todos: [],
  isLoading: false
}

const todos = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TODOS:
    case ADD_TODO:
    case REMOVE_TODO:
    case TOGGLE_TODO:
      return { ...state, isLoading: action.isLoading }

    case FETCH_SUCCEEDED:
      return {
        ...state,
        todos: action.todos,
        isLoading: action.isLoading
      }

    case ADD_SUCCEEDED:
      return {
        ...state,
        todos: [...state.todos, action.todo],
        isLoading: action.isLoading
      }

    case REMOVE_SUCCEEDED:
      const filtered = state.todos.filter(todo =>
        todo._id !== action.id
      )

      return {
        ...state,
        todos: filtered,
        isLoading: action.isLoading
      }


    case TOGGLE_SUCCEEDED:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo._id === action.id ? { ...todo, done: !todo.done } : todo
        ),
        isLoading: action.isLoading
      }

    default:
      return state
  }
}

//selectors
export const getLoadingStatus = state => state.todos.isLoading

export const getCompletedTodos = state =>
  state.todos.todos.filter(t => t.done)

export const getUnCompletedTodos = state =>
  state.todos.todos.filter(t => !t.done)

export default todos;
