import { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { personalInfo } from '../constants';
import { FaLink } from 'react-icons/fa';
import { SongPlayer } from './SongPlayer';
import { ContactButton } from './ContactButton';
import { SteamStatus } from './SteamStatus';

const getIconColor = (name: string): string => {
	switch (name) {
		case 'Instagram': return '#E1306C';
		case 'Pinterest': return '#E60023';
		case 'Github': return '#000000ff';
		case 'LinkedIn': return '#0077B5';
		case 'Steam': return '#171A21'; 
		case 'SteamAccent': return '#00ADEE'; 
		default: return '#000000ff';
	}
};

export const Header = () => {
	const { photoSrc, name, location, occupation, overview, socialLinks, song, otherLinks } = personalInfo;

	return (
		<>
			<div className='flex flex-col sm:flex-row gap-6 sm:gap-12'>
				{/* Foto */}
				<div className='self-center sm:self-start'>
					<img
						src={photoSrc}
						alt={`Foto de ${name}`}
						className='w-36 sm:w-48 h-36 sm:h-48 object-cover rounded-full shadow-lg'
					/>
				</div>

				{/* Información Personal */}
				<div className='flex flex-col gap-3 flex-1'>
					<h1 className='text-balance font-bold text-2xl sm:text-3xl'>{name}</h1>
					<p className='text-balance text-base sm:text-lg text-gray-600'>{occupation}</p>

					{/* Stats */}
					<div className='flex gap-10 items-center'>
						<div className='flex flex-col items-center'>
							<span className='font-bold text-xl sm:text-2xl'>15</span>
							<span className='text-gray-600 text-sm sm:text-base'>Proyectos</span>
						</div>
						<div className='flex flex-col items-center'>
							<span className='font-bold text-xl sm:text-2xl'>4+</span>
							<span className='text-gray-600 text-sm sm:text-base'>Años Exp.</span>
						</div>
						<div className='flex flex-col items-center'>
							<span className='font-bold text-xl sm:text-2xl'>30+</span>
							<span className='text-gray-600 text-sm sm:text-base'>Tecnologías y herramientas</span>
						</div>
					</div>

					{/* Bio */}
					<p className='text-balance text-gray-500 text-sm sm:text-base'>{overview}</p>

					{/* Otros enlaces */}
					{otherLinks && otherLinks.length > 0 && (
						<div className="mt-4 flex gap-2">
							{otherLinks.map((link) => (
								<a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-blue-700 hover:underline gap-1">
									<FaLink size={14} /> {link.name}
								</a>
							))}
						</div>
					)}

					{/* Reproductor de canción */}
					{song?.url && <SongPlayer />}

					{/* Ubicación */}
					<div className='flex items-center gap-3 mt-4'>
						<IoLocationOutline size={22} />
						<span className='font-medium text-gray-600'>{location}</span>
					</div>

				{/* Redes Sociales + ContactButton */}
				<div className="flex items-center gap-4 mt-4">
				{socialLinks.map((link) => (
					<a
					href={link.url}
					key={link.id}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={link.name}
					title={link.name}
					style={{ color: getIconColor(link.name) }}
					>
					{link.icon}
					</a>
				))}

				{/* ContactButton */}
				{/* ContactButton como ítem de redes sociales, tamaño 26px */}
				<div className="flex-shrink-0 flex items-center justify-center">
				<ContactButton />
				</div>


				</div>

			{/* Estado de Steam y botón de contacto separados */}
			<div className="mt-4 flex flex-col sm:flex-row sm:items-start sm:gap-4">
				{/* SteamStatus */}
				<div className="flex-shrink-0 w-full sm:w-auto">
					<SteamStatus />
				</div>
				</div>
				</div>
			</div>
		</>
	);
};
