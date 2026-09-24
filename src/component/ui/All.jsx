import { CircleDashedCheck } from "lucide-react";
import Card from "../reusable/Card";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
export default function All() {
	const { setNodeRef } = useDroppable({ id: "todo" });
	const allCards = ["all-1", "all-2"];

	return (
		<div
			ref={setNodeRef}
			className='flex flex-col gap-4 justify-start py-3 px-4 rounded-3xl bg-[#B3DFFA]'
		>
			<div>
				<div className='flex gap-1.5 bg-[#64adda] w-fit  py-1 px-2 text-sm rounded-2xl items-center'>
					<CircleDashedCheck className='w-4 h-4' />
					<h3 className='uppercase font-bold m-0'>All</h3>
				</div>
				<SortableContext items={allCards}>
					<Card id='all-1' backgroundColor='bg-[#CDEBFC]' />
					<Card
						id='all-2'
						title='this is my card'
						description='this is my card description'
						backgroundColor='bg-[#CDEBFC]'
					/>
				</SortableContext>
			</div>
		</div>
	);
}
