import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';

// parsar
app.use(express.json());
app.use(cors());

export default app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});
