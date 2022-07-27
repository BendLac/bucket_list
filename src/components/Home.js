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

    const getLocalElements = () => {
        if(localStorage.getItem("elements") === null) {
            localStorage.setItem("elements", JSON.stringify([]));
        } else {
            let elementLocal = JSON.parse(localStorage.getItem("elements"));
            setElements(elementLocal);
        }
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

            <Form 
                elements={elements} 
                setElements={setElements} 
                inputTitle={inputTitle} 
                setInputTitle={setInputTitle}
                setStatus={setStatus}
            />
            <ItemList 
                setElements={setElements} 
                elements={elements}
                filteredElements={filteredElements}
            />
            <ItemCard/>
        </div>
    )
}

export default Home;
