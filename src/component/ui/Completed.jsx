import { CircleCheck } from "lucide-react";
import Card from "../reusable/Card";
export default function Completed() {
	return (
    <div className="flex flex-col gap-4 justify-center py-3 px-4 rounded-3xl bg-[#FFD1DC]">
      <div>
        <div className="flex gap-2 bg-[#FBB1C3] w-fit  py-1 px-2 text-sm rounded-2xl items-center">
          <CircleCheck className="w-4 h-4" />
          <h3 className="uppercase font-bold m-0">Completed</h3>
        </div>
        <Card backgroundColor="bg-[#FFEBF0]" />
        <Card backgroundColor="bg-[#FFEBF0]" />
      </div>
    </div>
  );
}
