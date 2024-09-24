import { TbLoader3 } from "react-icons/tb";

export const Loading = () => {
  return (
    <div className="flex justify-center mt-72 w-full">
      <TbLoader3 className="text-6xl animate-spin text-orange-400" />
    </div>
  );
};
