const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.listen(process.env.PORT || 5000, () => console.log(`Server is On`));
