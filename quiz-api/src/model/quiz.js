import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  correct: Number,
  result: Number
})

const questionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  options: [optionSchema]
})

const quizSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  description: String,
  active: Boolean,
  questions: [questionSchema]
});

export const Quiz = mongoose.model('Quiz', quizSchema);

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
