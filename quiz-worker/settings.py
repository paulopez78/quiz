import redis
import os

config = {
    'host': os.getenv('REDIS_PORT_6379_TCP_ADDR', 'redis'),
    'port': os.getenv('REDIS_PORT_6379_TCP_PORT', 6379),
    'db': 0
}

r = redis.StrictRedis(**config)
