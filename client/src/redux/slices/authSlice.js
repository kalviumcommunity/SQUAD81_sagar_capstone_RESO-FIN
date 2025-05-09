import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        role : localStorage.getItem("role") || "",
        user: localStorage.getItem('user') || "",
        isAunthenticated : localStorage.getItem("token") || null,
    },



    reducers : {
        setUserLogin : (state,action) => {
            state.role = action.payload.role;
            state.user = action.payload.user ; 
            state.isAunthenticated = true;

            localStorage.setItem("role",action.payload.role);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token",action.payload.token);
        },

    setUserLogout : (state,action) =>{
        state.role = null ; 
        state.user = null ;
        state.isAuthenticated = false ; 
        localStorage.removeItem("role");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    },

    },


});

export const {setUserLogin, setUserLogout} = authSlice.actions;
export default authSlice.reducer;