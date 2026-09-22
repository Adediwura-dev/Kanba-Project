import { CircleDashed } from "lucide-react";
import Card from "../reusable/Card";
export default function Todo() {
	return (
		<div className='flex flex-col gap-4 justify-center  py-3 px-4 rounded-3xl bg-[#9DC183]'>
			<div>
				<div className='flex gap-2 w-fit bg-[#77b14e] py-1 px-2 text-sm rounded-2xl items-center'>
					<CircleDashed className='w-4 h-4' />
					<h3 className='uppercase font-bold m-0'>To-do</h3>
				</div>
				<Card
					title='this is my card'
					description='this is my card description'
					backgroundColor='bg-[#bae3a8]'
				/>
				<Card title='this is my card' backgroundColor='bg-[#bae3a8]' />
			</div>
		</div>
	);
}
