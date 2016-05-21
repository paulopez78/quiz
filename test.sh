docker rm -f load_test

docker run \
-v /$pwd/quiz-worker/test.py:/app \
--name load_test \
paulopez/quiz-worker "test.py"
