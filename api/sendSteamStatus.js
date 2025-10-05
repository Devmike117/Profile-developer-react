
export default async function handler(req, res) {
  const apiKey = process.env.API_KEY;
  const steamID = process.env.STEAM_ID;

  const steamURL = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamID}`;
  const proxyURL = `https://corsproxy.io/?${encodeURIComponent(steamURL)}`;

  try {
    const response = await fetch(proxyURL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de Steam' });
  }
}
