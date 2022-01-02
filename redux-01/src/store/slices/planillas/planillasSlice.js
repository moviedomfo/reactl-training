
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl_planillas = "http://localhost:8060/api/mates";

export const planillasSlice = createSlice({
  name: "planillas",
  initialState: {
    list: []
    
  },
  reducers: {
    setPlanillasList: (state, action) => {
      state.list = action.payload;
    }
  },
});

export const { setPlanillasList } = planillasSlice.actions;

export const fetchAll = () => (dispatch) => {

  axios
    .get(  `${baseUrl_planillas}/getAll`)
    .then((response) => {
      dispatch(setPlanillasList(response.data.data));
    })
    .catch((error) => console.log(error));
};

export default planillasSlice.reducer;