import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  customIncrement,
} from "../store/slices/counter/counterSlice";

const Contador = () => {
  // hook that allow us to read the state 'counter' from reducer
  // destructure {count} from
 const {userName} = useSelector(state => state.userName);
 const {count} = useSelector(state => state.counter);
//    const userName = 'pensilvania';
   const disp = useDispatch();
  // useEffect(()=>{
  //     disp(increment());
  //  },[disp]);

  const onClickIncrement = () => {
    
    disp(increment());
  };
  const onClickDecrement = () => {

    console.log(count);
    disp(decrement());
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-6">
          <div class="alert alert-primary" role="alert">
            <label>{userName}  {count}</label>
          </div>
        </div>

        <form>
          <div className="row">
            <div class="form-group col-4">
              <button
                type="button"
                class="btn btn-primary"
                onClick={onClickIncrement}
              >
                Increment
              </button>
            </div>
            <div class="form-group col-4">
              <button
                type="button"
                class="btn btn-primary"
                onClick={onClickDecrement}
              >
                Decrement
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contador;
