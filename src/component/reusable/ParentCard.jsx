import Card from "./Card";

export default function ParentCard({ title, backgroundColor }) {
	return (
		<div
			className='flex flex-col gap-4 justify-center'
			style={{
				backgroundColor: backgroundColor,
			}}
		>
			<div>
				<h3 className='uppercase'>{title}</h3>
				<Card backgroundColor='red' />
				<Card />
			</div>
		</div>
	);
}
