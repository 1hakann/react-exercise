import React, {useState, useEffect} from 'react'

const url = 'https://api.github.com/users';

const UserList = () => {
    const title = 'github users';
    const [users, setUsers] = useState([])
    // Show and Hide
    const [show, setShow] = useState(false)

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
         <h3 style={{ color: '#fff', paddingTop: '10px' }}>{users.length} {title.toUpperCase()}</h3>
         <button className='users' style={{ height:'5vh', paddingTop:'12px', textAlign:'center', fontWeight:'800',fontSize:'18px',borderRadius:'5px' }} onClick={() => setShow(!show)}>Hide / Show</button>
         <ul className='users'>
             {users.map(user => {
                const {id, login, avatar_url, html_url} = user;

                 return (
                    show && <li key={id}>
                        <img src={avatar_url} alt={login} />
                        <div>
                            <h4>{login}</h4>
                            <a href={html_url}>Profile</a>
                        </div>
                    </li>
                 )
                 
             })}
         </ul>
        </>
    )
}

export default UserList