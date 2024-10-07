import Image from "next/image";
import Link from "next/link";

import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[16%] md:w-[8%] lg:w-[18%] xl:w-[16%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="Logo" width="32" height="32" />
          <span className="hidden lg:block">Logo will me here</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[84%] md:w-[92%] lg:w-[82%] xl:w-[84%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />

        {children}
      </div>
    </div>
  );
}
