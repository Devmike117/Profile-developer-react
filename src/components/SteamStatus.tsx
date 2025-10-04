import { useEffect, useState } from "react";

export const SteamStatus = () => {
  const [player, setPlayer] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchSteamStatus = async () => {
    try {
      const res = await fetch("/.netlify/functions/sendSteamStatus");
      const data = await res.json();

      if (data?.response?.players?.length > 0) {
        setPlayer(data.response.players[0]);
        setError(null);
      } else {
        setError("No player data found.");
        setPlayer(null);
      }
    } catch (e) {
      console.error("Error fetching Steam:", e);
      setError("Error fetching Steam.");
      setPlayer(null);
    }
  };

  useEffect(() => {
    fetchSteamStatus();
    const interval = setInterval(fetchSteamStatus, 30000); 
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (state: number) => {
    switch (state) {
      case 1: return "bg-green-500";   
      case 2: return "bg-red-500";     
      case 3: return "bg-yellow-500";  
      default: return "bg-gray-400";   
    }
  };

  return (
    <div className="p-4 rounded-2xl border border-white/30 dark:border-white/30 bg-white/10 dark:bg-white/10 backdrop-blur-xl shadow-[0_4px_30px_rgba(255,255,255,0.1)] transition-all duration-300 w-full sm:w-80 hover:border-white/50 hover:shadow-[0_4px_40px_rgba(255,255,255,0.2)] bg-gradient-to-br from-white/10 to-white/5">
      {!player && !error && (
        <p className="text-gray-500 text-sm">Cargando estado de Steam...</p>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {player && (
        <div className="flex flex-col gap-3">
          {/* Avatar + nombre + circulito de estado */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={player.avatarfull}
                alt={player.personaname}
                className="w-14 h-14 rounded-xl shadow"
              />
              <span
                className={`absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border border-white dark:border-gray-900 ${getStatusColor(player.personastate)}`}
              ></span>
            </div>
            <div>
              <p className="font-semibold text-base text-gray-900 dark:text-gray-900">{player.personaname}</p>
              {!player.gameextrainfo && (
                <p className="text-gray-600 text-sm">
                  {player.personastate === 0 ? "Offline" : "Online"}
                </p>
              )}
            </div>
          </div>

          {/* Estado de juego */}
          {player.gameextrainfo && player.gameid ? (
            <div>
              <p className="text-blue-700 dark:text-blue-700 text-sm">
                Playing {player.gameextrainfo}
              </p>
              <img
                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${player.gameid}/header.jpg`}
                alt={player.gameextrainfo}
                className="rounded-lg mt-2"
              />
            </div>
          ) : (
            <p className="text-gray-500 text-xs italic">Not playing right now</p>
          )}
        </div>
      )}
    </div>
  );
};
