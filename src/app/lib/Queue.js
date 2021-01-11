import Queue from 'bull';
import redisConfig from '../../config/redis';

import * as jobs from '../jobs';

/*Criação da fila*/
const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options,
}));

/*Chama todas as filas*/
export default {
    queues,
    add(name, data) {
        const queue = this.queues.find(queue => queue.name === name);
        return queue.bull.add(data, queue.options);
    },
    /*process - monitora os eventos que acontece na fila*/
    process() {
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);

            queue.bull.on('failed', (job, err) => {
                console.log('Job Failed', queue.key, job.data);
                console.log(err);
            });

        });
    }
};