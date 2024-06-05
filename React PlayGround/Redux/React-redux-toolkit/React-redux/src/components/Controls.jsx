import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, privacyActions } from "../store";

export default function Controls() {
  
    const dispatch = useDispatch();

    const inputElement = useRef()

    const handleIncrement =()=>{
        dispatch(counterActions.increment())
    }

    const handleDecrement =()=>{
        dispatch(counterActions.decrement())
    }
    const handleAdd =()=>{
        

        
        dispatch(counterActions.add(inputElement.current.value))
        
        inputElement.current.value =""
    }
    const handleSubtract =()=>{
       dispatch(counterActions.subtract(inputElement.current.value))

       inputElement.current.value =""
    }

    const handlePrivacy=()=>{
     dispatch(privacyActions.toggle()); 
    }

  return (
    <div>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary "
          style={{ marginright: "5px" }}
          onClick={handleIncrement}
        >
          +1
        </button>
        <button type="button" className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button type="button" className="btn btn-success"
          onClick={handlePrivacy}
        >
          Privacy
        </button>
      </div>

      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" 
        placeholder="Enter number"
        ref={inputElement}
        />
          
        
        <button type="button" className="btn btn-success"
          onClick={handleAdd}
        >
          ADD
        </button>

        <button type="button" className="btn btn-success"
          onClick={handleSubtract}
        >
          SUBTRACT
        </button>
      </div>

    </div>
  );
}
