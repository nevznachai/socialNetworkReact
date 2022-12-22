import * as axios from "axios";
import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user2.png';

let Users = (props) => {

    let getUsers = () => {

    }
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            props.setUsers(response.data.items);

        });


    // props.setUsers([
    //     {
    //         id: 1, photoUrl: 'https://play-lh.googleusercontent.com/8GsTy26UE0lDGqoFOeClJ_t1874nm9gqBEUfX62Ztcpq9aOMuMI6xrpByAxqxOid-m4',
    //         followed: false, fullName: 'Ricardo', status: 'world is mine', location: { city: 'Miami', country: 'United states' }
    //     },
    //     {
    //         id: 2, photoUrl: 'https://play-lh.googleusercontent.com/8GsTy26UE0lDGqoFOeClJ_t1874nm9gqBEUfX62Ztcpq9aOMuMI6xrpByAxqxOid-m4',
    //         followed: true, fullName: 'Nikanor', status: 'boss life', location: { city: 'Smolensk', country: 'Russia' }
    //     },
    //     {
    //         id: 3, photoUrl: 'https://play-lh.googleusercontent.com/8GsTy26UE0lDGqoFOeClJ_t1874nm9gqBEUfX62Ztcpq9aOMuMI6xrpByAxqxOid-m4',
    //         followed: false, fullName: 'Victorica', status: 'Colorist', location: { city: 'Moscow', country: 'Russia' }
    //     },
    // ]
    // )
}
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : "userPhoto"} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}

export default Users;