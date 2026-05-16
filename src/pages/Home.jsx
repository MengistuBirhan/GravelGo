import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section (ዋናው ባነር) */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white py-20 px-6 md:px-12 shadow-lg">
        {/* የጀርባ ዲዛይን ጌጥ */}
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
        
        <div className="relative max-w-2xl space-y-6 z-10">
          <span className="text-amber-500 font-black tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
            ፈጣን እና ታማኝ የግንባታ እቃዎች አቅራቢ
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            አሸዋ፣ ጠጠር እና ሲሚንቶ ባሉበት ሆነው ይዘዙ!
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            ለቤትዎ ወይም ለትላልቅ ህንፃዎች ግንባታ የሚሆኑ ጥራት ያላቸውን ግብአቶች ያለምንም መንገላታት በሳይትዎ ላይ እናደርሳለን። ትክክለኛ መለኪያ እና ቀልጣፋ ትራንስፖርት።
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              to="/catalog" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-3 px-8 rounded-xl transition-all shadow-md hover:scale-[1.02]"
            >
              ምርቶችን እይ (Explore Catalog)
            </Link>
            <Link 
              to="/login" 
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl border border-slate-700 transition-all"
            >
              አካውንት ክፈት
            </Link>
          </div>
        </div>
      </div>

      {/* የጥራት መግለጫዎች (Features Section) */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">ለምን GravelGo ይመርጣሉ?</h2>
          <p className="text-gray-500 text-sm mt-2">እኛን ልዩ የሚያደርጉን እና ደንበኞቻችን የሚወዱልን ዋና ዋና እሴቶቻችን።</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3 hover:shadow-md transition-shadow">
            <div className="text-3xl bg-amber-50 w-12 h-12 flex items-center justify-center rounded-xl text-amber-600 font-bold">💎</div>
            <h3 className="font-bold text-gray-800 text-lg">የተረጋገጠ ጥራት</h3>
            <p className="text-gray-600 text-sm leading-relaxed">ምንም አይነት አፈር ወይም አላስፈላጊ ቆሻሻ ያልተቀላቀለባቸው፣ ደረጃቸውን የጠበቁ ምርቶች።</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3 hover:shadow-md transition-shadow">
            <div className="text-3xl bg-amber-50 w-12 h-12 flex items-center justify-center rounded-xl text-amber-600 font-bold">⚖️</div>
            <h3 className="font-bold text-gray-800 text-lg">ትክክለኛ መለኪያ</h3>
            <p className="text-gray-600 text-sm leading-relaxed">ያዘዙት የኩቢክ ሜትር ወይም የጭነት መጠን ሳይጎድል ልክ በታዘዘው መሠረት ይደርስዎታል።</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="text-3xl bg-amber-50 w-12 h-12 flex items-center justify-center rounded-xl text-amber-600 font-bold">🚀</div>
            <h3 className="font-bold text-gray-800 text-lg">ፈጣን ማድረስ</h3>
            <p className="text-gray-600 text-sm leading-relaxed">ትዕዛዝዎን እንደጨረሱ በፈጣን ሲኖትራክ ወይም ተሳቢ መኪናዎች ወደ ሳይትዎ እናመጣለን።</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;