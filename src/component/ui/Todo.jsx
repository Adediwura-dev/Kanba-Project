import Card from "../reusable/Card";
export default function Todo() {
	return (
		<div className='flex flex-col gap-4 justify-center bg-[#9DC183]'>
			<div>
				<h3 className='uppercase'>To-do</h3>
				<Card />
				<Card />
			</div>
		</div>
	);
}
