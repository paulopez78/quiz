import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  description: String,
  active: Boolean,
  questions: [questionSchema]
});

const questionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  options: [optionSchema]
})

const optionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  correct: Number,
  result: Number
})

export const Quiz = mongoose.model('User', userSchema);

export function findActiveQuiz(){
  return new Promise((resolve, reject) => {
    Quiz.findOne(
        { active: true},
        (err, quiz) => {
          if (err) reject(err)
          else resolve(quiz);
        }
      );
  });
}
