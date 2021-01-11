import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail';

/* createTransport  - metodo envio de email */
export default nodemailer.createTransport(mailConfig);