import Image from "next/image";

interface UserCard {
  type: string;
  date?: string;
  counter?: string | number;
}

export const UserCard = ({
  type,
  date = "2024/25",
  counter = 3741,
}: UserCard) => {
  return (
    <div className="rounded-2xl odd:bg-purpuleBase even:bg-yellowBase p-4 flex-1 min-w-[130px]  ">
      <div className="flex justify-between items-center">
        <span className="text-10px bg-white px-2 py-1 rounded-full text-green-600">{date}</span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">{counter}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};
