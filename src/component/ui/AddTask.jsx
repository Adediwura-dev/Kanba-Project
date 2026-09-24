import { Plus } from "lucide-react";

export default function AddTask() {
	return (
		<div className='bg-amber-300'>
			<div className=' text-red-800 justify-center font-bold hover:text-red-950 flex gap-2 w-fit ml-auto my-5 mx-2 py-2 px-3 mr-15'>
				<button>
					<Plus className='w-6 h-6' />
				</button>
				<p className=''>Add New Task</p>
			</div>
		</div>
	);
}
