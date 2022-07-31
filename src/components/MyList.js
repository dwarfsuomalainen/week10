function MyList(props){

    console.log(props)
    return (
        <>
            <h1>{props.header}</h1>
            <ol>
                {props.items.map((item) => 
                <li key={item.id} onClick={() => props.updateItem(item.id)} style={{textDecoration: item.clicked ? 'line-through' : ''}}>{item.text} </li>)}

            </ol>
            
        </>
    )
}

export default MyList