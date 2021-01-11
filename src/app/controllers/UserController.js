import passwordGenerator from 'password-generator';
import Queue from '../lib/Queue';

export default {
    /*criado uma variavel (store) com metodo 'async', para poder utilizar o wait*/
    async store(req, res) {
        /*as constantes name, email receberão as informações recuperadas do 'body' (req.body)*/
        const { name, email } = req.body;
        /*a constante user, receberá o name, email (que vem do req.body, instrução acima)
        e tambem receberá o password, com um valor randomico (senha de 15 caracteres, 
        que nao se repete(false))*/
        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };
        await Queue.add('RegistrationMail', { user });
        return res.json(user);
    }
};