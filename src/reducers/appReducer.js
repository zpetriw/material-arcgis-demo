import { SIDEBAR_TOGGLE } from '../actions/appActions';

const defaultAppReducerState = {
    sidebarVisible: false
}

const appReducer = (state = defaultAppReducerState, action) => {
    switch (action.type) {
        case SIDEBAR_TOGGLE:
            return {
                ...state,
                sidebarVisible: !state.sidebarVisible
            };

        default:
            return state;
    }
};

export default appReducer;