const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { userId, products } = req.body;

  const transformedProducts = products.map((product) => ({
    quantity: 1,
    price_data: {
      currency: 'usd',
      unit_amount: product?.price * 100,
      product_data: {
        name: product?.title,
        description: product?.description,
        images: [product?.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: { amount: 5, currency: 'usd' },
          display_name: 'Premium shipping',
          delivery_estimate: {
            minimum: { unit: 'business_day', value: 5 },
            maximum: { unit: 'business_day', value: 7 },
          },
        },
      },
    ],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'BD'],
    },
    line_items: transformedProducts,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/cart`,
    metadata: {
      userId,
      images: JSON.stringify(products.map((p) => p?.image)),
      productIds: JSON.stringify(products.map((p) => p?.id)),
    },
  });

  res.status(200).json({ id: session.id });
};
