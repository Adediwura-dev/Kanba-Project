import Card from "../component/reusable/Card";
import ParentCard from "../component/reusable/ParentCard";
import All from "../component/ui/All";
import Completed from "../component/ui/Completed";
import InProgress from "../component/ui/InProgress";
import Todo from "../component/ui/Todo";

export default function KanbaBoard() {
	return (
		<div className='parent-container grid grid-cols-4 gap-4 mx-6 my-8 text-gray-700'>
			<All />
			<Todo />
			<InProgress />

			<Completed />
		</div>
	);
}
