export const GET_USER = 'GET_USER' //action type I
const SET_USER = 'SET_USER' // action type II

export const getUser = () =>{ //action creator function I
    return {
        type: GET_USER
    }
}
export const setUser = (user) =>{ //action creator function II
    return {
        type: SET_USER,
        user
    }
}

const initialState = { //initial state of user data
    user: undefined
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_USER:
            const { user } = action;
            return {
                ...state,
                user
            }
        default:
            return state
    }
}
export default reducer