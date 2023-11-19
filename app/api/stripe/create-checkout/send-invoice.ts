// pages/api/send-invoice.js
// import { stripe } from '../../utils/stripe';

const CUSTOMERS:any = [];

const stripe = require ('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req:any, res:any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body;

  try {
    let customer = CUSTOMERS.find((c:any) => c.email === email);
    let customerId;

    if (!customer) {
      customer = await stripe.customers.create({
        email,
        description: 'Customer to invoice',
      });

      CUSTOMERS.push({ stripeId: customer.id, email });
      customerId = customer.id;
    } else {
      customerId = customer.stripeId;
    }

    const invoice = await stripe.invoices.create({
      customer: customerId,
      collection_method: 'send_invoice',
      days_until_due: 30,
    });

    await stripe.invoiceItems.create({
      customer: customerId,
    //   price: 'price_123456789', // Replace with your actual Price ID
      invoice: invoice.id,
    });

    await stripe.invoices.sendInvoice(invoice.id);

    res.status(200).json({ success: true, message: 'Invoice sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
