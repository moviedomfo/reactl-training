
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
    },
    getPlanillasList: (state, action) => {
      state.list = action.payload;
    }
  },
});



export const setPlanillas = () => (dispatch) => {

  // axios
  //   .get(  `${baseUrl_planillas}/getAll`)
  //   .then((response) => {
  //     dispatch(setPlanillasList(response.data));
  //   })
  //   .catch((error) => console.log(error));
};

export const getPlanillas = () => (dispatch) => {

  // axios
  //   .get(  `${baseUrl_planillas}/getAll`)
  //   .then((response) => {
  //     dispatch(getPlanillasList(response.data));
  //   })
  //   .catch((error) => console.log(error));
};


// export all redux acrtions from the slice
export const { setPlanillasList,getPlanillasList } = planillasSlice.actions;
// export reducers
//export const planilladaList = planillasSlice.reducer ; 
export default planillasSlice.reducer;