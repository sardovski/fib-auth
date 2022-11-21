export const INITIAL_STATE = {
    firstName: {
        value: ''
    },
    lastName: {
        value: ''
    },
    city: {
        value: ''
    },
    pin: {
        value: ''
    },
    address: {
        value: ''
    },
    email: {
        value: ''
    },
    phone: {
        value: ''
    },
    username: {
        value: ''
    },
    password: {
        value: ''
    },
    repassword: {
        value: ''
    },
    intermediation: {
        value: ''
    },
    contract: {
        value: ''
    }

}

export const registerReducer = (state, action) => {

    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                [action.payload.name]: { ...state[action.payload.name], value: action.payload.value }
            };
        case 'VALIDATE_INPUT':
            return {
                ...state,
                [action.payload.name]: { ...state[action.payload.name], isValid: action.payload.value }
            };
        default:
            return state;
    }

}

