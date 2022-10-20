const mongoose = require('mongoose');
const Joi = require('joi');

const leagueSchema = new mongoose.Schema({
	name: {type: String, required: false},
	commisioner: {type: mongoose.Schema.ObjectId, required: false},
	teams: {type: Array, required: true},
});

leagueSchema.set('timestamps', true);

const League = mongoose.model("league", leagueSchema);

const validate = (data) => {
	console.log('VALIDATE LEAGUE DATA MODEL', data.password);
	const schema = Joi.object({
		name: Joi.string().required(),
		teams: Joi.array().required()
	});

	return schema.validate(data);
}

module.exports = {League, validate}
