import { useEffect, useState } from "react";

export const SteamStatus = () => {
  const [player, setPlayer] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Mapear estado como en tu otro proyecto
  const estadoSteam = (state: number) => {
    switch (state) {
      case 0: return "⚫ Offline";
      case 1: return "🟢 Online";
      case 2: return "🟡 Away";
      case 3: return "🔴 Busy";
      case 4: return "👻 Invisible";
      default: return "❓ Unknown";
    }
  };

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
    const interval = setInterval(fetchSteamStatus, 30000); // refresca cada 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 rounded-2xl shadow-md border bg-gray-50 dark:bg-gray-900 w-full sm:w-80">
      {!player && !error && (
        <p className="text-gray-500 text-sm">Cargando estado de Steam...</p>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {player && (
        <div className="flex flex-col gap-3">
          {/* Avatar + nombre */}
          <div className="flex items-center gap-3">
            <img
              src={player.avatarfull}
              alt={player.personaname}
              className="w-14 h-14 rounded-xl shadow"
            />
            <div>
              <p className="font-semibold text-base">{player.personaname}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {estadoSteam(player.personastate)}
              </p>
            </div>
          </div>

          {/* Estado de juego */}
          {player.gameextrainfo && player.gameid ? (
            <div>
              <p className="text-green-600 dark:text-green-400 text-sm">
                🎮 Playing {player.gameextrainfo}
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

          {/* Link al perfil */}
          {player.profileurl && (
            <a
              href={player.profileurl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm hover:underline mt-2"
            >
              View Steam Profile →
            </a>
          )}
        </div>
      )}
    </div>
  );
};
