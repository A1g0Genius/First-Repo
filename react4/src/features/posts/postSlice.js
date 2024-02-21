import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postList: [],
    status: "idle", //fulfilled,pending,failed,
    error: {}
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase()
    }
})