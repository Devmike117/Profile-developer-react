import { FaRegBuilding } from 'react-icons/fa';
import { experience } from '../constants';
import { CiCalendarDate } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';

export const GridExperience = () => {
	return (
		<section className='grid grid-cols-1 gap-5 mt-5'>
			{experience.map(exp => (
				<div
					className='bg-white p-5 rounded-lg border border-gray-300 flex flex-col gap-3'
					key={exp.id}
				>
					<div className='flex flex-col md:flex-row justify-between md:items-center gap-2'>
						{/* Posición y Nombre de empresa */}
						<div className='flex flex-col gap-1'>
							<h3 className='text-xl font-bold'>{exp.position}</h3>
							<p className='flex items-center gap-2 text-gray-400 font-medium'>
								<FaRegBuilding />
								{exp.companyName}
							</p>
						</div>
						{/* Rango de tiempo y Ubicación */}
						<div className='flex flex-col gap-1'>
							<p className='flex items-center gap-2 text-gray-400 font-medium md:text-sm'>
								<CiCalendarDate />
								{exp.timeRange}
							</p>
							<p className='flex items-center gap-2 text-gray-400 font-medium md:text-sm'>
								<IoLocationOutline />
								{exp.companyLocation}
							</p>
						</div>
					</div>

					<p className='text-gray-700'>{exp.description}</p>

					<ul className='flex flex-wrap gap-2'>
						{exp.technologiesUsed.map((t, index) => (
							<li
								key={index}
								className='text-black border border-gray-300 rounded-full px-3 py-1 text-xs font-bold'
							>
								{t}
							</li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
};
