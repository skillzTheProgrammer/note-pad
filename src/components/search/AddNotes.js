import React,{useState, useRef} from 'react';

const AddNotes = ({note, setNote}) => {
    
    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")
    // const titles = useRef()

    const onClickHandler =()=>{
        const newNote = {
            title: title,
            description: description,
            time: new Date().toLocaleTimeString()
        }

        setNote([
            ...note,
            {
            title: title,
            description: description,
            time: new Date().toLocaleTimeString()
        }

        ])
        setDescription(description ="")
        setTitle(title = "")
       
    }
    return (
        <div>
            <input  placeholder="Title" name="title" onChange={(e)=>setTitle(e.target.value)} /><br />
            <textarea ref={'description'} placeholder="Description" name="description" onChange={(e)=>setDescription(e.target.value)}></textarea><br />
            <button onClick={onClickHandler}>Add Note</button>
        </div>
    );
    
}

export default AddNotes;
