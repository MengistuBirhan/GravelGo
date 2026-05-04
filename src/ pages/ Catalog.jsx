export default function Catalog() {
  const products = [
    { id: 1, name: "ዜሮ ጠጠር", price: "500 ብር / ሜትር ኪዩብ", desc: "ለኮንክሪት ስራዎች የሚሆን እጅግ ጥራት ያለው ዜሮ ጠጠር።" },
    { id: 2, name: "አንድ ቁጥር ጠጠር", price: "450 ብር / ሜትር ኪዩብ", desc: "ለመንገድ እና ሌሎች መሰረታዊ የግንባታ ስራዎች የሚሆን።" },
    { id: 3, name: "የተፈጨ ድንጋይ", price: "400 ብር / ሜትር ኪዩብ", desc: "ለግንባታ የሚያገለግል በጥራት የተፈጨ ድንጋይ።" },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">የምርት አይነቶች</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{p.name}</h3>
            <p className="text-blue-600 font-semibold mb-4 text-lg">{p.price}</p>
            <p className="text-gray-600 mb-6">{p.desc}</p>
            <a href="/order" className="text-blue-500 font-medium hover:underline">ትዕዛዝ ይስጡ &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
}