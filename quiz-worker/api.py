import json
import urllib3
import os
from random import randint

def postAnswer(data):
    if data!=1:
        apiHost = os.getenv('QUIZ_API_HOST', 'quiz-api-db')
        apiPort = os.getenv('QUIZ_API_PORT', 5000)
        url = 'http://{0}:{1}/quiz/answer'.format(apiHost,apiPort)

        http = urllib3.PoolManager()
        http.request('PUT', url, headers={'Content-Type': 'application/json'}, body=data)
        print "posted data",data


def postAnswerTest(question, option):
    data = {'question':question, 'option': randint(option,option+2)}

    apiHost = os.getenv('QUIZ_API_HOST', 'quiz-ui')
    apiPort = os.getenv('QUIZ_API_PORT', 80)
    url = 'http://{0}:{1}/api/quiz/answer'.format(apiHost,apiPort)

    http = urllib3.PoolManager()
    http.request('POST', url, headers={'Content-Type': 'application/json'}, body=json.dumps(data))
    print "posted data",data
