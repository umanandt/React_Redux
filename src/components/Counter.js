import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  
  // we use useselector not to get the whole value store
  // but to select the spcific value from the redux store
  // two function for increment and decrement
 // we can export unique identifiers like increment for an example and 
 // import it to other file 


 // we can create smaller redcuer 

 // there is a solution for everything realted to redux - using redux toolkit
 // redux is a separte thing it is not realted to react or any other programming langauge 
 // we are here using to solve to useContext issue or sharing data using this 

  const incrementHandler = () => {
    //dispatch({ type: "INCREMENT" });
    dispatch(counterActions.increment());
  };

  const incrementFiveHandler = () => {
   // dispatch({ type: "increase", amount: 5 });
   dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    //dispatch({ type: "DECREMENT" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
   // dispatch({ type: "toggle" });
   dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementFiveHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// doing same thing via class component

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
