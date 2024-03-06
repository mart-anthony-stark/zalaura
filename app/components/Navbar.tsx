import { AiOutlineUser } from "react-icons/ai";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Logo from "./Logo";
const links = [
  'women', 'men', 'luxury', 'sports','kids','beauty', 'home & lifestyle'
]
const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 left-0 right-0 z-50 border-b-2 p-4">
      <div className="flex items-center justify-between">
        <Logo />
        <SearchBar />
        <div className="flex items-center gap-2">
          <AiOutlineUser size={25} />
          <div className="flex gap-1">
            <Link className="hover:underline" href="/login">
              Login
            </Link>
            |
            <Link className="hover:underline" href="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex gap-8 mt-3">
        {links.map(link => <Link key={link} href={`/products?category=${link}`} className="uppercase">{link}</Link>)}
      </div>
      
    </div>
  );
};

export default Navbar;
