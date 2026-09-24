import { ListSortDescending, Trash, CircleX } from "lucide-react";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Card({
	title,
	description,
	dateCreated,
	color,
	backgroundColor,
	displayDescription,
	id,
}) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id: id,
		});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};
	const [showDescription, setShowDescription] = useState(false);

	const currentDate = new Date();
	dateCreated = currentDate.toLocaleDateString();

	function handleDescriptionClick() {
		setShowDescription(true);
	}
	function closeDescription(description) {
		setShowDescription(false);
	}
	return (
		<>
			<div
				ref={setNodeRef}
				style={{
					...style,
					color: color,
				}}
				{...attributes}
				{...listeners}
				className={`max-w-[250px] min-h-[80px] my-4 mx-3.5 py-2 px-6 flex flex-col items-left justify-center
				rounded-xl ${backgroundColor} hover:bg-gray-200 hover:shadow-md transition-shadow duration-200`}
			>
				<h3 className='font-bold text-lg first-letter:uppercase'>{title}</h3>
				{description && (
					<button
						onClick={handleDescriptionClick}
						onPointerDown={(e) => e.stopPropagation()}
						className='cursor-pointer'
					>
						<ListSortDescending className='w-4' />
					</button>
				)}
				<p>{dateCreated}</p>
				<div className='text-red-700 ml-auto'>
					<Trash className='w-4 cursor-pointer' />
				</div>
			</div>
			{showDescription && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
					<div className='w-[400px] rounded-xl bg-[#f0dede] p-4 shadow-xl'>
						<div className='flex items-center justify-between'>
							<button
								onClick={closeDescription}
								className='cursor-pointer text-xl ml-auto'
							>
								<CircleX className='w-5 h-5 text-red-700' />
							</button>
						</div>
						<p className='mt-2 text-base first-letter:uppercase'>
							{description}
						</p>
					</div>
				</div>
			)}
		</>
	);
}
