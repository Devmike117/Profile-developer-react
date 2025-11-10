import { useEffect, useState } from 'react';

interface ChristmasLightsProps {
  darkMode: boolean;
}

export const ChristmasLights = ({ darkMode }: ChristmasLightsProps) => {
  const [lights] = useState(() => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      delay: i * 0.2,
    }));
  });

  return (
    <div className="fixed top-0 left-0 w-full h-16 z-50 pointer-events-none overflow-hidden">
      {/* Cable negro */}
      <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-800 dark:bg-gray-700" />
      
      {/* Luces */}
      <div className="flex justify-around items-start h-full px-4">
        {lights.map((light) => (
          <div key={light.id} className="relative flex flex-col items-center">
            {/* Cable que cuelga */}
            <div className="w-0.5 h-4 bg-gray-800 dark:bg-gray-700" />
            
            {/* Bombilla */}
            <div
              className="w-3 h-4 rounded-full animate-pulse"
              style={{
                backgroundColor: light.color,
                boxShadow: `0 0 10px ${light.color}, 0 0 20px ${light.color}`,
                animationDelay: `${light.delay}s`,
                animationDuration: '1.5s',
              }}
            >
              {/* Reflejo de la luz */}
              <div
                className="absolute inset-0 rounded-full opacity-50"
                style={{
                  background: darkMode 
                    ? `radial-gradient(circle at 30% 30%, white, transparent)`
                    : `radial-gradient(circle at 30% 30%, rgba(50, 50, 50, 0.8), transparent)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
