import { createSlice } from "@reduxjs/toolkit";

const initialState={
  currentUser:null,
  loading:false,
  error:false
}

const Userslice=createSlice({
  name:'user',
  initialState,
  reducers:{
    signinstart:(state)=>{
      state.loading=true
    },

    signinsuccess:(state,action)=>{
      state.currentUser=action.payload
      state.loading=false
      state.error=false
    },
    signinfailure:(state,action)=>{
      state.loading=false
      state.error=action.payload
    },

    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },


  }
})

export const{signinfailure, signinsuccess, signinstart, updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut,}=Userslice.actions
export default Userslice.reducer