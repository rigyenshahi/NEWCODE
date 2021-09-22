import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch();
  const users = await response.json();
  return users;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userResponse: [],
    userName: null,
    userEmail: null,
    userPhoneNumber: null,
    userSwimLevel: null,
  },
  reducers: {
    userAdded(state, action) {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userPhoneNumber = action.payload.userPhoneNumber;
    },
    responseAdded(state, action) {
      state.userResponse.push(action.payload.userResponse);
    },
  },
});

export const { userAdded, responseAdded } = usersSlice.actions;

export default usersSlice.reducer;
