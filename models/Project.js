const { model, Schema } = require('mongoose');

const projectSchema = new Schema({
    location: String,
    crop: String,
    // TODO: To fix the numbers type
    return: String,
    duration: String,
    amount: String,
    // farmer: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Farmer'
    // }
}, {
    timestamps: true
});

module.exports = model('Project', projectSchema);