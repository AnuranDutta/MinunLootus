const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/static'));
app.set('view-engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.listen(PORT, () => console.log (`Listening to port ${PORT}`));