const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

app.post('/login', (req, res) => {
    const { phoneNumber } = req.body;

    // Mock validation and response
    if (phoneNumber === '1234567890') {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid phone number' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
