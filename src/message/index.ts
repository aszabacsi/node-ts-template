import * as amqp from 'amqplib';

export const send = async (q: string, message: any) => {
  try {
    const conn = await amqp.connect('amqp://localhost');
    const ch = await conn.createChannel();
    ch.assertQueue(q, { durable : false });
    ch.sendToQueue(q, new Buffer(JSON.stringify(message)));
    setTimeout(() => conn.close(), 500);
  } catch (e) {
    process.stderr.write(e.message + '\n');
    throw new Error(e);
  }
}

