import express from 'express';
import cors from 'cors';

import routes from './routes.js';

const app = express();

app.use(cors());
app.use(express.json());

const options = {
  origin: true,
  methods: ["POST"],
  credentials: true,
  maxAge: 3600
};
app.options("/schedule", cors(options));

app.use(routes);

app.listen(process.env.PORT || 3333);

module.exports = app;