const defaultState = {
    usersData: [],
    hasMore: true,
}

export default function projectsReducer(state = defaultState, action) {
    switch (action.type) {
    case "SET_IS_NEXT_AVAILABLE":
        return {
            ...state,
            hasMore: action.payload,
        }
    case "ADD_USERS_DATA":
        return {
            ...state,
            usersData: [...state.usersData, ...action.payload],
        }
    default:
        return state;
    }
}