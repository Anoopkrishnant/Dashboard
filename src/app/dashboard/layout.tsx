import Menu from "../../components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen  bg-[#e2e5eb]-100 p-6 pl-8 pr-8 flex">
     
      <div className="flex w-full bg-[#F4F5F8] rounded-2xl shadow-lg overflow-hidden p-2">
        
        {/* LEFT SIDEBAR */}
        <div className="w-[16%] md:w-[12%] lg:w-[14%] xl:w-[14%]   p-4 border-r">
          <Menu />
        </div>

        {/* MAIN CONTENT */}
        <div className="w-[84%] md:w-[88%] lg:w-[86%] xl:w-[86%] bg-[#F7F8FA] overflow-y-auto flex flex-col hide-scrollbar">
          {children}
        </div>
     

      </div>
    </div>
  );
}
