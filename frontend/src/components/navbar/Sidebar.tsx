import { FileText, Menu, MessageSquareMore, WalletCards } from "lucide-react"
import { useState } from "react"

const Sidebar = () => {
    const [selected, setSlected] = useState(1);
  return (
    <div className="flex flex-col gap-4 bg-[#262626] w-64 h-screen sticky top-0 z-10 text-[#DBDBDB] px-6 border-r border-gray-700">
        <div className="flex items-center h-16">
            <h1 className="text-3xl font-semibold">Smart Gig</h1>
        </div>

        <div className={`flex items-center px-3 py-[0.75rem] rounded-lg ${selected==1 ? 'bg-[#404040]' : ''} hover:bg-[#404040]`} onClick={()=>setSlected(1)}>
            <Menu className="mr-4" width={22}/>
            <p className="text-sm">DashBoard</p>
        </div>
        <div className={`flex items-center px-3 py-[0.75rem] rounded-lg ${selected==2 ? 'bg-[#404040]' : ''} hover:bg-[#404040]`} onClick={()=>setSlected(2)}>
            <WalletCards className="mr-4" width={22}/>
            <p className="text-sm">Projects</p>
        </div>
        <div className={`flex items-center px-3 py-[0.75rem] rounded-lg ${selected==3 ? 'bg-[#404040]' : ''} hover:bg-[#404040]`} onClick={()=>setSlected(3)}>
            <MessageSquareMore className="mr-4" width={22}/>
            <p className="text-sm">Messages</p>
        </div>
        <div className={`flex items-center px-3 py-[0.75rem] rounded-lg ${selected==4 ? 'bg-[#404040]' : ''} hover:bg-[#404040]`} onClick={()=>setSlected(4)}>
            <FileText className="mr-4" width={22}/>
            <p className="text-sm">Proposals</p>
        </div>
    </div>
  )
}

export default Sidebar