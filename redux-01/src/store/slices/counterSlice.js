

import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count:0
  },
  reducers: {
    increment: (state) => {
      state.count +=1;
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
export const { increment,decrement,customIncrement } = counterSlice.actions;
export default counterSlice.reducer;

export const incrementador = (req) => (dispatch) => {
    dispatch(customIncrement(req));
};
