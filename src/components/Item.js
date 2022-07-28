import React from 'react'

const Item = ({text, element, elements, setElements, place, description}) => {
    const deleteHandler = () => {
        setElements(elements.filter((el) => el.id !== element.id))
    };

    const completeHandler = () => {
        setElements(elements.map(item => {
            if(item.id === element.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }

    //This is the look of the items in the list
    return (
    <div className="element">
            <li className={`element-item ${element.completed ? "completed" : ""}`}>{text}</li> <br/>
            <li className={`element-item ${element.completed ? "completed" : ""}`}>{place}</li> <br/>
            <li className={`element-item ${element.completed ? "completed" : ""}`}>{description}</li> <br/>
            <button onClick={completeHandler} className="complete-btn">
                Complete
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                Delete
            </button>
    </div>
  )
}

export default Item;
