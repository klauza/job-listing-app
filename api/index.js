const express = require('express')
const app = express()
const port = 3001

// create new redis instance in here
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);


app.get('/jobs', async (req, res) => {  // this route is converted to be async func
  const jobs = await getAsync('github');
  // console.log(JSON.parse(jobs).length);
  res.header('Access-Control-Allow-Origin', "http://localhost:3000")
  return res.send(jobs)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))