import json
import urllib3

encoded_body = json.dumps({data})
http = urllib3.PoolManager()
api = http.request('POST', 'http://localhost:8080/quiz/answer',
                 headers={'Content-Type': 'application/json'},
                 body=encoded_body
