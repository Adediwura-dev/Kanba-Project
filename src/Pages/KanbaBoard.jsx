import { DndContext, closestCorners } from "@dnd-kit/core";

import All from "../component/ui/All";
import Completed from "../component/ui/Completed";
import InProgress from "../component/ui/InProgress";
import Todo from "../component/ui/Todo";

export default function KanbaBoard() {
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
			<div className='parent-container grid grid-cols-4 gap-4 mx-6 my-8 text-gray-700'>
				<All />
				<Todo />
				<InProgress />
				<Completed />
			</div>
		</DndContext>
	);
}
