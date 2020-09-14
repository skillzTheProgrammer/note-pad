const ourNotes =[
    {
        title:"My Daughter",
        description:`Lorem Ipsum is simply dummy 
                    text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since`,
        time: new Date().toLocaleTimeString()
    },{
        title:"My son",
        description:`Lorem Ipsum is simply dummy 
                    text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since`,
        time: new Date().toLocaleTimeString()
    },
]

const filteredNotes = ourNotes.filter((note,index)=>{
    return note.title.toLocaleLowerCase().includes("my".toLocaleLowerCase())
})

console.log(filteredNotes)