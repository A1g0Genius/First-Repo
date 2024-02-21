import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toast: {
        display: "none",
        detail: {
            type: null,
            msg: null
        }
    }
}

export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        showToast: (state, action) => {
            state.toast.display = "abs"
            const { msg, type } = action.payload;

            state.toast.detail = {
                type,
                msg
            };

        }
    }
})

export const { showToast } = toastSlice.actions

export default toastSlice.reducer
