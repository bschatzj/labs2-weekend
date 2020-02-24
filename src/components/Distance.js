import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Table from './Table';

export default function Distance(props) {
    const [users, setUsers] = useState([])


    useEffect(() => {
        axios.get("http://localhost:7000/api/users/all")
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // users.forEach(element => {
    //     console.log(
    //         element.last_name,
    //         element.id,
    //         distanceCalc(44.3682, -87.8312, 44.5682, -87.8312)
    //     )
    // });
    return (
        <>
        <Table
        Data = {users}
        props = {props}
        
        />
        </>
    )
}