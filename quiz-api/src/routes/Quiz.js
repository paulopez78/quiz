import express from 'express';
import { publish } from '../redis/publish'
import Quiz from '../model/Quiz'

const router = express.Router();

router.get('/quiz/active', (req,res) => {
  Quiz.active()
      .then(quiz => res.send(quiz))
      .catch(error => res.send(error));
});

router.put('/quiz/answer', (req, res) => {
  publish(req.body)
    .then(value => res.send(value))
    .catch(error => res.send(error));
})

export default router;
