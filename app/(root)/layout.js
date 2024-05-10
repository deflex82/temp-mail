import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner"
const RootLayout = ({children})=>{
    return(
        <div className="absolute inset-0 min-h-screen flex" >

            <Sidebar/>
            <div className="flex-1 p-4">
            {children}
            <Toaster/>

            </div>

          

        </div>
    )
}


export default RootLayout;