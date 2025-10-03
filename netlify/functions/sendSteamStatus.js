const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const apiKey = process.env.API_KEY;
  const steamID = process.env.STEAM_ID;

  const steamURL = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamID}`;
  const proxyURL = `https://corsproxy.io/?${encodeURIComponent(steamURL)}`;

  try {
    const res = await fetch(proxyURL);
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al obtener datos de Steam' })
    };
  }
};