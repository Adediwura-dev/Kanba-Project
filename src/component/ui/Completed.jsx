import { CircleCheck } from "lucide-react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import Card from "../reusable/Card";

export default function Completed({ cards, deleteCard }) {
  const { setNodeRef } = useDroppable({
    id: "completed",
  });

  // const completedCards = ["completed-1", "completed-2"];
  const completedCards = cards.filter(
    (card) => card.category === "completed" && !card.deleted,
  );

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col gap-4 justify-start py-3 px-4 rounded-3xl bg-[#FFD1DC]"
    >
      <div>
        <div className="flex gap-2 bg-[#FBB1C3] w-fit py-1 px-2 text-sm rounded-2xl items-center">
          <CircleCheck className="w-4 h-4" />
          <h3 className="uppercase font-bold m-0">Completed</h3>
        </div>

        <SortableContext items={completedCards.map((card) => card.id)}>
          {completedCards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              dateCreated={card.dateCreated}
              backgroundColor="bg-[#FFEBF0]"
              deleteCard={deleteCard}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}
