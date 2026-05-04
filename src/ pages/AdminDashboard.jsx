export default function AdminDashboard() {
  const orders = [
    { id: 1, customer: "አበበ ከበደ", product: "ዜሮ ጠጠር", qty: 10, status: "Pending" },
    { id: 2, customer: "አለሙ አየለ", product: "አንድ ቁጥር ጠጠር", qty: 5, status: "Delivered" },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">የአስተዳዳሪ ገጽ (Dashboard)</h2>
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-bold mb-4">የገቡ ትዕዛዞች</h3>
        <table className="min-w-full table-auto text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">የትዕዛዝ ቁጥር</th>
              <th className="p-3">ደንበኛ</th>
              <th className="p-3">ምርት</th>
              <th className="p-3">ብዛት</th>
              <th className="p-3">ሁኔታ</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b">
                <td className="p-3 font-medium">{o.id}</td>
                <td className="p-3">{o.customer}</td>
                <td className="p-3">{o.product}</td>
                <td className="p-3">{o.qty}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-sm ${o.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}