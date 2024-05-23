// pages/api/subscribe.js
import axios from "axios";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const response = await axios.post(
      process.env.BEEHIIV_API_ENDPOINT,
      {
        email,
        send_welcome_email: true,
        utm_source: "overview.earth",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
      }
    );

    return res
      .status(200)
      .json({ message: "Subscription successful", data: response.data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Subscription failed", error: error.message });
  }
};
