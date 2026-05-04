import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
        ለኮንስትራክሽን ባለሙያዎች ጥራት ያላቸው የድንጋይ ውጤቶች
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
        ዜሮ ጠጠር፣ አንድ ቁጥር ጠጠር እና ሌሎች ጥሬ እቃዎችን ባሉበት ቦታ በፍጥነት በራሳችን መኪና እናደርሳለን።
      </p>
      <div className="space-x-4">
        <Link to="/catalog" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
          ምርቶችን ይመልከቱ
        </Link>
        <Link to="/order" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">
          አሁን ያዙ
        </Link>
      </div>
    </div>
  );
}