from settings import r
import sys
import json
import urllib3

if __name__ == '__main__':
    channel = sys.argv[1]

    pubsub = r.pubsub()
    pubsub.subscribe(channel)

    print 'Listening to {channel}'.format(**locals())

    while True:
        for item in pubsub.listen():
            print item['data']
            encoded_body = json.dumps({item['data']})
            http = urllib3.PoolManager()
            api = http.request('POST', 'http://192.168.99.100:5000/quiz/answer',
                             headers={'Content-Type': 'application/json'},
                             body=encoded_body
