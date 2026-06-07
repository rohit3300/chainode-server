import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.json({message: 'Server is healthy v4.1', status: 'Github Actions'});
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT:  ${PORT}`);
});
