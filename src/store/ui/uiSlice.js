import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isModalNewVideoOpen: false
    },
    reducers: {
        onOpenModalVideoOpen: (state) => {
            state.isModalNewVideoOpen = true
        },
        onCloseModalVideoOpen: (state) => {
            state.isModalNewVideoOpen = false
        }
    }
});

export const {
    onOpenModalVideoOpen,
    onCloseModalVideoOpen
} = uiSlice.actions;