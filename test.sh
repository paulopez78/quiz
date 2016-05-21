docker rm -f load_test

docker run \
-it \
-e=QUIZ_API_HOST=$1 \
-e=QUIZ_API_PORT=$2 \
--name load_test \
--entrypoint="python" \
paulopez/quiz-worker "test.py"
