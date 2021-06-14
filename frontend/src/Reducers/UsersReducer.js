import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Name from '../Components/Name'

export default function Index() {
    const [user, getUser ] = useState('');

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = () => {
        axios.get('http://[::1]:3001/users')
        .then((response) => {
            const User = response.data.users;
            getUser(User);
        })
        .catch(error => console.log("Error:", error));
    }
        return(
            <Name user={Named}>
        )
}