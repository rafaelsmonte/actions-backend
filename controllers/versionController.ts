import { Request, Response } from 'express';
import { versionModel } from '../models/versionModel';

export const versionController = {
    getVersion: (req: Request, res: Response): void => {
        const versionInfo = versionModel.getVersion();
        res.json(versionInfo);
    }
};