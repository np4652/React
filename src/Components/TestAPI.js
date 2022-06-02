import React, { useEffect, useState } from "react";
import { getRequest, postRequest } from "../Services/APIService";



function TestAPI(){
    const [posts, setPosts] = useState();
    // useEffect(()=>{
    //     var data = getRequest('api/coins/get_symbol_info?symbol=rtcinr');
    //     data.then((result)=>{
    //         setPosts(result);
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // },[]);

    async function getData(){
        var data = await getRequest('api/coins/get_symbol_info',{'symbol':'rtcinr'});
        return setPosts(data);
    };

    console.log(posts);

    return (
        <>
            <button onClick={getData}>Call Get API</button>
        </>
    )
}
export default  TestAPI;