import MyList from './MyList';
import {useState} from "react"

    const MyContainer = (props) =>{
        const [items,setItems] = useState([
            {id: "1", text: "This is first item of list", clicked: false},
            {id: "2", text: "This is second item of list", clicked: false}
        ]);
        const[text,setText] = useState('');
        const [clicked, setClicked] = useState(false);
        const updateItem = (id) => {
            setItems(items.map(item => item.id === id ? {...item, clicked: !item.clicked} : item))
          }
        
        const addLine = (line) => {
            const id = Math.floor(Math.random()*1000000 + 1000)
            const newLine = {id,...line, clicked}
            setItems([...items, newLine])
          }
        const onSubmit = (e) => {
            e.preventDefault()
    
            addLine({text: text})
            setText("")
            setClicked(false);
        }
      


    return (
        <div>
        <MyList updateItem={updateItem} items={items} header={props.header} />
        
        <form onSubmit={onSubmit}>
            <label>Add items to List</label>
            <textarea placeholder='add new item' onChange={(e) => setText(e.target.value)} value={text}></textarea>
            <input type="submit" value="Push to Add item"></input>
        </form>  
        </div>
    )
}

export default MyContainer 