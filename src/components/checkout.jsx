import React from 'react';
import { ChevronRight } from 'lucide-react';
const BillingPage = () => {

  const items = [
    { label: 'Shopping Cart', href: '/cart' },
    { label: 'Checkout', href: '/', active: true },
    { label: 'Order Complete', href: '/complete' }
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-8">

<nav aria-label="Breadcrumb" className="flex justify-center px-4 py-3 mt-10">
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center">
              <a
                href={item.href}
                className={`text-2xl font-bold ${
                  item.active 
                    ? 'text-blue-600 hover:text-blue-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {item.label}
              </a>
              {index < items.length - 1 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
            </li>
          ))}
        </ol>
      </nav>

      <div className='flex gap-2 mt-10 mb-12'>
        <p className='font-semibold text-gray-500'>Have a coupon?</p>
        <a href='/checkout#' className='hover:underline font-bold'>ENTER YOUR CODE</a>
      </div>

      <div className=" flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-6">BILLING DETAILS</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-500 font-semibold text-sm mb-1">First name *</label>
                <input type="text" className="w-full border p-2" />
              </div>
              <div className="flex-1">
                <label className="block text-gray-500 font-semibold text-sm mb-1">Last name *</label>
                <input type="text" className="w-full border p-2" />
              </div>
            </div>

            <div>
              <label className="block text-gray-500 font-semibold text-sm mb-1">Company name (optional)</label>
              <input type="text" className="w-full border p-2" />
            </div>

            <div>
              <label className="block text-gray-500 font-semibold text-sm mb-1">Country / Region *</label>
              <select className="w-full border p-2">
                <option>United States (US)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-500 font-semibold text-sm mb-1">Street address *</label>
              <input 
                type="text" 
                placeholder="House number and street name"
                className="w-full border p-2 mb-2" 
              />
              <input 
                type="text" 
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="w-full border p-2" 
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-500 font-semibold text-sm mb-1">Town / City *</label>
                <input type="text" className="w-full border p-2" />
              </div>
              <div className="flex-1">
                <label className="block text-gray-500 font-semibold text-sm mb-1">State *</label>
                <select className="w-full border p-2">
                  <option className=''>California</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-500 font-semibold text-sm mb-1">ZIP Code *</label>
                <input type="text" className="w-full border p-2" />
              </div>
              <div className="flex-1">
                <label className="block text-gray-500 font-semibold text-sm mb-1">Phone *</label>
                <input type="tel" className="w-full border p-2" />
              </div>
            </div>

            <div>
              <label className="block text-gray-500 font-semibold text-sm mb-1">Email address *</label>
              <input 
                type="email" 
                defaultValue="ogbkiy@gmail.com"
                className="w-full border p-2" 
              />
            </div>

            <div className="flex  items-center gap-2">
              <input type="checkbox" id="different-address" />
              <label className='text-gray-500 font-semibold' htmlFor="different-address">Ship to a different address?</label>
            </div>

            <div>
              <label className="block text-gray-500 font-semibold text-sm mb-1">Order notes (optional)</label>
              <textarea 
                placeholder="Notes about your order, e.g. special notes for delivery."
                className="w-full border p-2 h-32"
              />
            </div>
          </form>
        </div>

        <div className="md:w-[550px] ">
          <div className="bg-white p-6 border rounded-sm">
            <h2 className="text-xl font-bold mb-4">YOUR ORDER</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Product</h3>
                <div className='w-[340px] mb-4 h-[1px] bg-slate-300'></div>
                <div className="flex text-gray-600 justify-between mb-2">
                  <span className=' font-medium'>Apple Smartwatch × 1</span>
                  <span className='font-medium'>$60.00</span>
                </div>
                <div className="text-sm flex gap-4 py-4 mb-4 items-center">
                  <div className='font-bold text-gray-600 text-lg'>Vendor:</div>
                  <div className='flex text-gray-600 items-baseline'>wolmart28 vendor1</div>
                </div>

                <div className="flex text-gray-600 py-4 justify-between mb-2">
                  <span className='font-medium'>Bluetooth Earphone × 1</span>
                  <span className='font-medium'>$65.00</span>
                </div>
                <div className="text-sm flex gap-4 mb-4 items-center">
                  <div className='font-bold text-gray-600 text-lg'>Vendor:</div>
                  <div className='flex text-gray-600 items-baseline'>wolmart28 vendor5</div>
                </div>
              </div>

                <div className="flex  justify-between pb-9">
                  <div className='flex items-center text-xl font-bold '>Subtotal</div>
                  <div className='flex items-baseline'>$125.00</div>
                </div>

              <div className="font-medium justify-start mr-3 text-gray-600">
                Enter your address to view shipping options.
              </div>
              <div className='text-[15px] text-gray-600' >Apple Smartwatch ~1</div>

              <div className="font-medium justify-start mr-3 text-gray-600">
                Enter your address to view shipping options.
              </div>
              <div className='text-[15px] text-gray-600' >Apple Smartwatch ~1</div>

              <div className=" pt-4">
                <div className="flex border-y p-4 justify-between font-medium">
                  <span>Total</span>
                  <span>$125.00</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                Add <span className='text-blue-500 font-semibold'>$2,875.00</span> to cart and get free shipping!
                <div className="w-full bg-blue-200 h-2 rounded-full mt-2">
                  <div className="w-1/12 bg-blue-500 h-2 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Payment Methods</h3>
                
                <div className="">
                  <label className="flex mb-3 text-gray-600 items-center gap-2">
                    <input type="radio" name="payment" defaultChecked />
                    <span>Direct bank transfer</span>
                  </label>
                  <p className="text-sm mb-3 text-gray-600 ml-6">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>

                  <label className="flex mb-3 items-center gap-2">
                    <input type="radio" name="payment" />
                    <span>Check payments</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="radio" name="payment" />
                    <span>Cash on delivery</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;