import { useState } from 'react'
import { useEffect } from 'react'

export const New = () => {
    const [user, setUser]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/user/getall')
        .then(response=>response.json())
        .then(data=>setUser(data))
        .catch((err)=>console.log(err))
    },[])

    return(
        <div class="card-body">
        <div class="AboutUs">
           <strong> <p style={{textAlign: "center"}}> Students who Alredy applied for jobs</p></strong>
            <ul>
                {
                    user.map(user=>{
                        return<li>{user.email}</li>
                    })
                }
            </ul>
        </div>
        </div>
    )
}