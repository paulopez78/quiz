from settings import r
import time
from api import postAnswerTest

if __name__ == '__main__':
    try:
        while True:
            print 'Starting test'
            try:
                while True:
                    postAnswerTest(8, 22)
                    postAnswerTest(7, 19)
                    postAnswerTest(6, 16)
                    postAnswerTest(5, 13)
                    postAnswerTest(4, 10)
                    postAnswerTest(3, 8)
                    postAnswerTest(2, 4)
                    postAnswerTest(1, 1)
            except Exception,e:
                print str(e)
                time.sleep(1)

    except KeyboardInterrupt:
        print 'interrupted!'
