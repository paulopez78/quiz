import redis
import os

config = {
    'host': os.getenv('REDIS_HOST', 'localhost'),
    'port': os.getenv('REDIS_PORT', 6379),
    'db': 0
}

r = redis.StrictRedis(**config)
