import express from 'express';
const router = express.Router();
import controller from '../controllers/apiController.js';

router.post('/CreateNewAccessCode', controller.createNewAccessCode);
router.post('/ValidateAccessCode', controller.validateAccessCode);
router.post('/GeneratePostCaptions', controller.generatePostCaptions);
router.post('/GetPostIdeas', controller.getPostIdeas);
router.post('/CreateCaptionsFromIdeas', controller.createCaptionsFromIdeas);
router.post('/SaveGeneratedContent', controller.saveGeneratedContent);
router.get('/GetUserGeneratedContents', controller.getUserGeneratedContents);
router.post('/UnSaveContent', controller.unsaveContent);

export default router;
