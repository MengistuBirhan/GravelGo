import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // ገጹ በራሱ ሪፍሬሽ እንዳይሆን ይከለክላል
    
    if (!email || !password) {
      alert('እባክዎ ኢሜይል እና ፓስወርድ ያስገቡ!');
      return;
    }

    const success = login(email, password);
    
    if (success) {
      alert('በተሳካ ሁኔታ ገብተዋል!');
      // ተጠቃሚው አድሚን ከሆነ በቀጥታ ወደ አድሚን ዳሽቦርድ ይወስደዋል
      if (email === 'admin@test.com') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      alert('የገቡት መረጃ ትክክል አይደለም!');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-gray-900">እንኳን ደህና መጡ</h2>
        <p className="text-gray-500 text-xs mt-1">መለያዎን በመጠቀም ይግቡ</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* የኢሜይል ማድረጊያ */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-600">ኢሜይል (Email)</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm" 
            placeholder="example@mail.com"
            required
          />
        </div>

        {/* የፓስወርድ ማድረጊያ */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-600">የይለፍ ቃል (Password)</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm" 
            placeholder="••••••••"
            required
          />
        </div>

        {/* መግቢያ ቁልፍ */}
        <button 
          type="submit" 
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl transition-colors shadow-sm text-sm mt-2"
        >
          ግባ (Login)
        </button>
      </form>

      {/* የሙከራ መረጃ ፍንጭ */}
      <div className="mt-6 p-3 bg-amber-50 border border-amber-100 rounded-xl text-center">
        <p className="text-[11px] text-amber-800 font-medium">
          💡 በአድሚን ለመሞከር፡ <span className="font-bold">admin@test.com</span> ይጠቀሙ (ፓስወርድ ዝም ብለው ይጻፉ)።
        </p>
      </div>
    </div>
  );
};

export default Login;