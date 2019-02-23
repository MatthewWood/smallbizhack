import { Router } from 'express';
import * as ComponentController from '../controllers/component.controller';
const router = new Router();

router.route('/components').get(ComponentController.getComponents);

router.route('/component/update').get(ComponentController.updateComponent);

export default router;
