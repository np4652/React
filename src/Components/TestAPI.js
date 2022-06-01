import React, { useEffect, useState } from "react";
import { getRequest, postRequest } from "../Services/APIService";
function TestAPI(){
    const [posts, setPosts] = useState(null);
    useEffect(()=>{
        var data = getRequest('api/coins/get_symbol_info?symbol=rtcinr');
        data.then((data)=>{
            console.log('hit api');
           // setPosts({data});
            console.log(posts);
        }).catch(err=>{
            console.log('hit api');
            console.log(err);
        })
    },[posts])

    return (
        <>
            <h1></h1>
        </>
    )
}


export default  TestAPI;