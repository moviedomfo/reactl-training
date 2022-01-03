
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userList = [];

export const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    setUserList: (state, action) => {
      state.value = action.payload;
    },
    fetchAll:(state, action) => {
      state.value = action.payload;
    }
  },
});

export const { setUserList,fetchAll } = userSlice.actions;


export const fetchAllUsers = () => (dispatch) => {
  axios
    .get("https://reqres.in/api/users?per_page=12")
    .then((response) => {
      dispatch(setUserList(response.data.data));
    })
    .catch((error) => console.log(error));
};

export default userSlice.reducer;