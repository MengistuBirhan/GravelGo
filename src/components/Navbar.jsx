import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // በካርት ውስጥ ያሉ አጠቃላይ የእቃዎችን ብዛት መቁጠሪያ
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* የሎጎ ክፍል */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-wider text-amber-600">GRAVEL<span className="text-slate-800">GO</span></span>
        </Link>

        {/* የመሄጃ ሊንኮች */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/catalog" className="text-sm font-bold text-gray-600 hover:text-amber-600 transition-colors">
            ማውጫ (Catalog)
          </Link>

          {/* ተጠቃሚው አድሚን ከሆነ ብቻ የሚታይ ሊንክ */}
          {user && user.role === 'admin' && (
            <Link to="/admin" className="text-sm font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 hover:bg-amber-100 transition-all">
              ቁጥጥር (Admin)
            </Link>
          )}

          {/* የካርት ቁልፍ ከነቁጥሩ */}
          <Link to="/cart" className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors">
            <span className="text-xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>

          {/* የፕሮፋይል / ሎግይን ሁኔታ መቆጣጠሪያ */}
          {user ? (
            <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
              <span className="hidden sm:inline text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded truncate max-w-[120px]">
                {user.email}
              </span>
              <button 
                onClick={handleLogout}
                className="text-xs bg-red-50 hover:bg-red-100 text-red-600 font-bold py-1.5 px-3 rounded-lg transition-colors"
              >
                ውጣ (Logout)
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="text-xs bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-xl transition-all shadow-sm"
            >
              ግባ (Login)
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;