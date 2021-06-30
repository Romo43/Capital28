import { Router } from "express";
import {
    VersionForm, 
    CreateVersion, 
    ReadVersion, 
    EditVersionForm, 
    UpdateVersion, 
    DeleteVersion
} from "../controllers/news.controller";

const router = Router();

// New version
router.get('/news/add', VersionForm);
router.post('/news/new-news', CreateVersion);

// Get All Versions
router.get('/news', ReadVersion);

// Edit Version
router.get('/news/edit/:id', renderEditForm);
router.put('/news/edit/:id', updateVersion);

// Delete Version
router.delete('/news/delete/:id', deleteVersion);

export default router;