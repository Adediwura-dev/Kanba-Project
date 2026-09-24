import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import { CircleX } from "lucide-react";
export default function AddTaskForm({ onClose }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("todo");
	const [titleError, setTitleError] = useState("");

	async function createCard(e) {
		e.preventDefault();

		if (!title.trim()) {
			setTitleError("Task must have a title");
			return;
		}
		setTitleError("");
		try {
			const docRef = await addDoc(collection(db, "cards"), {
				title: title,
				description: description,
				category: category,
				dateCreated: new Date().toLocaleDateString(),
			});
			console.log("Card created with id: ", docRef.id);
			onClose();
		} catch (error) {
			console.error("error creating card", error);
		}
	}
	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
			<form
				onSubmit={createCard}
				className='w-[300px] md:w-[450px] rounded-xl bg-white p-6 shadow-xl'
			>
				<div className='flex items-center justify-between mb-5'>
					<h2 className='text-xl font-bold'>Add New Task</h2>

					<button type='button' onClick={onClose} className='cursor-pointer'>
						<CircleX className='w-5 h-5 text-red-700' />
					</button>
				</div>

				<div className='mb-1'>
					<label className='block mb-2 font-medium'>Title</label>

					<input
						type='text'
						placeholder='Task title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className='border rounded-lg px-4 py-2 w-full'
					/>
					{titleError && (
						<p className='text-red-600 text-sm mb-1'>{titleError}</p>
					)}
				</div>
				<label className='block mb-2 font-medium'>Description</label>

				<textarea
					placeholder='Task description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className='border rounded-lg px-4 py-2 w-full min-h-[120px]'
				/>
				<label className='block mb-2 font-medium'>Category</label>

				<select
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					className='border rounded-lg px-4 py-2 w-full mb-4'
				>
					<option value='todo'>To-do</option>
					<option value='inprogress'>In-Progress</option>
					<option value='completed'>Completed</option>
				</select>

				<button
					type='submit'
					className='bg-red-800 text-white rounded-lg px-5 py-2 font-bold hover:bg-red-950'
				>
					Add Task
				</button>
			</form>
		</div>
	);
}
