import mongoose from 'mongoose';
import { data } from './initialData'
import { Quiz } from '../model/Quiz'
import { DB_CONNECTION } from './config';

export function dbConnect(){
  mongoose.connect(DB_CONNECTION);
  mongoose.connection.on('error', function() {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
  });

  dbSeed();
}

export function dbSeed(){
  const quiz = new Quiz();
  quiz.save(console.log);
}
