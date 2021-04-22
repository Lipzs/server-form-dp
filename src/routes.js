import express from 'express';
import corsMd from './middlewares/cors';

import FormController from './controllers/FormController.js';

const routes = express.Router();
const formController = new FormController();

routes.post('/schedule', corsMd/formController.doSchedule);

export default routes;