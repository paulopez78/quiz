from settings import r
import time
from api import postAnswer

if __name__ == '__main__':
    try:
        while True:
            print 'Starting quiz worker'
            try:
                channel = 'question_answer'
                pubsub = r.pubsub()
                pubsub.subscribe(channel)

                print 'Listening to {channel}'.format(**locals())

                while True:
                    for item in pubsub.listen():
                        data = item['data']
                        postAnswer(data)
            except Exception,e:
                print str(e)
                time.sleep(1)

    except KeyboardInterrupt:
        print 'interrupted!'
