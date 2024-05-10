"use client"

import { Spinner } from "@/components/Spinner";
import createtempmail from "@/lib/api";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link";


export default function Home() {


  const [email, setemail] = useState("your email will be displayed here");
  const [loading, setloading] = useState(false);

  useEffect(()=>{
    const email   = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    if(email){
      setemail(email);
    }

  },[])

  function copytoclipboard() {
    if (loading || email == "your email will be displayed here") {
      return;
    }
    navigator.clipboard.writeText(email).then(() => {

      toast(<div className="flex items-center gap-4">

        <p>succesfully copied to clipboard </p>
        <Check className="text-green-500 font-bold" />

      </div>);

    })
  }


  return (
    <>
      <h2 className="font-semibold font-mono tracking-tight text-2xl text-center">Ten minutes <span className="text-3xl text-blue-500 font-bold">Temporary</span> Mail.</h2>

      <div className="flex items-center gap-3 mt-12  cursor-pointer justify-center  ">
        <div onClick={copytoclipboard} className={`border p-2 rounded-sm w-auto md:w-80 `}>

          {loading ? <>
            <Spinner className="text-blue-600" />

          </> :
            <>
              <HoverCard>
                <HoverCardTrigger>{email}</HoverCardTrigger>
                <HoverCardContent>
                  click to copy
                </HoverCardContent>
              </HoverCard>

            </>}

        </div>
        <button onClick={async () => {
          setloading(true);
          const tempmail = await createtempmail();
          if (tempmail.email) {
            setloading(false);
            setemail(tempmail.email);

          }
          else {
            setloading(false);
            setemail("something went wrong,please try again")
          }



        }} className="px-3 py-2 text-slate-100 font-bold rounded-md text-sm bg-blue-600 hover:bg-blue-600/75 transition">generate</button>

      </div>
    
         
          {
            email !=="your email will be displayed here" &&
            <p className={`text-slate-600 font-bold   text-center mt-64 cursor-pointer`}>Please head to <Link href={"/inbox"}>
            <span className="text-blue-600 hover:underline">inbox
             </span> 
             </Link> tab for checking messages.</p>
         
   
   
   
          }

        


    </>
  );
}
