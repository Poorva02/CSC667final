const express = require('express');


const API_PORT = 3002;
const app = express();
const router = express.Router();

router.get('/getlist', (req, res) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true});
});


router.post('/updatelist', (req, res) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
