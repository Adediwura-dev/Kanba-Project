import { DndContext, closestCorners } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import All from "../component/ui/All";
import Completed from "../component/ui/Completed";
import InProgress from "../component/ui/InProgress";
import Todo from "../component/ui/Todo";

export default function KanbaBoard() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "cards"), (snapshot) => {
      const cardsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCards(cardsData);
    });

    return () => unsubscribe();
  }, []);

  async function handleDeleteCards(cardId) {
    try {
      const cardRef = doc(db, "cards", cardId);

      await updateDoc(cardRef, {
        deleted: true,
      });

      console.log("Card moved to bin:", cardId);
    } catch (error) {
      console.error("Error moving card to bin:", error);
    }
  }

  
  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) {
      return;
    }
    console.log("Dragged card:", active.id);
    console.log("Dropped over:", over.id);
  }

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="parent-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-4 mx-6 my-8 text-gray-700">
        <All cards={cards} />
        <Todo cards={cards} />
        <InProgress cards={cards} />
        <Completed cards={cards} />
      </div>
    </DndContext>
  );
}
