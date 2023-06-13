import React from "react";

function Elements(props) {
    const{id,val,check,enableDelete,deleteIt}=props;
    const handelClick=()=>{
         enableDelete(id);
    }
    const handelDelete=()=>{
        deleteIt(id);
   }
    return (
        <>
        <li >
         <input type="checkbox" onClick={handelClick}></input>
          {val}
          {check?<button onClick={handelDelete}>delete</button>:null}
          </li>
        </>
   );
    }
    export default Elements;