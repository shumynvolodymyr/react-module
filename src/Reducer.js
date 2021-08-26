const reducer = (state, action) => {

    switch (action.type) {

        case '-': {
            switch (action.obj) {
                case 'a': {return {...state, a: state.a--}}
                case 'b': {return {...state, b: state.b--}}
                case 'c': {return {...state, c: state.c--}}
                default: return state;
            }
        }
        case '+': {
            switch (action.obj) {
                case 'a': {return {...state, a: state.a++}}
                case 'b': {return {...state, b: state.b++}}
                case 'c': {return {...state, c: state.c++}}
                default: return state;
            }
        }
        case 'change': {
            switch (action.obj) {
                case 'a': {return {...state,a: action.newValueA}}
                case 'b': {return {...state,b: action.newValueB}}
                case 'c': {return {...state,c: action.newValueC}}
            }
        }
break;
        default: return {...state};
    }


}

export default reducer;
