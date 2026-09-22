import { LoaderCircle } from "lucide-react";
import Card from "../reusable/Card";
export default function InProgress() {
	return (
    <div className="flex flex-col gap-4 justify-center py-3 px-4 rounded-3xl bg-[#FFEDA8]">
      <div>
        <div className="flex gap-1.5 w-fit  py-1 px-2 text-sm rounded-2xl items-center bg-[#FCD15B]">
          <LoaderCircle className="w-4 h-4" />
          <h3 className="uppercase font-bold m-0">In-Progress</h3>
        </div>
        <Card backgroundColor="bg-[#FFFFD9]" />
        <Card backgroundColor="bg-[#FFFFD9]" />
      </div>
    </div>
  );
}
