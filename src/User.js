function User(props)
{

    const name = "John Doe";
    return (
        <div>
            <h2>User name is {props.name}</h2>
            <button onClick={() => props.data(name)}>Submit</button>
        </div>
    )
}

export default User;