import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        user: {},
        errorMessage: undefined, // 'authenticated', 'checking'
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking',
            state.user = {},
            state.errorMessage = undefined
        },
        onLogin: (state, {payload}) => {
            state.status = 'authenticated',
            state.user = payload,
            state.errorMessage = undefined
        },
        onLogout: (state, {payload}) => {
            state.status = 'not-authenticated',
            state.user = {},
            state.errorMessage = payload
        }
    }
});

export const {
    onChecking,
    onLogin,
    onLogout
} = authSlice.actions;
