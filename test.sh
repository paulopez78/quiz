docker rm -f load_test

docker run \
-it \
-e=QUIZ_API_HOST=192.168.99.100 \
-e=QUIZ_API_PORT:3000 \
--name load_test \
--entrypoint="python test.py" \
paulopez/quiz-worker
