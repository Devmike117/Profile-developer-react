import { projects } from '../constants';
import type { Project } from '../types';

interface Props {
	setSelectedProject: (project: Project | null) => void;
}

export const GridProjects = ({ setSelectedProject }: Props) => {
	return (
		<section className='grid grid-cols-3 gap-2'>
			{projects.map(project => (
				<div
					className='flex flex-col gap-2 cursor-pointer relative group overflow-hidden'
					onClick={() => setSelectedProject(project)}
					key={project.id}
				>
					<div className='flex items-center justify-center inset-0 absolute transition-all duration-300 group-hover:bg-black/60'>
						<p className='text-balance text-center text-white text-xl font-bold hidden group-hover:block'>
							{project.name}
						</p>
					</div>
					<img
						src={project.imageSrc}
						alt={project.name}
						className='object-cover w-full h-64 md:h-[350px] lg:h-[500px]'
					/>
				</div>
			))}
		</section>
	);
};
