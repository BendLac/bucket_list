import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

//props
const Form = ({setItemPlace, inputTitle, setInputTitle, itemPlace, itemImg, itemDescription, setItemDescription, setElements, setInputText, elements, setStatus}) => {
  const navigate = useNavigate();

  //
/*   const [inputTitle, setInputTitle] = useState(""); */

  //input handlers
  const inputTextHandler = (e) => {
    setInputTitle(e.target.value);
  }
  const itemPlaceHandler = (e) => {
    setItemPlace(e.target.value);
  }
  const itemDescriptionHandler = (e) => {
    setItemDescription(e.target.value);
  }

  //create the object
  const submitFormHandler = (e) => {
    e.preventDefault();
    setElements([
      ...elements,
      {text: inputTitle, place: itemPlace, description: itemDescription, completed: false, id: Math.random() * 1000}
    ]);
    setInputTitle('');
    setItemPlace('');
  };

/*   const statusHandler = (e) => {
    setStatus(e.target.value);
} */

  return (
    <div>
      <button className='redirectButton' 
        onClick={() => navigate(-1)}>Go back
      </button>

      <form>
        <label>Title name</label><br/>
        <input className='inputField' value={inputTitle} onChange={inputTextHandler} type="text"/><br/>  
        <label>Where</label><br/>
        <input className='inputField' value={itemPlace} onChange={itemPlaceHandler} type="text"/><br/>
        <label>Description</label><br/>
        <input className='inputField' value={itemDescription} onChange={itemDescriptionHandler} type="text"/><br/>    
        <button className='formButton'onClick={submitFormHandler} type='submit'>Submit</button>
        {/*
        <label>Image upload</label><br/>
        <input className='inputField' value={itemImg} type="file" accept="image/*"/><br/>    
        <button className='redirectButton'onClick={submitFormHandler} type='submit'></button> */}
{/*         <div className="select">
          <select onChange={statusHandler} className="filter-element">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div> */}
      </form>
    </div>
  )
}

export default Form;