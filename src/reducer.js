const reducer = (state, action)=> {
    switch (action.type) {
        case '+':
            return state+10;
        case '-':
            return state - 2;
        case 'reset':
            return state = 0;
        default:
            return state;
    }
}

export default reducer;

