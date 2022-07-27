import React from 'react'

const Item = ({text, element, elements, setElements}) => {
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

    return (
    <div className="todo">
            <li className={`todo-item ${element.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
            </button>
            <button onClick={deleteHandler} className="trash-btn">
            </button>
    </div>
  )
}

export default Item;
