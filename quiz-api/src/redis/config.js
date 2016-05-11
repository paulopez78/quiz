const REDIS_PORT = process.env.REDIS_PORT || "6379"
const REDIS_HOST = process.env.REDIS_HOST || "localhost"
export const REDIS_OPTIONS = {host: REDIS_HOST, port: REDIS_PORT}
export const QUESTION_ANSWER_CHANNEL = 'question_answer';
