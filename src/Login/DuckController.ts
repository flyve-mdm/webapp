import GetMode from '../Utils/GetMode'

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    phase: 1
}

// Constants
const CHANGE_LOADING = 'flyve-mdm-web-ui/ContactBook/changeLoading'
const CHANGE_VALUE = 'flyve-mdm-web-ui/ContactBook/changeValue'

// Reducers
export default function reducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {

        case CHANGE_LOADING:
            return {
               ...state,
               loading: action.loading
            }
        
        case CHANGE_VALUE:
            return {
               ...state,
               [action.name]: action.value
            }
        
        default: return state
    }
}

// Action Creators
export function changeLoading (loading) {
    return { 
        type: CHANGE_LOADING,
        loading
    }
}
export function changeValue (name: string, value: string) {
    return {
        type: CHANGE_VALUE,
        name,
        value
    }
}