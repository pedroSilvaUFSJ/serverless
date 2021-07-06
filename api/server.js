const express = require('express');
const { generateploadUrl } = require('./s3.js');
const cors = require('cors');

const app = express();
app.use(express.static('front'));
app.use(cors());
app.get('/s3Url', async (req, res) => {
    const url = await generateploadUrl();
    res.send({ url })
})

app.listen(8080, () => console.log('listening port 8080'));