import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewFriend = () => {
    const [data,setData]=useState(
        [
            {
                "_id": "",
                "name": "",
                "friendName": "",
                "friendNickName": "",
                "DescribeYourFriend": "",
            }
        ]
    )

    const fetchData=()=>{
        axios.get("http://localhost:8080/view")
        .then(
            (response)=>{
                setData(response.data)
            }
        )
        .catch(
            (error)=>{
                console.log("Error")
            }
        )
    }

    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Navbar/>
            <br />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Friend's Name</th>
                        <th scope="col">Friend's Nickname</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map(
                        (value,index)=>{
                            return                     <tr>
                            <td>{value._id}</td>
                            <td>{value.name}</td>
                            <td>{value.friendName}</td>
                            <td>{value.friendNickName}</td>
                            <td>{value.DescribeYourFriend}</td>
                        </tr>
                        }
                    )
                }
                </tbody>
            </table>

        </div>
    )
}

export default ViewFriend