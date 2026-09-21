import Card from "../reusable/Card";
export default function All() {
	return (
		<div className='flex flex-col gap-4 justify-center bg-[#B3DFFA]'>
			<div>
				<h3 className='uppercase'>All</h3>
				<Card />
				<Card />
			</div>
		</div>
	);
}
