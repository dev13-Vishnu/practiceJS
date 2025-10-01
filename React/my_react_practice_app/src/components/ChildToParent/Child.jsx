const Child =  ({onMessage}) =>{
 const message = "Hello from Child"

 const handleClick = () => {
    onMessage(message)
 }
    return (
        <>
                <h1>Child component</h1>
                <button onClick={handleClick}>send message</button>
        </>
    )
}

export default Child