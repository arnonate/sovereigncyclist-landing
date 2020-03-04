import fetch from "node-fetch"

export const createSubscriber = email => {
  const url = "https://sovereigncyclist.com/.netlify/functions/subscribe"

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then(response => response.json())
}
