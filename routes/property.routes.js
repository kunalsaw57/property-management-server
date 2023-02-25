import express from "express";

import { createProperty, deleteProperty, getAllProperties, getPropertyDetails, updateProperty } from '../controllers/property.controller.js';

const router = express.Router();

router.route('/').get(getAllProperties);
router.route('/:id').get(getAllProperties);
router.route('/').post(getAllProperties);
router.route('/:id').patch(getAllProperties);
router.route('/:id').delete(getAllProperties);

export default router;