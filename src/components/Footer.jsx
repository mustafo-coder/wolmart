import { Appstore, Discover, Logo, Mastercard, Play, Visa } from "@/images";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  What is Flashmart?
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Requirements
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Jobs & Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Payment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Purchase Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Checkout
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Our Mission</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Money-back guarantee!
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Products Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 lg:mb-0">
            <Image
              src={Logo}
              alt="Wolmart Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-600 mb-4">
              Ac tincidunt vitae semper quis lectus tlamno quam lacus
              suspendisse fau cibus inte dums uere lorem ipsume velit dignis
            </p>
            <div className="flex gap-2">
              <Link href="#">
                <Image src={Appstore} width={100} height={50} alt="app" />
              </Link>
              <Link href="#">
                <Image src={Play} width={100} height={50} alt="play" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Service Center</h3>
            <p className="text-gray-600 mb-2">
              02 Birch Coppice Business Park, Morson,
            </p>
            <p className="text-gray-600 mb-4">Tamworth, B78 1SE</p>
            <p className="text-gray-600">Tel: 0(800)123-456</p>
            <p className="text-gray-600 mb-4">E-mail: support@wolmart.com</p>
            <Link href="#" className="text-gray-600 hover:underline">
              View On Map
            </Link>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">
              Shipping center
            </h3>
            <p className="text-gray-600 mb-4">
              Tel: 0(800)123-456 / Hotline: 0(800)456-789
            </p>
            <p className="text-gray-600">E-mail: contact@wolmart.com</p>
            <Link href="#" className="text-gray-600 hover:underline">
              View On Map
            </Link>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">
              Sign Up For Newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              Be the First to Know. Sign up to newsletter today
            </p>
            <div className="flex border rounded-full overflow-hidden">
              <input
                type="text"
                className="flex-grow p-2 outline-none"
                placeholder="Your E-mail Address"
              />
              <button className="bg-blue-500 text-white px-4 rounded-full">
                {">"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            Copyright © 2025 Wolmart Store. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Image src={Mastercard} alt="Mastercard" width={161} height={67} />
          </div>
        </div>
      </div>
    </footer>
  );
}
