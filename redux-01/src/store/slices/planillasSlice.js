
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl_planillas = "http://localhost:8060/api/mates";

export const x= [
  {
    "idMate": 2,
    "numero" :"8000",
    "nombreCreador" : "Ditrio",
    "firmado" :true,
    "enviado" : false
  },{
    "idMate": 90,
    "numero" :"8000",
    "nombreCreador" : "Ethereum",
    "firmado" :true,
    "enviado" : false
  }
]

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

// search mates from Express server
export const setPlanillas = () => (dispatch) => {
  axios
    .get(  `${baseUrl_planillas}/getAll`)
    .then((response) => {
      alert(response);
       dispatch(setPlanillasList(response));
    })
    .catch((error) => console.log(error));
};

// export all redux acrtions from the slice
export const { setPlanillasList,getPlanillasList } = planillasSlice.actions;

export const getPlanillas = () => (dispatch) => {
  dispatch(setPlanillasList(x));
   // axios
  //   .get(  `${baseUrl_planillas}/getAll`)
  //   .then((response) => {
      //dispatch(getPlanillasList(x));
  //   })
  //   .catch((error) => console.log(error));
};


// export reducers
//export const planilladaList = planillasSlice.reducer ; 
export default planillasSlice.reducer;