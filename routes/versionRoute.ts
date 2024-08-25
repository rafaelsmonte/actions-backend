import { Router } from 'express';
import { versionController } from '../controllers/versionController';

const router: Router = Router();

router.get('/version', versionController.getVersion);

export default router;