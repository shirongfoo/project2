var mongoose = require('mongoose')

var eventSchema = new mongoose.Schema({
  startDate: {type: Date, require: true, min: Date.now()},
  eventName: {type: String, require: true},
  organizerName: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  description: {type: String},
  location: {type: String, require: true},
  groupSize: {type: Number},
  typeOfEvent: {type: String},
  numberOfSpots: {type: Number},
  status: {type: String, default: 'Proposed'},
  createdAt: {type: Date, default: Date.now()},
  attendees: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
})

var Event = mongoose.model('Event', eventSchema)

module.exports = Event
