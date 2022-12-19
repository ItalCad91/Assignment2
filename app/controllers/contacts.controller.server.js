import contactModel from '../models/contacts.js';

import { UserDisplayName } from '../utils/index.js';

export function DisplayContactsList(req, res, next){
    contactModel.find(function(err, contactsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Contact List', page: 'contacts/list', contacts: contactsCollection, displayName: UserDisplayName(req)});
    })
}

export function DisplayContactsAddPage(req, res, next){
    res.render('index', { title: 'Add Contact', page: 'contacts/edit', contact: {}, displayName: UserDisplayName(req) });
}

export function ProcessContactsAddPage(req, res, next){
    
    let newContact = contactModel({
        companyName: req.body.companyName,
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        message: req.body.message,
        runtime: req.body.runtime
    });

    contactModel.create(newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contacts-list')
    } )
}

export function DisplayContactsEditPage(req, res, next){
    let id = req.params.id;

    contactModel.findById(id, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Contacts', page: 'contacts/edit', contact: Contact, displayName: UserDisplayName(req) });
    });    
}

export function ProcessContactsEditPage(req, res, next){

    let id = req.params.id;
    
    let newContact = contactModel({
        _id: req.body.id,
        companyName: req.body.companyName,
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        message: req.body.message,
        runtime: req.body.runtime
    });

    contactModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contacts-list')
    } )
}

export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contacts-list');
    })
}