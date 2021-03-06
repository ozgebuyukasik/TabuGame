import { useEffect } from "react";

function Counter({seconds, setSeconds}) {
  useEffect(()=> {
    if(seconds > 0){
      setTimeout(()=> setSeconds(seconds - 1), 1000)
    } else{
      setSeconds(0)
    }
  }, [seconds])
  return <div className="counter">{seconds}</div>;
}
export default Counter;
