import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactsSchema = new Schema({
    companyName: String, 
    name: String, 
    email: String,
    phoneNumber: Number,
    message: String
}, {
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactsSchema);