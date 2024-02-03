import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterLIst";
import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";





const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div
          className="flex flex-col 
            md:flex-row
            justify-between
            pt-16 pb-8"
        >
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href={"#"}>Men</Link>
            <Link href={"#"}>Women</Link>
            <Link href={"#"}>Electronics</Link>
            <Link href={"#"}>Kids</Link>
            <Link href={"#"}>Accessories</Link>
            <Link href={"#"}>Home Decor</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Shipping Policy</Link>
            <Link href={"#"}>Returns & Exchanges</Link>
            <Link href={"#"}>Watches</Link>
            <Link href={"#"}>FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              At our store , we are dedicated to providing the latest and
              greatest fashion products and accessories to out customers. With a
              wide selection of dresses,clothes,bags and other accessories.
            </p>
            <p className="mb-2">
              <FaRegCopyright className="m-0 p-0"></FaRegCopyright> {new Date().getFullYear()} Bezzelo. All rights reserved
            </p>
          </div>
          <FooterList>
          <h3 className="text-base font-bold mb-2">About Us</h3>
          <div className="flex gap-2
          ">
          <Link href={"#"}><FaFacebook /></Link>
          <Link href={"#"}><AiFillTwitterCircle /></Link>
          <Link href={"#"}><IoLogoYoutube /></Link>
          <Link href={"#"}><FaInstagram /></Link>
          </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
