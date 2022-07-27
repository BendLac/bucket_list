import React from 'react'
import Item from './Item';


const ItemList = ({elements, setElements, filteredElements}) => {
  return (
    <div className='container'>
        <div className='list'>
            {filteredElements.map((element) => (
                <Item
                    setElements={setElements}
                    elements={elements}
                    key={element.id}
                    element={element}
                    text={element.text}
                />
            ))}
        </div>
    </div>
  )
}

export default ItemList;
