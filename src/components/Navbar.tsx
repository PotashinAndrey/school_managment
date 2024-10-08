import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" width="14" height="14" />
        <input type="text" placeholder="Search..." className="w-[200ps] p-2 bg-transparent outline-none" />
      </div>
      <div className=" flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="message" width="20" height="20" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="search" width="20" height="20" />
          <div className="absolute -top-3 -right-3 w-5 h-5 bg-violet-500 flex items-center justify-center text-white rounded-full text-sm">1</div>
        </div>
        <div className="flex flex-col cursor-pointer">
            <span className="text-sm leading-3 font-medium">Some Name</span>
            <span className="test=[10px] text-gray-500 text-right"> Admin</span>
        </div>
        <Image src="/avatar.png" width="36" height="36" alt="" className="rounded-full cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
