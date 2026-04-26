import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';

// Inicializar el cliente usando el Access Token de las variables de entorno
const client = new MercadoPagoConfig({ 
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN, 
  options: { timeout: 5000, idempotencyKey: true } 
});

export { client, Preference, Payment };
