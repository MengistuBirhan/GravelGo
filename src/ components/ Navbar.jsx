import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">የድንጋይ ወፍጮ ሲስተም</Link>
        <div className="space-x-4 font-medium">
          <Link to="/" className="hover:text-blue-200 transition">መነሻ</Link>
          <Link to="/catalog" className="hover:text-blue-200 transition">ምርቶች</Link>
          <Link to="/order" className="hover:text-blue-200 transition">ትዕዛዝ ይስጡ</Link>
          <Link to="/admin" className="hover:text-blue-200 transition">አስተዳዳሪ</Link>
          <Link to="/login" className="hover:text-blue-200 transition">ግባ</Link>
        </div>
      </div>
    </nav>
  );
}