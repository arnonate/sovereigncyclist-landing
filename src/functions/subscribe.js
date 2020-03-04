var fetch = require("node-fetch")

const key = process.env.API_KEY
const listId = process.env.LIST_ID

const responseHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
}

async function createEmailSubscriber(listId, email) {
  const url = "https://emailoctopus.com/api/1.4/lists/" + listId + "/contacts"
  const data = {
    api_key: key,
    email_address: email,
    status: "SUBSCRIBED",
  }

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(response => {
    // console.log(response)
    return response.json()
  })
}

exports.handler = async function(event, context, callback) {
  let userData = JSON.parse(event.body)
  const { email } = userData

  try {
    const data = await createEmailSubscriber(listId, email)
    // console.log(data)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: data }),
    }
  } catch (err) {
    console.log(err)

    return {
      statusCode: 500,
      body: JSON.stringify({ message: err.message }),
    }
  }
}
