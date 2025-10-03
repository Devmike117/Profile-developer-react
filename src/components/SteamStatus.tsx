import { useEffect, useState } from "react";

export const SteamStatus = () => {
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    const fetchSteamStatus = async () => {
      try {
        const res = await fetch("/.netlify/functions/sendSteamStatus");
        const data = await res.json();
        const playerData = data.response.players[0];
        setPlayer(playerData);
      } catch (error) {
        console.error("Error al obtener el estado de Steam:", error);
      }
    };
    fetchSteamStatus();
  }, []);

  if (!player) {
    return (
      <div className="p-4 rounded-2xl shadow-md border bg-gray-50 dark:bg-gray-900 w-full sm:w-80">
        <p className="text-gray-500 text-sm">Cargando estado de Steam...</p>
      </div>
    );
  }

  const states: Record<number, string> = {
    0: "Desconectado",
    1: "Conectado",
    2: "Ocupado",
    3: "Ausente",
    4: "Durmiendo",
    5: "Buscando intercambio",
    6: "Buscando partida",
  };

  const getStatusColor = (state: number) => {
    switch (state) {
      case 1: return "bg-green-500"; 
      case 2: return "bg-red-500";   
      case 3: return "bg-yellow-500"; 
      default: return "bg-gray-400"; 
    }
  };

  return (
    <div className="flex items-center gap-3 p-4 rounded-2xl shadow-md border bg-gray-50 dark:bg-gray-900 w-full sm:w-80">
      {/* Avatar con badge */}
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

      {/* Info */}
      <div className="flex flex-col">
        <p className="font-semibold text-base">{player.personaname}</p>
        {player.gameextrainfo ? (
          <p className="text-green-600 dark:text-green-400 text-sm">
            Jugando {player.gameextrainfo}
          </p>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {states[player.personastate]}
          </p>
        )}
      </div>
    </div>
  );
};
