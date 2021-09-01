import {useState} from "react";

export default function TodoForm({addTask}) {

    const [userInput, setUserInput] = useState({title: '', description: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput)
        setUserInput({title: '', description: ''})
    };

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name={'title'} placeholder={'Title'} value={userInput.title} onChange={handleChange}
                   onKeyDown={handleKeyPress}/>
            <input type="text" name={'description'} placeholder={'Description'} value={userInput.description}
                   onChange={handleChange} onKeyDown={handleKeyPress}/>
            <button>Save</button>
        </form>
    );
}
