import nodemailer, { Transporter } from 'nodemailer';
import IMailProvider from '../models/IMailProvider';

interface IMessage {
  to: string;
  body: string;
}

export default class EtherealMailProvider implements IMailProvider {
  private client: Transporter

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        }
      });

      this.client = transporter;
    });

  }

  public async sendMail(to: string, body: string): Promise<void> {
    await this.client.sendMail({
      from: 'GoBarber support team <support@gobarber.com>',
      to,
      subject: "Reset password",
      text: body,
    })
  }
}
