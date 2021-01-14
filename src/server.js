import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';
import UserController from './app/controllers/UserController';
import Queue from './app/lib/Queue';

const app = express();
//Inicia o Bull Dashboard
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

/*Comando para aceitar requisicões no formato json*/
app.use(express.json());
app.post('/users', UserController.store);

/*Rota referente as filas*/
app.use('/admin/queues', BullBoard.UI);

/*Comando para verificar se a conexão esta funcionando*/
app.listen(8080, () => {
    console.log('Server running on the port 8080');
});