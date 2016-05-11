import express from 'express';
import { publish } from '../redis/publish'
import { findActiveQuiz } from '../model/Quiz'

const quiz = express.Router();

quiz.get('/quiz/active', (req,res) => {
  findActiveQuiz()
      .then(quiz => res.send(quiz))
      .catch(error => res.send(error));
});

quiz.put('/quiz/answer', (req, res) => {
  publish(req.body)
    .then(value => res.send(value))
    .catch(error => res.send(error));
})

export default quiz;
