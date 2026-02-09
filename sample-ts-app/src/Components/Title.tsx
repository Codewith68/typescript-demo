import {PropsWithChildren, useState} from "react"

type Title={
    text:string,
    list:string[],
    onChangeHandler:React.ChangeEventHandler<HTMLInputElement>,
}
function Title({text,list,onChangeHandler,children}: PropsWithChildren<Title>) {
    const [count,setCount]=useState(0);
  return (
    <>
    <div>
         <h1>{text}</h1>
         <p>{list && list.length >0 && list.join(",")}</p>
         <input onChange={onChangeHandler} />
         {children}
    </div>
        <button onClick={()=>setCount(count+1)}>increament</button>
        <button onClick={()=>setCount(count-1)}>Decreament</button>
        <div>{count}</div>
         </>
    
  )
}

export default Title