from settings import r
from api import
import sys

if __name__ == '__main__':
    name = sys.argv[1]
    channel = sys.argv[2]

    print 'Welcome to {channel}'.format(**locals())

    while True:
        message = raw_input('Enter a message: ')

        if message.lower() == 'exit':
            break

        message = '{name} says: {message}'.format(**locals())

        r.publish(channel, message)
