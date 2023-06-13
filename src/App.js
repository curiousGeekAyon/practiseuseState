
import React,{useState} from 'react';
import Elements from './components/Elements';

  function App() {
    const arr=["a", "b", "c", "d", "e",];
    function generateUniqueId() {
      const randomNumber = Math.random();
      const timestamp = new Date().getTime();
      return `${randomNumber}-${timestamp}`;
    }

    const arr2=arr.map((value)=>{
                  return (
                         { 
                           val: value,
                           check:false,
                           id:generateUniqueId()
                         }
                  )
                        }
    )
    // console.log(arr2);
    const [filterArr,setFilterarr]=useState([...arr2]);
    const enableDelete=(id)=>{
      // console.log("hi");
        const newArr=filterArr.map((value,ind)=>
                              {
                                if(value.id===id)
                                   {
                                     const {val,check,id}=value;
                                     console.log(val+" "+check);
                                     return ({
                                            val:val,
                                            check:!check,
                                            id:id   
                                     })
                                   }
                                   else{
                                    return value;
                                   }
                              })
    setFilterarr([...newArr]);
    }
  const deleteIt=(id)=>{
       const newArr=filterArr.filter((val,ind)=>{
                                                 return val.id!==id;
                                             })
       setFilterarr([...newArr]);
      //  console.log(newArr);
  }
    return (<ul>{
       filterArr.map((element,index)=>{
             return <Elements val={element.val} id={
              element.id
             } key={element.id} check={element.check} enableDelete={enableDelete} deleteIt={deleteIt}/>

        }
        )
    }  
      </ul>
       
    );

  }


  export default App;

