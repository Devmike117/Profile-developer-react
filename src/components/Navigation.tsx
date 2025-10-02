import { tabs } from '../constants';

interface Props {
	tabActiveIndex: number;
	setTabActiveIndex: (index: number) => void;
}

export const Navigation = ({
	tabActiveIndex,
	setTabActiveIndex,
}: Props) => {
	return (
		<div className='flex mt-12 border-b border-gray-200'>
			{tabs.map(tab => (
				<button
					key={tab.id}
					className='flex-1 flex justify-center cursor-pointer'
					onClick={() => setTabActiveIndex(tab.id)}
				>
					<p
						className={`justify-center flex gap-2 items-center border-b-2 pb-1 ${
							tabActiveIndex === tab.id
								? 'text-sky-500 border-b-sky-500'
								: 'text-gray-500 border-b-transparent'
						}`}
					>
						<tab.icon size={24} />
						<span className='hidden sm:block'>{tab.name}</span>
						<span className='block sm:hidden'>
							{tabActiveIndex === tab.id && tab.name}
						</span>
					</p>
				</button>
			))}
		</div>
	);
};
