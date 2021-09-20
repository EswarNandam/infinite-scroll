import actionCreator from "../utils/actionCreator";


export function fetchUsersData(offset) {
    return (dispatch) => {
        fetch(`http://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=10`)
      .then(res => res.json())
      .then(result => {
        if (result.length > 0) {
          dispatch(actionCreator('ADD_USERS_DATA', result));
          dispatch(actionCreator('SET_IS_NEXT_AVAILABLE', true));
        } else {
          dispatch(actionCreator('SET_IS_NEXT_AVAILABLE', false));
        }
      });
    }
}
