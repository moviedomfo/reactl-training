import { createSlice } from "@reduxjs/toolkit";


export const globalSlice = createSlice({
  name: "counter",
  initialState: {
    count:10,
    userName :'Pensilvania'
  },
  reducers: {
    increment: (state) => {
      state.count +=1;
      console.log('increment to ' + state.count);
    },
    decrement: (state) => {
      
        state.count -=1;
      },
    customIncrement: (state, action) => {
        state.count += action.payload;
        
      },
  },
});

// exporta todas las acciones que podemos llamar en nuestra app
export const { increment,decrement,customIncrement } = globalSlice.actions;


export const incrementador = (req) => (dispatch) => {
    dispatch(customIncrement(req));
};


export default globalSlice.reducer;
