import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard';
import Form from './Form';
import ItemList from './ItemList';

const Home = () => {
    //navigate
    const navigate = useNavigate();

    //State stuff
    const [inputTitle, setInputTitle] = useState("");
    const [itemPlace, setItemPlace] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [elements, setElements] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredElements, setFilteredElements] = useState([]);

    //Run once when the app start
    useEffect(() => {
        getLocalElements();
    }, []);

    //Use effect
    useEffect(() => {
        filterHandler();
        saveLocalElements();
    }, [elements, status]);

    //Functions
    const filterHandler = () => {
        switch(status) {
            case "completed":
                setFilteredElements(elements.filter(element => element.completed === true));
                break;
            case "uncompleted":
                setFilteredElements(elements.filter(element => element.completed === false));
                break;
            default:
                setFilteredElements(elements);
                break;
        }
    };

    //Save to local
    const saveLocalElements = () => {
        if(elements.length > 0) {
            localStorage.setItem("elements", JSON.stringify(elements));
        }
    };

    //Get the local storage elements
    const getLocalElements = () => {
        if(localStorage.getItem("elements") === null) {
            localStorage.setItem("elements", JSON.stringify([]));
        } else {
            let elementLocal = JSON.parse(localStorage.getItem("elements"));
            setElements(elementLocal);
        }
    }

    //Status handler: completed / uncompleted
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div>
            <button className='redirectButton'
                onClick={() => {
                    navigate("/form");
                }}
            >
                    New Item
            </button>

            <div className="select">
                <select onChange={statusHandler} className="filter-element">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

            <Form 
                elements={elements} 
                setElements={setElements}
                inputTitle={inputTitle} 
                setInputTitle={setInputTitle}
                itemPlace={itemPlace}
                setItemPlace={setItemPlace}
                itemDescription={itemDescription}
                setItemDescription={setItemDescription}
                setStatus={setStatus}
            />
            <ItemList 
                setElements={setElements} 
                elements={elements}
                filteredElements={filteredElements}
            />
{/*             <ItemCard/ */}       
        </div>
    )
}

export default Home;
