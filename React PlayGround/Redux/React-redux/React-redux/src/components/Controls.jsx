import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Controls() {
  
    const dispatch = useDispatch();

    const inputElement = useRef()

    const handleIncrement =()=>{
        dispatch({type:"INCREMENT"})
    }

    const handleDecrement =()=>{
        dispatch({type:"DECREMENT"})
    }
    const handleAdd =()=>{
        
        dispatch({type:"ADD",payload:{num: inputElement.current.value}});
        inputElement.current.value =""
    }
    const handleSubtract =()=>{
        dispatch({type:"SUBTRACT",payload:{num: inputElement.current.value}});
        inputElement.current.value=""
    }

    const handlePrivacy=()=>{
     dispatch({type:"PRIVACY_TOGGLE"}) 
    }

  return (
    <div>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          class="btn btn-primary "
          style={{ marginright: "5px" }}
          onClick={handleIncrement}
        >
          +1
        </button>
        <button type="button" class="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button type="button" class="btn btn-success"
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
          
        
        <button type="button" class="btn btn-success"
          onClick={handleAdd}
        >
          ADD
        </button>

        <button type="button" class="btn btn-success"
          onClick={handleSubtract}
        >
          SUBTRACT
        </button>
      </div>

    </div>
  );
}
