import React, { useState } from 'react';
import todolist from "../images/todolist.png";
import "../index.css"

const Todo = () => {

  const [inputData,setInputData] = useState('');
  const [items,setItems] = useState([]);
  const addItems = () => {
      //Now if we click + , empty data add hota. agr user kuch ni likta toh muje add ni krna. so we will use :

  if(!inputData){

  }
  else {

 //ek arr chaye toh useState me [] likha. empty arr ha
  //empty arr derh useState derh which means items k val hoge empty arr hoge.
  
    setItems([...items ,inputData]) //setItems me jo bh likege wo items m add hoga. we hv to keep inputData inside arr so that purana remove na ho..new me add hota rhe
    setInputData('') // dubra add krte h toh remove hojega.placeholder me show ni hoga.wha add krte hi remove hojega.

//... means previous data ko save krne k ly (spread operator)
  }

  } 

  const deleteItems = (id) =>{
    console.log(id);
    const updateditems = items.filter((elem,ind)=>{
      return ind !== id;
    });
    setItems(updateditems);


  }

  const removeAll = () => {
    setItems([]);
  }
  
   return (
    <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src={todolist} alt = "todologo" />
                <figcaption> Add your List here</figcaption>

            </figure>
            <div className="addItems">
              <input type="text" placeholder="Add Items"
              value={inputData}
              onChange={(e)=> setInputData(e.target.value)}
              />
              <i className="fa fa-plus add-btn" title="Add Item"
              onClick={addItems}
              ></i>
            </div>

            <div className='showItems'>
            {
              //map method unique id dega
              items.map((elem,ind)=>{ //ele: current data milega , uska index
                return (
                  <div className='eachItem' key={ind}> 
                  {/* hr value ko unique id chaye jisse hum usse represent kr rhe*/}
                    <h3>{elem}</h3> 
                    {/* current elem likege h3 me */}
                    <i className="fas fa-trash-alt add-btn" title="Delete Item"
                    onClick={()=> deleteItems(ind)}
                    ></i>
                </div>

                )

              })
            }
             
            </div>
                     {/* CLEAR ALL BUTTON*/}
                     <div className="showItems">
                      <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
                     </div>

        </div>
    </div>




    </>
    //dont use div as it create extra space. use react fragments ka syntax use

  )
}

export default Todo
