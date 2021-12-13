import React, {  useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {increment,decrement,customIncrement} from "../store/slices/counterSlice";

const Contador = () => {
    const {counter} = useSelector(state => state.counter);
    const disp = useDispatch();
    useEffect(()=>{
        disp(increment());
     },[disp]);
  return (
    <div>
      <form>
        <div class="form-group">
          <button type="button" class="btn btn-primary">
            Increment
          </button>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary">
            Decrement
          </button>
        </div>
        <div class="form-group form-check">
          <button type="button" class="btn btn-primary">
            Decrement
          </button>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <labe>{counter}</labe>
    </div>
  );
};

export default Contador;
