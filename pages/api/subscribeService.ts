import dotenv from "dotenv";
dotenv.config();

export interface SubscriptionData {
  email: string;
  reactivate_existing?: boolean;
  send_welcome_email?: boolean;
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
  referring_site?: string;
  custom_fields?: { name: string; value: string }[];
}

export const subscribe = async (email: string) => {
  const url =
    "https://api.beehiiv.com/v2/publications/pub_95dd320e-9772-416a-a483-39bd4515697e/subscriptions";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
    },
    body: JSON.stringify({
      email,
      send_welcome_email: true,
      utm_source: "website",
    }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Subscription failed", error);
    throw error;
  }
};
