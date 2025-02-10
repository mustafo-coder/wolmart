import { LocationSearching } from '@mui/icons-material';
import {
	ChevronDown,
	ChevronRight,
	Clock,
	Clock2Icon,
	List,
	Phone,
	Scale,
	Search,
	ShoppingBag,
	User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<nav>
			<div className='border-b py-3'>
				<div className='container flex justify-between items-center'>
					<p className='text-sm text-slate-400'>
						Welcome to Wolmart store message or remove it!
					</p>
					<div className='flex items-center'>
						<form className='border-e text-sm pe-5 flex gap-4'>
							<select name='currency'>
								<option value='usd'>USD</option>
								<option value='uzs'>UZS</option>
								<option value='rub'>RUB</option>
							</select>
							<select name='lang'>
								<option value='en'>ENG</option>
								<option value='ru'>RUS</option>
								<option value='uz'>UZB</option>
							</select>
						</form>
						<ul className='flex text-gray-500 gap-3 text-sm items-center ps-5'>
							<li>
								<a href=''>Blog</a>
							</li>
							<li>
								<a href=''>Contact Us</a>
							</li>
							<li>
								<a href=''>My Account</a>
							</li>
							<li className='flex ms-2 gap-1 items-center'>
								<User size={18} />
								<a href=''>Sign out</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='py-3'>
				<div className='container flex justify-between items-center'>
					<Link href='/'>
						<Image src={'/logo.png'} alt='logo' width={150} height={80} />
					</Link>
					<form className='relative flex overflow-hidden py-1 w-full h-[40px] max-w-[700px] border rounded-3xl'>
						<select
							name='category'
							className='h-full outline-none text-sm bg-transparent flex-shrink-0 border-e px-3'
						>
							<option value='all'>All Categories</option>
							<option value='accessories'>Accessories</option>
							<option value='smartphones'>Smartphones</option>
						</select>
						<input
							className='w-full outline-none placeholder:text-black text-sm ps-3 pe-12 h-full'
							placeholder='Search in...'
							type='text'
							name='search'
						/>
						<button className='absolute end-3 top-1/2 -translate-y-1/2'>
							<Search />
						</button>
					</form>
					<div className='flex gap-5 items-center'>
						<a
							href={`tel: 0(800)123-456`}
							className='flex pe-5 border-e gap-3 items-center'
						>
							<Phone size={30} />
							<div>
								<span className='text-sm text-gray-600'>Call Us Now:</span>
								<p className='font-bold'>0(800)123-456</p>
							</div>
						</a>
						<Link href={'/'}>
							<Scale size={30} />
						</Link>
						<Link href={'/'}>
							<ShoppingBag size={30} />
						</Link>
					</div>
				</div>
			</div>
			<div className='bg-[#E6EFFD]'>
				<div className='container flex justify-between items-center'>
					<div className='flex gap-10 items-center'>
						<div className='relative nav-dropdown'>
							<button className='flex items-center text-sm font-[500] gap-2 bg-[#1E5CEA] px-4 py-3 rounded text-white'>
								<List size={20} />
								<span className='inline-block me-7'>All Categories</span>
								<ChevronDown size={15} />
							</button>
							<div className='w-full hidden absolute top-full nav-dropdown__modal'>
								<ul className='py-3 text-sm bg-white z-50 shadow w-full'>
									<li className='py-2 px-3 border-b text-gray-500 nav-dropdown relative'>
										<a
											className='flex items-center justify-between gap-2'
											href='#'
										>
											Fashion <ChevronRight size={15} />
										</a>
									</li>
									<li className='py-2 border-b px-3 text-gray-500 nav-dropdown relative'>
										<a
											className='flex items-center justify-between gap-2'
											href='#'
										>
											Home & Garden <ChevronRight size={15} />
										</a>
									</li>
									<li className='py-2 border-b px-3 text-gray-500 nav-dropdown relative'>
										<a
											className='flex items-center justify-between gap-2'
											href='#'
										>
											Electronics <ChevronRight size={15} />
										</a>
									</li>
									<li className='py-2 border-b px-3 text-gray-500 nav-dropdown relative'>
										<a
											className='flex items-center justify-between gap-2'
											href='#'
										>
											Furniture <ChevronRight size={15} />
										</a>
									</li>
									<li className='py-2 border-b px-3 text-gray-500'>
										<a href='#'>Health & Beauty</a>
									</li>
									<li className='py-2 border-b px-3 text-gray-500'>
										<a href='#'>Toy & Games</a>
									</li>
									<li className='py-2 border-b px-3 text-gray-500'>
										<a href='#'>Cooking</a>
									</li>
									<li className='py-2 border-b px-3 text-gray-500'>
										<a href='#'>Smart Phones</a>
									</li>
									<li className='py-2 border-b px-3 text-gray-500'>
										<a href='#'>Accessories</a>
									</li>
									<li className='pt-2 px-3'>
										<a href='#'>View All Categories</a>
									</li>
								</ul>
							</div>
						</div>
						<ul className='flex gap-5 text-sm'>
							<li className='py-5'>Home</li>
							<li className='py-5 relative nav-dropdown'>
								<button className='flex items-end gap-3'>
									Shop <ChevronDown size={15} />
								</button>
								<ul className='absolute hidden nav-dropdown__modal p-5 shadow bg-white top-full w-auto'>
									<li>
										<h3 className='mb-4 uppercase font-semibold'>Shop Pages</h3>
										<ul className='flex text-sm text-gray-500 flex-col gap-3 w-[200px]'>
											<li>
												<a href='#'>Banner With Sidebar</a>
											</li>
											<li>
												<a href='#'>Boxed Banner</a>
											</li>
											<li>
												<a href='#'>Full Width Banner</a>
											</li>
											<li>
												<a href='#'>Horizontal Filter</a>
											</li>
											<li>
												<a href='#'>Off Canvas Sidebar</a>
											</li>
											<li>
												<a href='#'>Infinite Ajax Scroll</a>
											</li>
											<li>
												<a href='#'>Right Sidebar</a>
											</li>
											<li>
												<a href='#'>Full Width Sidebar</a>
											</li>
										</ul>
									</li>
									<li>
										<h3 className='mb-4 uppercase font-semibold'>
											Shop Layouts
										</h3>
										<ul className='flex text-sm text-gray-500 flex-col gap-3 w-[200px]'>
											<li>
												<a href='#'>3 Columns Mode</a>
											</li>
											<li>
												<a href='#'>4 Columns Mode</a>
											</li>
											<li>
												<a href='#'>5 Columns Mode</a>
											</li>
											<li>
												<a href='#'>6 Columns Mode</a>
											</li>
											<li>
												<a href='#'>7 Columns Mode</a>
											</li>
											<li>
												<a href='#'>8 Columns Mode</a>
											</li>
											<li>
												<a href='#'>List Mode</a>
											</li>
											<li>
												<a href='#'>List Mode With Sidebar</a>
											</li>
										</ul>
									</li>
									<li>
										<h3 className='mb-4 uppercase font-semibold'>
											Product Pages
										</h3>
										<ul className='flex text-sm text-gray-500 flex-col gap-3 w-[200px]'>
											<li>
												<a href='#'>Variable Product</a>
											</li>
											<li>
												<a href='#'>Featured & Sale</a>
											</li>
											<li>
												<a href='#'>Data In Accordion</a>
											</li>
											<li>
												<a href='#'>Data In Sections</a>
											</li>
											<li>
												<a href='#'>Image Swatch</a>
											</li>
											<li>
												<a href='#'>Extended Info</a>
											</li>
											<li>
												<a href='#'>Without Sidebar</a>
											</li>
											<li>
												<a href='#'>360o & Video</a>
											</li>
										</ul>
									</li>
									<li>
										<h3 className='mb-4 uppercase font-semibold'>
											Product Layouts
										</h3>
										<ul className='flex text-sm text-gray-500 flex-col gap-3 w-[200px]'>
											<li>
												<a href='#'>Default</a>
											</li>
											<li>
												<a href='#'>Vertical Thumbs</a>
											</li>
											<li>
												<a href='#'>Grid Images</a>
											</li>
											<li>
												<a href='#'>Masonry</a>
											</li>
											<li>
												<a href='#'>Gallery</a>
											</li>
											<li>
												<a href='#'>Sticky Info</a>
											</li>
											<li>
												<a href='#'>Sticky Thumbs</a>
											</li>
											<li>
												<a href='#'>Sticky Both</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className='py-5 nav-dropdown relative'>
								<button className='flex items-end gap-3'>
									Vender <ChevronDown size={15} />
								</button>
								<ul className='absolute hidden flex-wrap w-[450px] gap-y-5 nav-dropdown__modal p-5 shadow bg-white top-full'>
									<li>
										<h3 className='mb-4 uppercase font-semibold'>Dokan</h3>
										<ul className='flex text-sm text-gray-500 flex-col gap-3 w-[200px]'>
											<li>
												<a href='#'>Store List</a>
											</li>
											<li>
												<a href='#'>Store</a>
											</li>
											<li>
												<a href='#'>Dashboard</a>
											</li>
										</ul>
									</li>
									<li>
										<h3 className='mb-4 uppercase font-semibold'>
											WC Marketplace
										</h3>
										<ul className='flex text-sm text-gray-500 flex-col gap-3 w-[200px]'>
											<li>
												<a href='#'>Store List</a>
											</li>
											<li>
												<a href='#'>Store</a>
											</li>
											<li>
												<a href='#'>Dashboard</a>
											</li>
										</ul>
									</li>
									<li>
										<h3 className='mb-4 uppercase font-semibold'>WCFM</h3>
										<ul className='flex text-sm text-gray-500 flex-col gap-3 w-[200px]'>
											<li>
												<a href='#'>Store List</a>
											</li>
											<li>
												<a href='#'>Store</a>
											</li>
											<li>
												<a href='#'>Dashboard</a>
											</li>
										</ul>
									</li>
									<li>
										<h3 className='mb-4 uppercase font-semibold'>WC Vendors</h3>
										<ul className='flex text-sm text-gray-500 flex-col gap-3 w-[200px]'>
											<li>
												<a href='#'>Store List</a>
											</li>
											<li>
												<a href='#'>Store</a>
											</li>
											<li>
												<a href='#'>Dashboard</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className='py-5'>Blog</li>
							<li className='py-5 relative nav-dropdown'>
								<button className='flex items-end gap-3'>
									Pages <ChevronDown size={15} />
								</button>
								<ul className='absolute hidden gap-4 flex-col w-[200px] nav-dropdown__modal p-5 shadow bg-white top-full text-gray-500  text-sm'>
									<li>About Us</li>
									<li>Contact Us</li>
									<li>Become a Vendor</li>
									<li>FAQs</li>
									<li>Error 404</li>
									<li>Coming Soon</li>
								</ul>
							</li>
							<li className='py-5'>Elements</li>
						</ul>
					</div>
					<div className='flex gap-7 items-center'>
						<Link className='flex items-center gap-2' href={'/'}>
							<span className='inline-flex justify-center items-center w-12 h-12 bg-white rounded-full'>
								<LocationSearching />
							</span>
							Track Order
						</Link>
						<Link className='flex items-center gap-2' href={'/'}>
							<span className='inline-flex justify-center items-center w-12 h-12 bg-white rounded-full'>
								<Clock2Icon />
							</span>
							<span>Recently Viewed</span>
							<ChevronDown size={15} />
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
