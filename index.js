import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.json({message: 'Server is healthy v4.2', status: 'Github Actions hurrayy'});
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT:  ${PORT}`);
});
