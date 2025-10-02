import { skills } from '../constants';

export const GridSkills = () => {
	return (
		<section className='grid grid-cols-1 sm:grid-cols-3 gap-2 mt-5'>
			{skills.map(skill => (
				<div
					key={skill.id}
					className='p-5 rounded-lg border flex flex-col gap-2'
					style={{
						backgroundColor: skill.bgColor,
						borderColor: skill.borderColor,
					}}
				>
					<div className='flex items-center justify-center'>
						<img
							src={skill.imageSrc}
							alt={skill.technologyName}
							className='size-20 object-cover'
						/>
					</div>

					<div className='flex flex-col gap-2'>
						<p className='text-lg font-bold'>
							{skill.technologyName}
						</p>

						<div className='flex items-center gap-3'>
							<span className='text-xs text-white bg-black p-1 px-3 rounded-full'>
								{skill.level}
							</span>
							<span className='text-xs text-gray-600'>
								{skill.context}
							</span>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};
