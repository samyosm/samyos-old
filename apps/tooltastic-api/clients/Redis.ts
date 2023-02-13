import { createClient } from '@redis/client';

const client = createClient({
  password: process.env.TOOLTASTIC_REDIS_PASSWORD,
  socket: {
    host: 'redis-15254.c44.us-east-1-2.ec2.cloud.redislabs.com',
    port: 15254,
  },
});

export { client };
