import mongoose from 'mongoose';
import getData from './initialData'
import { Quiz } from './model/Quiz'
import { DB } from './config';

export function dbConnect(){
  mongoose.connect(DB);
  mongoose.connection.on('error', function() {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
  });
}

export function dbSeed(){
  const quiz = new Quiz();
  quiz.save(console.log);
}
