import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/images/Logo.png" width={50} height={50}/>
            </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/ninja"><a>Ninja List</a></Link>
        </nav>
     );
}
 
export default Navbar;