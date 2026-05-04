import { useState } from 'react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    location: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ትዕዛዝዎ በተሳካ ሁኔታ ተልኳል! በአጭር ጊዜ ውስጥ እናገኝዎታለን።');
  };

  return (
    <div className="container mx-auto max-w-lg px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">የትዕዛዝ ቅጽ</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-2">የምርት ዓይነት</label>
          <select name="productName" value={formData.productName} onChange={handleChange} className="w-full border p-2.5 rounded-md" required>
            <option value="">ምርቱን ይምረጡ</option>
            <option value="ዜሮ ጠጠር">ዜሮ ጠጠር</option>
            <option value="አንድ ቁጥር ጠጠር">አንድ ቁጥር ጠጠር</option>
            <option value="የተፈጨ ድንጋይ">የተፈጨ ድንጋይ</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">ብዛት (በሜትር ኪዩብ)</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full border p-2.5 rounded-md" placeholder="ለምሳሌ፡ 10" required />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">መድረሻ አድራሻ (Location)</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full border p-2.5 rounded-md" placeholder="አድራሻዎን ያስገቡ" required />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">ስልክ ቁጥር</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border p-2.5 rounded-md" placeholder="09XXXXXXXX" required />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-3.5 rounded-md font-semibold hover:bg-blue-700 transition">
          ትዕዛዝ ላክ
        </button>
      </form>
    </div>
  );
}