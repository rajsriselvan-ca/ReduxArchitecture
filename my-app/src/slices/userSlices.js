import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: []
}

export const userSlices = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((user, index) =>  index !== action.payload);
        }
    }
});

export const {setUser, deleteUser} = userSlices.actions;

export default userSlices.reducer;