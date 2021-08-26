export default function (state, action) {
    switch (action.type) {
        case '+':
            return state+10;
        case '-':
            return state - 2;
        default:
            return state;
    }
}
