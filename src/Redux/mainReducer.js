const SET_FIRST_VALUE = "SET_FIRST_VALUE"
const SET_SECOND_VALUE = "SET_SECOND_VALUE"

let initialState = {
    firstValue: '-',
    secondValue: '-'
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FIRST_VALUE:
            return {
                ...state,
                firstValue: action.newValue
            }
        case SET_SECOND_VALUE:
            return {
                ...state,
                secondValue: action.newValue
            }
        default:
            return state
    }
}

export function setFirstValueAC(value){
    return{
        type: SET_FIRST_VALUE,
        newValue: value
    }
}

export function setSecondValueAC(value){
    return{
        type: SET_SECOND_VALUE,
        newValue: value
    }
}
