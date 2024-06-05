import { useSelector } from "react-redux";

export default function DisplayCounter() {
  
   const {counterVal} =  useSelector(store=> store.counter)
  
    return (
    <div>
      <p class="lead mb-4">
         counter current value : {counterVal}
      </p>
    </div>
  );
}
