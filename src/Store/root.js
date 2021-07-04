const ADD = 'ADD';
const SUB = 'SUB';

const root = (state, action) => {
    const { type, message } = action;
    switch(type) {
        case ADD:
            return [
                ...state,
                message
            ]
        case SUB:
            return [
                ...state,
                message.split(-1)
            ]
        default:
            return state;
    }
};

export default root;