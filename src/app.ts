import express, { Request, Response, Application } from 'express';

const app: Application = express();

const jokes = ["Chuck Norris doesn't read books. He stares them down until he gets the information he wants.", "Time waits for no man. Unless that man is Chuck Norris." ]

app.get('/jokes', (req: Request, res: Response) => {
    try {
        let joke = jokes[Math.floor(Math.random()*jokes.length)];
        res.status(200).send({jokes: joke});
    } catch (err) {
        console.error('Redis error:', err);
        res.status(500).send('Error 1fetching joke');
    }
});

export default app;