import joi from "joi";
import joiDate from "@joi/date";
const JoiExtended = joi.extend(joiDate);

export const passengersTable = joi.object({

    firstName: joi.string().min(2).max(100).required(),
    lastName: joi.string().min(2).max(100).required()
});

export const citiesTable = joi.object({

    name: joi.string().min(2).max(50).required()
});

export const flightsTable = joi.object({

    origin: joi.number().integer().required(),
    destination: joi.number().integer().required(),
    date: joi.string().pattern(new RegExp(/^\d{2}-\d{2}-\d{4}$/)).required()
});


export const flightsGetTable = JoiExtended.date().format('DD-MM-YYYY');

export const travelsTable = joi.object({

    passengerId: joi.number().integer().required(),
	flightId: joi.number().integer().required()
})
