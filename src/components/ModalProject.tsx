import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { Project } from '../types';
import { IoMdClose, IoMdCode } from 'react-icons/io';

interface Props {
	selectedProject: Project;
	setSelectedProject: (project: Project | null) => void;
}

export const ModalProject = ({
	selectedProject,
	setSelectedProject,
}: Props) => {
	return (
		<div
			className='fixed inset-0 bg-black/70 flex justify-center items-center z-50'
			onClick={() => setSelectedProject(null)}
		>
			<div
				className='w-3/4 lg:w-2/3 xl:w-1/2 shadow-lg relative flex flex-col sm:flex-row'
				onClick={e => e.stopPropagation()}
			>
				<div className='flex-[1.5]'>
					<img
						src={selectedProject.imageSrc}
						alt={selectedProject.name}
						className='w-full h-full object-cover'
					/>
				</div>

				<div className='p-4 py-6 bg-white flex flex-col gap-4 rounded flex-[2.5]'>
					<div className='flex justify-between items-center'>
						<h2 className='text-2xl font-bold'>
							{selectedProject.name}
						</h2>

						<div className='flex items-center gap-3'>
							<a
								href={selectedProject.githubUrl}
								className='ml-4 text-black'
								target='_blank'
								title='ver en Github'
								rel='noreferrer'
							>
								<FaGithub size={22} />
							</a>
							<a
								href={selectedProject.projectUrl}
								className='text-black'
								target='_blank'
								title='ver Proyecto'
								rel='noreferrer'
							>
								<FaExternalLinkAlt size={22} />
							</a>
						</div>
					</div>

					<p className='text-gray-600 text-sm sm:text-base md:text-lg flex-1 md:flex-none'>
						{selectedProject.description}
					</p>

					<div className='space-y-3'>
						<p className='font-semibold flex items-center gap-2'>
							<IoMdCode size={22} />
							Tecnologías Utilizadas:
						</p>

						<div className='flex flex-wrap gap-2 items-center'>
							{selectedProject.technologies.map((t, index) => (
								<span
									key={index}
									className='bg-gray-100 rounded-full px-3 py-1 text-balance text-xs font-semibold'
								>
									{t}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>

			<button
				type='button'
				className='absolute top-6 right-6 cursor-pointer'
				onClick={() => setSelectedProject(null)}
			>
				<IoMdClose size={30} className='text-white' />
			</button>
		</div>
	);
};
