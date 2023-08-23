const express = require("express");
const app = express();
const path = require('path');
app.use(express.static("dist/web-app"));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "web-app", "index.html"));
});

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => console.log(`Server started on port ${4200}`));