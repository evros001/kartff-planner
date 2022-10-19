const mongoose = require('mongoose');
const Joi = require('joi');

const teamSchema = new mongoose.Schema({
	name: {type: String, required: false},
	owner: {type: String, required: false},
	roster: {type: Array, required: true},
});

teamSchema.set('timestamps', true);

const Team = mongoose.model("team", teamSchema);

const validate = (data) => {
	console.log('VALIDATE TEAM DATA MODEL', data);
	const schema = Joi.object({
		name: Joi.string().required(),
    owner: Joi.string().required(),
		roster: Joi.array().required()
	});

	return schema.validate(data);
}

module.exports = {Team, validate}
