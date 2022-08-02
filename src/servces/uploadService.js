import { BASE_URL } from './config';

export const avatar = async ( 
    data,
    token
     ) => {
    const response = await fetch(`${BASE_URL}/api/upload/avatar`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify({data})
    });
    const jsonRes = await response.json();
    console.log(jsonRes)
    if(response.ok){
        return jsonRes;
    } else{
        throw jsonRes.message;
    };  
};