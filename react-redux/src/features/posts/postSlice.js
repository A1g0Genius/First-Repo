import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    postList: [],
    status: null, //fulfilled,pending,failed,
    error: {}
}

export const getPost = createAsyncThunk('posts/', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(res.data)
    return res.data
})

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(getPost.pending, (state, action) => {
                state.status = "pending"
            })

            .addCase(getPost.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.postList = action.payload
            })

            .addCase(getPost.rejected, (state) => {
                state.status = "rejected"
            })

    }
})

export const getAllPost = (state) => state.posts.postList
export const getPostStatus = (state) => state.posts.status
export const getPostError = (state) => state.posts.error


export default postSlice.reducer