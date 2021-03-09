
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    //day, default date.now
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: { 
                type: String
              },
              name: { 
                type: String, 
                required: true 
              },
              reps: { 
                type: Number 
              },
              sets: { 
                type: Number 
              },
              weight: { 
                type: Number 
              },
              duration: { 
                type: Number 
              }, 
              distance: {
                type: Number
              }  
        }
    ],    
});



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;