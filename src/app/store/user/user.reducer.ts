import { User } from './user.models'

import * as fromActions from './user.actions'


export interface UserState {
    entity: User;
    uid: string;
    loading: boolean;
    error: string;
}

const initialState: UserState = {
    entity: null,
    uid: null,
    loading: null,
    error: null
}


export function reducer(state = initialState, action: fromActions.All): UserState {
    switch (action.type) {


        case (fromActions.Types.SIGN_IN_EMAIL): {
            return { ...state, loading: true }
        }
        case (fromActions.Types.SIGN_IN_EMAIL_SUCCESS): {
            return { ...state, entity: action.user, uid: action.uid, loading: false, error: null }
        }
        case (fromActions.Types.SIGN_IN_EMAIL_ERROR): {
            return { ...state, loading: false, error: action.error }
        }




        case (fromActions.Types.SIGN_UP_EMAIL): {
            return { ...state, loading: true }
        }
        case (fromActions.Types.SIGN_UP_EMAIL_SUCCESS): {
            return { ...state, loading: false, uid: action.uid }
        }
        case (fromActions.Types.SIGN_UP_EMAIL_ERROR): {
            return { ...state, loading: false, error: action.error }
        }




        case (fromActions.Types.SIGN_OUT_EMAIL): {
            return { loading: true, ...state }
        }
        case (fromActions.Types.SIGN_OUT_EMAIL_SUCCESS): {
            return { ...initialState }
        }
        case (fromActions.Types.SIGN_OUT_EMAIL_ERROR): {
            return { error: action.error, ...state, loading: false }
        }

        default:{
            return state;
        }
    }
}