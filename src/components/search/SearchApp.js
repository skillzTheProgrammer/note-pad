import React, {useState} from 'react';
import Note from './Note';
import Searchbar from './Searchbar'
import AddNotes from './AddNotes';
import './style.css'

const SearchApp = () => {
    const ourNotes =[
        // {
        //     title:"My Daughter",
        //     description:`Lorem Ipsum is simply dummy 
        //                 text of the printing and typesetting 
        //                 industry. Lorem Ipsum has been the industry's 
        //                 standard dummy text ever since`,
        //     time: new Date().toLocaleTimeString()
        // },{
        //     title:"My son",
        //     description:`Lorem Ipsum is simply dummy 
        //                 text of the printing and typesetting 
        //                 industry. Lorem Ipsum has been the industry's 
        //                 standard dummy text ever since`,
        //     time: new Date().toLocaleTimeString()
        // },
    ]

    const [search, setSearch] = useState("")

    const [note, setNote] = useState(ourNotes)

    const filteredNotes = note.filter((note)=>{
        return note.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <h1>SearchApp</h1>
            <AddNotes note = {note} setNote ={setNote} />
            <Searchbar search={search} setSearch={setSearch} />
            <Note notes={filteredNotes} />
        </div>
    );
}

export default SearchApp;
