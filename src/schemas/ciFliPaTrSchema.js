import joi from "joi";

export const passengersTable = joi.object({

    firstName: joi.string().min(2).max(100).required(),
    lastName: joi.string().min(2).max(100).required()
});

export const citiesTable = joi.object({
    
    name: joi.string().min(2).max(50).required()
});
