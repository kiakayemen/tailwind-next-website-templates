import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'
import Menu from './components/Menu'

export default function LoopStudios() {
	return (
		<>
			<Head>
				<title>Loop Studios project</title>
			</Head>
			{/* Hero Section */}
			<section id={styles.hero}>
				{/* hero container */}
				<div className="container max-w-6xl mx-auto px-6 py-12">
					{/* header (menu and nav and logo) */}
					<Menu />
					<div className="max-w-lg mt-32 mb-32 p-4 font-sans font-thin text-4xl text-white uppercase border-2 md:p-10 md:mx-0 md:text-6xl">
						impressive experiences that deliver
					</div>
				</div>
			</section>
			{/* feature container */}
			<section id="feature">
				<div className='relative container flex flex-col items-center max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0'>
					{/* image */}
					<Image alt='interactive image' src="/images/loop-studios/desktop/image-interactive.jpg" width={731} height={500} priority />
					{/* text container */}
					<div className="font-sans top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
						<h2 className='max-w-lg mt-10 mb-6 font-sans text-4xl text-gray-900 uppercase text-center md:text-5xl md:mt-0 md:text-left'>
							the leader in interactive vr
						</h2>
						<p className='text-[16px] max-w-md text-center mx-auto md:mx-0 font-light md:text-left'>
							Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
						</p>
					</div>
				</div>
			</section>
			{/* creations section */}
			<section id="creations">
				{/* creations container */}
				<div className='container max-w-6xl my-32 mx-auto'>
					{/* creations header */}
					<div className='py-20 flex
					 flex-row md:justify-around justify-center items-center'>
						<h2 className='font-sans text-4xl md:text-5xl text-center uppercase'>
							our creations
						</h2>
						<button className={`hidden md:block ${styles.btn}`}>
							See All
						</button>
					</div>
					{/* items container */}
					<div className="item-container">
						{/* item 1 */}
						<div className='item group'>
							{/* desktop image */}
							<Image
								className='md:block hidden group relative overflow-hidden duration-200 group-hover:scale-110 w-full'
								src='/images/loop-studios/desktop/image-deep-earth.jpg'
								width={256}
								height={450}
								alt=''
							/>
							{/* Mobile image */}
							<Image
								className='md:hidden w-full'
								src='/images/loop-studios/mobile/image-deep-earth.jpg'
								width={654}
								height={240}
								alt=''
							/>
							{/* Item gradient */}
							<div className='item-gradient'></div>
							{/* item text */}
							<h5>Deep Earth</h5>
						</div>
						{/* item 1 */}
						<div className='item group'>
							{/* desktop image */}
							<Image
								className='md:block hidden group relative overflow-hidden duration-200 group-hover:scale-110 w-full'
								src='/images/loop-studios/desktop/image-night-arcade.jpg'
								width={256}
								height={450}
								alt=''
							/>
							{/* Mobile image */}
							<Image
								className='md:hidden w-full'
								src='/images/loop-studios/mobile/image-night-arcade.jpg'
								width={654}
								height={240}
								alt=''
							/>
							{/* Item gradient */}
							<div className='item-gradient'></div>
							{/* item text */}
							<h5>night arcade</h5>
						</div>
						{/* item 1 */}
						<div className='item group'>
							{/* desktop image */}
							<Image
								className='md:block hidden group relative overflow-hidden duration-200 group-hover:scale-110 w-full'
								src='/images/loop-studios/desktop/image-soccer-team.jpg'
								width={256}
								height={450}
								alt=''
							/>
							{/* Mobile image */}
							<Image
								className='md:hidden w-full'
								src='/images/loop-studios/mobile/image-soccer-team.jpg'
								width={654}
								height={240}
								alt=''
							/>
							{/* Item gradient */}
							<div className='item-gradient'></div>
							{/* item text */}
							<h5>soccer team vr</h5>
						</div>
						{/* item 1 */}
						<div className='item group'>
							{/* desktop image */}
							<Image
								className='md:block hidden group relative overflow-hidden duration-200 group-hover:scale-110 w-full'
								src='/images/loop-studios/desktop/image-grid.jpg'
								width={256}
								height={450}
								alt=''
							/>
							{/* Mobile image */}
							<Image
								className='md:hidden w-full'
								src='/images/loop-studios/mobile/image-grid.jpg'
								width={654}
								height={240}
								alt=''
							/>
							{/* Item gradient */}
							<div className='item-gradient'></div>
							{/* item text */}
							<h5>the grid</h5>
						</div>
					</div>
					<div className=" mt-10 item-container">
						{/* item 1 */}
						<div className='item group'>
							{/* desktop image */}
							<Image
								className='md:block hidden group relative overflow-hidden duration-200 group-hover:scale-110 w-full'
								src='/images/loop-studios/desktop/image-from-above.jpg'
								width={256}
								height={450}
								alt=''
							/>
							{/* Mobile image */}
							<Image
								className='md:hidden w-full'
								src='/images/loop-studios/mobile/image-from-above.jpg'
								width={654}
								height={240}
								alt=''
							/>
							{/* Item gradient */}
							<div className='item-gradient'></div>
							{/* item text */}
							<h5>from up above vr</h5>
						</div>
						{/* item 1 */}
						<div className='item group'>
							{/* desktop image */}
							<Image
								className='md:block hidden group relative overflow-hidden duration-200 group-hover:scale-110 w-full'
								src='/images/loop-studios/desktop/image-pocket-borealis.jpg'
								width={256}
								height={450}
								alt=''
							/>
							{/* Mobile image */}
							<Image
								className='md:hidden w-full'
								src='/images/loop-studios/mobile/image-pocket-borealis.jpg'
								width={654}
								height={240}
								alt=''
							/>
							{/* Item gradient */}
							<div className='item-gradient'></div>
							{/* item text */}
							<h5>pocket borealis</h5>
						</div>
						{/* item 1 */}
						<div className='item group'>
							{/* desktop image */}
							<Image
								className='md:block hidden group relative overflow-hidden duration-200 group-hover:scale-110 w-full'
								src='/images/loop-studios/desktop/image-curiosity.jpg'
								width={256}
								height={450}
								alt=''
							/>
							{/* Mobile image */}
							<Image
								className='md:hidden w-full'
								src='/images/loop-studios/mobile/image-curiosity.jpg'
								width={654}
								height={240}
								alt=''
							/>
							{/* Item gradient */}
							<div className='item-gradient'></div>
							{/* item text */}
							<h5>the curiosity</h5>
						</div>
						{/* item 1 */}
						<div className='item group'>
							{/* desktop image */}
							<Image
								className='md:block hidden group relative overflow-hidden duration-200 group-hover:scale-110 w-full'
								src='/images/loop-studios/desktop/image-fisheye.jpg'
								width={256}
								height={450}
								alt=''
							/>
							{/* Mobile image */}
							<Image
								className='md:hidden w-full'
								src='/images/loop-studios/mobile/image-fisheye.jpg'
								width={654}
								height={240}
								alt=''
							/>
							{/* Item gradient */}
							<div className='item-gradient'></div>
							{/* item text */}
							<h5>make it fisheye</h5>
						</div>
					</div>
					{/* bottom btn container */}
					<div className="flex justify-center mt-10 md:hidden ">
						<button className={`${styles.btn} w-full md:hidden`}>see all</button>
					</div>
				</div>
			</section>
			{/* footer */}
			<div className='bg-black pb-10 px-4 flex justify-center text-white'>
				<footer className='py-10 w-full max-w-6xl flex flex-col md:flex-row justify-between items-center'>
				<nav className="flex flex-col md:items-start justify-between text-white">
					<Link href="/">
						<Image className='mb-5' width={192} height={32} src="./images/loop-studios/logo.svg" alt='logo' />
					</Link>
					{/* menu */}
					<div className='text-base flex flex-col space-y-4 items-center justify-center md:flex-row md:space-y-0 md:gap-x-6'>
						<div className="group h-10">
							<Link href="#">About</Link>
							<div className="mx-2 hidden group-hover:block border-b border-blue-50 duration-300"></div>
						</div>

						<div className="group h-10">
							<Link href="#">Careers</Link>
							<div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
						</div>

						<div className="group h-10">
							<Link href="#">Events</Link>
							<div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
						</div>

						<div className="group h-10">
							<Link href="#">Products</Link>
							<div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
						</div>

						<div className="group h-10">
							<Link href="#">Support</Link>
							<div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
						</div>
					</div>
				</nav>
				<div className='flex flex-col md:justify-between items-center'>
					<div className='flex mt-6 md:mt-0 mb-3 flex-row justify-center items-start space-x-4'>
						<div className=' group h-10'>
							<Link className='' href="#">
								<Image className='h-6' alt='' height={24} width={24} src='/images/loop-studios/icon-facebook.svg' />
							</Link>
						</div>
						<div className='group h-10'>
							<Link href="#">
								<Image className='h-6' alt='' height={24} width={24} src='/images/loop-studios/icon-instagram.svg' />
							</Link>
						</div>
						<div className='group h-10'>
							<Link href="#">
								<Image className='h-6' alt='' height={24} width={24} src='/images/loop-studios/icon-twitter.svg' />
							</Link>
						</div>
						<div className='group h-10'>
							<Link href="#">
								<Image className='h-6' alt='' height={24} width={24} src='/images/loop-studios/icon-pinterest.svg' />
							</Link>
						</div>
					</div>
					<p className='mb-3 text-gray-500 tracking-tight'>© 2022 Loopstudios. All Rights Reserved</p>
				</div>
			</footer>
			</div>
		</>
	)
}
