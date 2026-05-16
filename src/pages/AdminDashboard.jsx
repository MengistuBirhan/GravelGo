import { useState } from 'react';
import { products as initialProducts } from '../data/products';

const AdminDashboard = () => {
  // ምርቶችን በState መያዝ (አዲስ ሲጨመር ወዲያው እንዲታይ)
  const [productsList, setProductsList] = useState(initialProducts);
  const [activeTab, setActiveTab] = useState('products'); // 'products' ወይም 'orders'

  // አዲስ ምርት መጨመሪያ ፎርም ስቴት
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: 'sand',
    unit: 'በኩቢክ ሜትር',
    description: '',
    image: ''
  });

  // ለሙከራ ያህል የመጡ የደንበኞች ትዕዛዞች (Sample Orders)
  const [orders, setOrders] = useState([
    {
      id: "ORD-9842",
      customerName: "አበባው መኮንን",
      phone: "0911223344",
      address: "ባሕር ዳር፣ ቀበሌ 11",
      item: "ጥራት ያለው ኮንክሪት አሸዋ",
      qty: 3,
      totalPrice: 10500,
      status: "በሂደት ላይ",
      truck: "ሲኖትራክ"
    },
    {
      id: "ORD-1105",
      customerName: "ዮናስ ታደሰ",
      phone: "0920445566",
      address: "ባሕር ዳር፣ ይስማላ ሳይት",
      item: "ዳንጎቴ ሲሚንቶ - Grade 42.5N",
      qty: 50,
      totalPrice: 90000,
      status: "የተጫነ",
      truck: "ከባድ ተሳቢ"
    }
  ]);

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // አዲስ ምርት ሲመዘገብ (Form Submit)
  const handleAddProduct = (e) => {
    e.preventDefault();
    const productToAdd = {
      id: productsList.length + 1,
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      category: newProduct.category,
      unit: newProduct.unit,
      description: newProduct.description,
      // ፎቶ ካልተመረጠ ነባሪ የናሙና ፎቶ ይሰጠዋል
      image: newProduct.image || `/images/${newProduct.category}.jpg`
    };

    setProductsList([productToAdd, ...productsList]);
    alert("ምርቱ በተሳካ ሁኔታ ተጨምሯል!");
    
    // ፎርሙን ባዶ ማድረጊያ
    setNewProduct({
      name: '',
      price: '',
      category: 'sand',
      unit: 'በኩቢክ ሜትር',
      description: '',
      image: ''
    });
  };

  // የትዕዛዝ ሁኔታ መቀያየሪያ (Status Update)
  const toggleOrderStatus = (orderId) => {
    setOrders(prevOrders => 
      prevOrders.map(order => {
        if (order.id === orderId) {
          const nextStatus = order.status === "በሂደት ላይ" ? "የተጫነ" : order.status === "የተጫነ" ? "የደረሰ" : "በሂደት ላይ";
          return { ...order, status: nextStatus };
        }
        return order;
      })
    );
  };

  return (
    <div className="max-w-6xl mx-auto mt-4">
      {/* የዳሽቦርድ ራስጌ */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900 text-white p-6 rounded-2xl shadow-md mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-black">GravelGo የቁጥጥር ማማ (Admin Dashboard)</h1>
          <p className="text-slate-400 text-xs mt-1">ምርቶችን ይጨምሩ፣ የደንበኞችን ትዕዛዝ ይከታተሉ።</p>
        </div>
        
        {/* ታብ መቀያየሪያ ቁልፎች */}
        <div className="flex bg-slate-800 p-1 rounded-xl w-full sm:w-auto">
          <button 
            onClick={() => setActiveTab('products')}
            className={`flex-1 sm:flex-none px-4 py-2 text-sm font-bold rounded-lg transition-colors ${activeTab === 'products' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            📦 ምርት ጨመሪያና ዝርዝር
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`flex-1 sm:flex-none px-4 py-2 text-sm font-bold rounded-lg transition-colors ${activeTab === 'orders' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            🔔 ትዕዛዞች ({orders.length})
          </button>
        </div>
      </div>

      {/* ታብ 1፦ የምርት ማስተዳደሪያ */}
      {activeTab === 'products' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* አዲስ ምርት መጨመሪያ ፎርም */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 h-fit">
[5/16/2026 5:06 AM] Lazaru§ God Has Helped: <h3 className="font-extrabold text-lg text-gray-800 border-b border-gray-100 pb-2 mb-4">➕ አዲስ ምርት መመዝገቢያ</h3>
            <form onSubmit={handleAddProduct} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">የምርት ስም</label>
                <input required type="text" name="name" value={newProduct.name} onChange={handleInputChange} className="w-full p-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none" placeholder="ምሳሌ፡ የቦረና ቀይ አሸዋ" />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">ዋጋ (በብር)</label>
                  <input required type="number" name="price" value={newProduct.price} onChange={handleInputChange} className="w-full p-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none" placeholder="3500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">መመዘኛ (Unit)</label>
                  <select name="unit" value={newProduct.unit} onChange={handleInputChange} className="w-full p-2.5 text-sm border border-gray-300 rounded-xl bg-white focus:outline-none">
                    <option value="በኩቢክ ሜትር">በኩቢክ ሜትር</option>
                    <option value="በኩንታል">በኩንታል</option>
                    <option value="በጭነት">በጭነት</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">ምድብ (Category)</label>
                <select name="category" value={newProduct.category} onChange={handleInputChange} className="w-full p-2.5 text-sm border border-gray-300 rounded-xl bg-white focus:outline-none">
                  <option value="sand">አሸዋ (Sand)</option>
                  <option value="gravel">ጠጠር (Gravel)</option>
                  <option value="cement">ሲሚንቶ (Cement)</option>
                  <option value="stone">ድንጋይ (Stone)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">የምርት ማብራሪያ</label>
                <textarea required name="description" value={newProduct.description} onChange={handleInputChange} rows="3" className="w-full p-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none" placeholder="ስለ ምርቱ ጥራት ዝርዝር መረጃ..."></textarea>
              </div>

              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl transition-colors shadow-sm text-sm">
                💾 ምርቱን በሲስተም ላይ ጫን
              </button>
            </form>
          </div>

          {/* አሁን በሲስተሙ ላይ ያሉ ምርቶች ዝርዝር ማሳያ */}
          <div className="lg:col-span-2 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-extrabold text-lg text-gray-800 border-b border-gray-100 pb-2 mb-4">📦 በአሁኑ ሰዓት ያሉ ምርቶች ({productsList.length})</h3>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {productsList.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-3 border border-gray-100 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-lg bg-gray-200" onError={(e) => { e.target.src = 'https://via.placeholder.com/50'; }} />
                    <div>
                      <h4 className="font-bold text-sm text-gray-800 line-clamp-1">{product.name}</h4>
[5/16/2026 5:06 AM] Lazaru§ God Has Helped: <p className="text-xs text-amber-600 font-extrabold mt-0.5">{product.price.toLocaleString()} ብር / {product.unit}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-1 rounded uppercase tracking-wider">{product.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ታብ 2፦ የትዕዛዞች መከታተያ */}
      {activeTab === 'orders' && (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
          <h3 className="font-extrabold text-lg text-gray-800 border-b border-gray-100 pb-2 mb-4">🔔 የመጡ የደንበኞች ማዘዣዎች</h3>
          
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-200 text-xs font-bold text-gray-500 uppercase bg-gray-50">
                <th className="p-3">የትዕዛዝ ቁጥር</th>
                <th className="p-3">ደንበኛ እና ስልክ</th>
                <th className="p-3">የታዘዘው ዕቃና ብዛት</th>
                <th className="p-3">የማድረሻ ቦታ</th>
                <th className="p-3">ሁኔታ (Status)</th>
                <th className="p-3 text-center">እርምጃ</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/50">
                  <td className="p-3 font-bold text-gray-700">{order.id}</td>
                  <td className="p-3">
                    <div className="font-semibold text-gray-900">{order.customerName}</div>
                    <div className="text-xs text-gray-400">{order.phone}</div>
                  </td>
                  <td className="p-3">
                    <div className="font-medium text-gray-800">{order.item}</div>
                    <div className="text-xs text-amber-600 font-bold">{order.qty} እቃ • {order.totalPrice.toLocaleString()} ብር</div>
                  </td>
                  <td className="p-3">
                    <div className="text-gray-700">{order.address}</div>
                    <div className="text-[10px] text-gray-400 font-semibold">ተሽከርካሪ፦ {order.truck}</div>
                  </td>
                  <td className="p-3">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      order.status === 'በሂደት ላይ' ? 'bg-orange-100 text-orange-700' : 
                      order.status === 'የተጫነ' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button 
                      onClick={() => toggleOrderStatus(order.id)}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-white font-medium py-1 px-2.5 rounded-lg transition-colors"
                    >
                      🔄 ሁኔታ ቀይር
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default AdminDashboard;