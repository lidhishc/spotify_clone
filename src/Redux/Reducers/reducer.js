const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null
}

const details = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state
    }
}

export default details