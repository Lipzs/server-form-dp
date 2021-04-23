import app from '../server';
import cors from 'cors';

const firewall = (res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
  app.use(cors({
    origin: false,
    preflightContinue: false
  }));
  next();
}

export { firewall };