import express from 'express';
import { firewall } from './middlewares/firewall';

import FormController from './controllers/FormController.js';

const routes = express.Router();
const formController = new FormController();

routes.post('/schedule', firewall, formController.doSchedule);

export default routes;