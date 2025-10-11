const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const apiKey = process.env.API_KEY;
  const steamID = process.env.STEAM_ID;

  const steamURL = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamID}`;

  try {
    const res = await fetch(steamURL);
    const data = await res.json();

    if (!data?.response?.players || data.response.players.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "No se encontró el jugador." })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error("Steam fetch error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error al obtener datos de Steam" })
    };
  }
};
