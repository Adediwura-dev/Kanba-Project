import { LoaderCircle } from "lucide-react";
import Card from "../reusable/Card";
import { SortableContext } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

export default function InProgress() {
  const {setNodeRef} = useDroppable({id: "inprogress"})

  const inprogressCards = ["inprogress-1", "inprogress-2"];
  return (
    <div
    ref={setNodeRef} 
    className="flex flex-col gap-4 justify-start py-3 px-4 rounded-3xl bg-[#FFEDA8]">
      <div>
        <div className="flex gap-1.5 w-fit  py-1 px-2 text-sm rounded-2xl items-center bg-[#FCD15B]">
          <LoaderCircle className="w-4 h-4" />
          <h3 className="uppercase font-bold m-0">In-Progress</h3>
        </div>

        <SortableContext items={inprogressCards}>
          <Card
            id="inprogress-1"
            title="this is my card"
            description="this is my card description"
            backgroundColor="bg-[#FFFFD9]"
          />
          <Card
            id="inprogress-2"
            title="this is my second card"
            description="this is my card description"
            backgroundColor="bg-[#FFFFD9]"
          />
        </SortableContext>
      </div>
    </div>
  );
}
