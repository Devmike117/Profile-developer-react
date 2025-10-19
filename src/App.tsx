import { useState } from 'react';
import {
	GridExperience,
	GridProjects,
	GridSkills,
	Header,
	ModalProject,
	Navigation,
} from './components';
import type { Project } from './types';

function App() {
	const [tabActiveIndex, setTabActiveIndex] = useState<number>(1);
	const [selectedProject, setSelectedProject] =
		useState<Project | null>(null);

	return (
		<div className='bg-slate-50 min-h-screen'>
			<main className='container py-10'>
				<Header />
				<Navigation
					tabActiveIndex={tabActiveIndex}
					setTabActiveIndex={setTabActiveIndex}
				/>

				{tabActiveIndex === 1 && (
					<GridProjects setSelectedProject={setSelectedProject} />
				)}

				{tabActiveIndex === 2 && <GridExperience />}

				{tabActiveIndex === 3 && <GridSkills />}

				{selectedProject && (
					<ModalProject
						selectedProject={selectedProject}
						setSelectedProject={setSelectedProject}
					/>
				)}
			</main>
			{/* Footer */}
			<footer className="w-full py-4 text-center relative z-10 backdrop-blur-lg bg-white/30 border-t border-white/20 shadow-lg">
			© Devmike117.{' '}
			{new Date().toLocaleDateString('es-MX', { timeZone: 'America/Mexico_City', year: 'numeric' })}
			</footer>
		</div>
	);
}

export default App;
