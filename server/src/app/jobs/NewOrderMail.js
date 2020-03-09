import Mail from '../../lib/Mail';

class NewOrderMail {
  get key() {
    return 'NewOrderMail';
  }

  async handle({ data }) {
    const { deliveryman, product, order } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Novo produto disponível para retirada',
      template: 'newOrder',
      context: {
        deliveryman: deliveryman.name,
        product,
        recipient: order.recipient.name,
        street: order.recipient.street,
        number: order.recipient.number,
        complement: order.recipient.complement,
        state: order.recipient.state,
        city: order.recipient.city,
        cep: order.recipient.cep,
      },
    });
  }
}

export default new NewOrderMail();
