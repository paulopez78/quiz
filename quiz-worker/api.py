import json
import urllib3
import os

def postAnswer(data):
    if data!=1:
        apiHost = os.getenv('APIDB_PORT_5000_TCP_ADDR', 'quiz-api-db')
        apiPort = os.getenv('APIDB_PORT_5000_TCP_PORT', 5000)
        url = 'http://{0}:{1}/quiz/answer'.format(apiHost,apiPort)

        http = urllib3.PoolManager()
        http.request('PUT', url, headers={'Content-Type': 'application/json'}, body=data)
        print "posted data",data
