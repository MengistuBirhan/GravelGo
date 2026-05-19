import { products } from '../data/products';

// የወደፊት የባክኤንድ ሊንክሽን እዚህ ማስገባት ትችያለሽ
const BASE_URL = 'https://api.gravelgo.com/v1'; 

export const apiService = {
  // ሁሉንም ምርቶች ለማምጣት
  getProducts: async () => {
    // እውነተኛ ኤፒአይ ሲኖርሽ የሚከተለውን መክፈት ትችያለሽ፡
    // const response = await fetch(`${BASE_URL}/products`);
    // return await response.json();
    
    // ለጊዜው ከ local data በትንሽ 딜ሌይ (delay) ያመጣል
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 500);
    });
  },

  // አዲስ ትዕዛዝ ለመላክ (Order)
  createOrder: async (orderData) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true, orderId: 'GG-' + Math.floor(Math.random() * 90000) + 10000 }), 800);
    });
  },

  // ለቻፓ (Chapa) ወይም ለሌላ ክፍያ ሊንክ ለመጠየቅ
  initializePayment: async (paymentData) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true, checkoutUrl: 'https://checkout.chapa.co/checkout/test-link' }), 1000);
    });
  }
};