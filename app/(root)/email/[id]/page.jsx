"use client"


import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
const Page = () => {
  const router = useParams();
  const {id} = router;
  const [emails,setemails] =useState([]);
  

  const getmail = async()=>{
   
  

  
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
          
    if(email==null || token==null){
      router.push("/")
    }
    const options = {
      method: 'GET',
      url: 'https://temp-mail94.p.rapidapi.com/mail-box',
      params: {
        email: email,
        token: token
      },
      headers: {
        'X-RapidAPI-Key': '4e4de0ad11mshd09cd6e6bc2d4cap132f8djsn2ad94410bc31',
        'X-RapidAPI-Host': 'temp-mail94.p.rapidapi.com'
      }}
      try{
        
      const response = await axios.request(options);
      console.log(response.data)
      console.log(id)
      
     const filteredemails = response.data?.filter(email=>email.id==id);
    console.log(filteredemails);
      setemails(filteredemails);
      

      }
      catch(err){
        console.log(err);
      }

  }

  useEffect(()=>{
    getmail();
   
  },[])
 
  


  



 

  return (
    <>
      {
        emails.map(email=>{
          return(
            <div className='w-full' key={email.id}>
                  
                <div className='' dangerouslySetInnerHTML={{ __html: email.body_html }} />
              </div>
          )
        })
        
      }
     
   
        

    
    </>
  )
}

export default Page