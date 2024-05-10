"use client";

import axios from "axios";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [emails,setemails]=useState([]);
  const router = useRouter();
  function getDateOnly(dateTimeString) {
    // Split the datetime string at the 'T' character
    var parts = dateTimeString.split("T");
    // Return the date part (the first part)
    return parts[0];
}
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
      
      setemails(response.data)

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

      <h2 className='text-blue-600 font-bold text-2xl mb-8'>Primary</h2>

      <div className="w-full flex-col">

        {emails.length==0 &&<>
          <p className="font-bold font-mom text-center text-3xl">No emails has arrived :)
        </p>

        <p className="text-slate-400 text-center">keep refreshing to get mail.</p>
        
        </> }

        {
          emails.map(email=>{
            return(
         <Link key={email?.id} href={`/email/${email.id}`}>
          <div className="w-full flex gap-4 border p-2 shadow-md hover:bg-slate-100/75 transition cursor cursor-pointer " >
                 <div className="heading font-bold flex-[0.15]">
          {email?.subject.split("-")[0]}
        </div>
        <div className="description flex-[0.7] overflow-hidden text-nowrap font-bold">{email?.subject} </div>

        <div className="time flex-[0.15] flex flex-end font-bold">{getDateOnly(email?.created_at)}</div>
        


                </div>

         </Link>     
            )
          })
        }

      </div>


    </>
  )
}

export default Page