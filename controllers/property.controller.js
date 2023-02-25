import mongoose from 'mongoose';
import Property from '../mongodb/models/property.js';
import User from '../mongodb/models/user.js';

const getAllProperties = (req, res) => { }
const getPropertyDetails = (req, res) => { }
const updateProperty = (req, res) => { }
const deleteProperty = (req, res) => { }
const createProperty = async (req, res) => {
    const { title, description, propertyType, location, price, photo, email } = req.body;
    //start session
    const session = await mongoose.startSession();
    session.startTransaction();
    const user = await User.findOne({ email }).session(session);
    if (!user)
        throw new Error('User not found');
    // const photoUrl = await
}

export {
    getAllProperties,
    getPropertyDetails,
    createProperty,
    updateProperty,
    deleteProperty,
}