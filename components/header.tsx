import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex justify-between">
      <Link href="#">
        <Image
          src="/public/images/findmycv_logo.png"
          height={144}
          width={144}
          alt="Find My CV"
        />
      </Link>
    </nav>
  );
};

export default Header;
