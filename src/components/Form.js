import React from 'react'
import { useNavigate } from 'react-router-dom';

const Form = ({inputTitle, setInputTitle, itemPlace, itemImg, itemDescription,  setElements, setInputText, elements, setStatus}) => {
  const navigate = useNavigate();

  const inputTextHandler = (e) => {
    setInputTitle(e.target.value);
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    setElements([
      ...elements,
      {text: inputTitle, completed: false, id: Math.random() * 1000}
    ]);
    setInputTitle('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
}

  return (
    <div>
      <button className='redirectButton' 
        onClick={() => navigate(-1)}>Go back
      </button>

      <form>
        <label>Title name</label><br/>
        <input className='inputField' value={inputTitle} onChange={inputTextHandler} type="text"/><br/>  
        <button className='redirectButton'onClick={submitFormHandler} type='submit'></button>
{/*         <label>Where</label><br/>
        <input className='inputField' value={itemPlace} type="text"></input><br/>
        <label>Descroption</label><br/>
        <input className='inputField' value={itemDescription} type="text"/><br/>    
        <label>Image upload</label><br/>
        <input className='inputField' value={itemImg} type="file" accept="image/*"/><br/>    
        <button className='redirectButton'onClick={submitFormHandler} type='submit'></button> */}
        <div className="select">
          <select onChange={statusHandler} className="filter-element">
              <option value="all">All</option>
              <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form;