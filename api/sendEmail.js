
export default async function handler(req, res) {
  try {
    const data = req.body;

    if (!data.from_name || !data.from_email || !data.message) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        template_params: {
          from_name: data.from_name,
          from_email: data.from_email,
          message: data.message
        },
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY
      })
    });

    const text = await response.text();

    if (!response.ok) {
      throw new Error(`EmailJS API error: ${response.status} ${response.statusText} - ${text}`);
    }

    return res.status(200).json({ success: true, result: text });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
