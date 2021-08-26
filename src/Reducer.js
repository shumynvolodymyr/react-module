const reducer = (state, action) => {
    switch (action.obj) {

        case 'a': {
            switch (action.type) {
                case '-': {return {...state, a: state.a--}}
                case '+': {return {...state, a: state.a++}}
                default: return state;
            }
        }
        case 'b': {
            switch (action.type) {
                case '-': {return {...state, b: state.b--}}
                case '+': {return {...state, b: state.b++}}
                default: return state;
            }
        }
        case 'c': {
            switch (action.type) {
                case '-': {return {...state, c: state.c--}}
                case '+': {return {...state, c: state.c++}}
                default: return state;
            }
        }
        default: return {...state};
    }

}

export default reducer;
