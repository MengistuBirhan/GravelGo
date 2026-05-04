import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('የይለፍ ቃል እና ኢሜይል ተረጋግጧል');
  };

  return (
    <div className="container mx-auto max-w-sm px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">መግቢያ</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-2">ኢሜይል</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2.5 rounded-md" required />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">የይለፍ ቃል</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2.5 rounded-md" required />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-3.5 rounded-md font-semibold hover:bg-blue-700 transition">
          ይግቡ
        </button>
      </form>
    </div>
  );
}