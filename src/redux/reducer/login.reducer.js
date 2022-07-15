import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postApi } from '../../helper/fetch'
import {message} from  'antd'

const initialState = {
    token: null,
    user: [],
    user_type: '',
    status: '',
    isLoading: false,
    isFailled: false,
    error: '',
    message: '',
    development: 'http://localhost:8000/api',
    production: 'http://52.91.235.134/api',
}

export const loginFun = createAsyncThunk(
    'login/users',
    async (body) => {
        const data = await postApi(`${initialState.production}/Adminlogin`, body)
        return data.data
    }
)
export const logoutFun = createAsyncThunk(
    'logout/users',
    async () => {
        const data = await postApi(`${initialState.production}/logOut`,{ value: false, id: initialState.user?.user_id }, initialState.token)
        return data.data
    }
)
export const loginSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [logoutFun.pending]: (state, action) => {
        },
        [logoutFun.fulfilled]: (state, action) => {
            message.success("Logout SuccessFully..!")
            state.token= null
            state.user= []
            state.status= ''
            state.isLoading= false
            state.isFailled= false
            state.error= ''
            state.message= ''
        },
        [loginFun.pending]: (state, action) => {
            state.isLoading = true
            state.token = null
            state.user = []
            state.user_type = ''
            state.isFailled = false
            state.error = ''
            state.message = ''
        },
        [loginFun.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            const { status, code, message, toast, token, user } = payload;
            if (status == 'error') {
                state.isFailled = true
                state.error = message
                state.token = null
                state.user = []
                state.status = status
                state.isFailled = true
                state.message = ''
            }
            else {
                state.isFailled = true
                state.error = message
                state.token = token
                state.user = user
                state.status = status
                state.isFailled = false
                state.message = message
            }
        },
        [loginFun.rejected]: (state, action) => {
            state.isFailled = true
            state.error = ''
            state.token = null
            state.user = []
            state.status = ''
            state.isLoading = false
            state.isFailled = true
            state.message = ''
        },
    },
})
export const loginReducer = loginSlice.reducer
