import News from "../models/News"

export const VersionForm = (req, res) =>{
    res.send('Save Version');
};

export const CreateVersion = (req, res) =>{
    res.send('New Version');
};

export const ReadVersion = (req, res) =>{
    res.send('See Version');
};

export const EditVersionForm = (req, res) =>{
    res.send('Edit Version');
};

export const UpdateVersion = (req, res) =>{
    res.send('Update version');
};

export const DeleteVersion = (req, res) =>{
    res.send('Delete Version');
};