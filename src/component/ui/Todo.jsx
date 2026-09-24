import { CircleDashed, CircleX } from "lucide-react";
import Card from "../reusable/Card";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import { useState } from "react";
export default function Todo() {
	const { setNodeRef } = useDroppable({ id: "todo" });

	const todoCards = ["todo-1", "todo-2"];

	return (
		<div
			ref={setNodeRef}
			className='flex flex-col gap-4 justify-start  py-3 px-4 rounded-3xl bg-[#9DC183]'
		>
			<div>
				<div className='flex gap-2 w-fit bg-[#77b14e] py-1 px-2 text-sm rounded-2xl items-center'>
					<CircleDashed className='w-4 h-4' />
					<h3 className='uppercase font-bold m-0'>To-do</h3>
				</div>

				<SortableContext items={todoCards}>
					<Card
						id='todo-1'
						title='this is my card'
						description='this is my card description'
						backgroundColor='bg-[#bae3a8]'
					/>
					<Card
						id='todo-2'
						title='this is my card'
						description='this is my card description'
						backgroundColor='bg-[#bae3a8]'
					/>
				</SortableContext>
			</div>
		</div>
	);
	const [selectedDescription, setSelectedDescription] = useState(null);
	function displayDescription(description) {
		setSelectedDescription(description);
	}
	function closeDescription(description) {
		setSelectedDescription(null);
	}
	return (
		<div className='flex flex-col gap-4 justify-start  py-3 px-4 rounded-3xl bg-[#9DC183]'>
			<div>
				<div className='flex gap-2 w-fit bg-[#77b14e] py-1 px-2 text-sm rounded-2xl items-center'>
					<CircleDashed className='w-4 h-4' />
					<h3 className='uppercase font-bold m-0'>To-do</h3>
				</div>
				<Card
					title='this is my card'
					description='this is my card description'
					backgroundColor='bg-[#bae3a8]'
					displayDescription={displayDescription}
				/>
				<Card title='this is my card' backgroundColor='bg-[#bae3a8]' />
				{selectedDescription && (
					<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
						<div className='w-[400px] rounded-xl bg-[#f0dede] p-4 shadow-xl'>
							<div className='flex items-center justify-between'>
								<button
									onClick={closeDescription}
									className='cursor-pointer text-xl ml-auto'
								>
									<CircleX className='w-4 h-4 text-red-700' />
								</button>
							</div>
							<p className='mt-4'> {selectedDescription} </p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
