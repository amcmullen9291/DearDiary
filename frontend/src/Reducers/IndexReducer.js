import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Index() {
    const [index, getIndex ] = useState('');

    useEffect(() => {
        getAllEntries();
    }, [])

    const ShowIndex = () => {
    return getIndex.data.data.map(el =>{
        return <aside key={el.attributes.id}>
            <ul>
                <a href={el.attributes.title}></a>
                <li>{el.attributes.date}</li>
            </ul>
        </aside>
    });
    }

    const getAllEntries = () => {
        axios.get('http://[::1]:3001')
        .then((response) => {
            const totalEntries = response.data.entries;
            getIndex(totalEntries);
        })
        .catch(error => console.log("Error:", error));
    }
        return(
            <div>
            <ShowIndex/>
            </div>
        )
}

