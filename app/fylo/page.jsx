"use client"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

import { useState, useEffect } from "react"


const FyloPage = () => {


	const [darkMode, setDarkMode] = useState(false)


	// useEffect(() => {
	// 	window.localStorage.setItem('darkMode', darkMode);
	// }, [darkMode]);

	// const handleDarkMode = () => {
	// 	setDarkMode(!darkMode);
	// 	window.localStorage.getItem('darkMode', darkMode);
	// }

	useEffect(() => {
		const savedDarkMode = JSON.parse(window.localStorage.getItem('darkMode'));
		if (savedDarkMode !== null) {
			setDarkMode(savedDarkMode);
		}
	}, []);

	const handleDarkMode = () => {
		const newDarkMode = !darkMode;
		setDarkMode(newDarkMode);
		window.localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
	}

	useEffect(() => { console.table(darkMode, window.localStorage.darkMode) }, [darkMode])

	return (<>
		<Head>
			<title>Fylo</title>
		</Head>
		<div className={`${darkMode? 'dark'  : ""}`}>
			<div className=" dark:bg-darkBlue dark:text-white">

				{/* header */}
				<header className="dark:bg-darkBlue bg-white  md:sticky top-0 shadow-lg container mx-auto py-8 md:py-14 mb-4 z-[999] px-6 text-center md:h-20">
					<nav className="flex flex-col md:flex-row justify-center items-center">
						{/* logo */}
						<Link href="/">
						<div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10">
						</div>
						</Link>
						{/* menu */}
						<div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
							<div className="group">
								<Link className="group-hover:text-accentCyan" href="#features">Features</Link>
							</div>
							<div className="group">
								<Link className="group-hover:text-accentCyan" href="#testimonials">Testimonials</Link>
							</div>

							{/* light/dark button */}
							<button onClick={handleDarkMode} id="theme-toggle" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:
							ring-gray-700 rounded-lg text-sm p-2.5">
								{/* <!-- Dark SVG Icon --> */}
								<svg
									id="theme-toggle-dark-icon"
									className={`w-5 h-5 ${darkMode === false ? "" : "hidden"}`}
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
									></path>
								</svg>
								{/* <!-- Light SVG Icon --> */}
								<svg
									id="theme-toggle-light-icon"
									className={`w-5 h-5 ${darkMode ? "" : "hidden"}`}
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
										fillRule="evenodd"
										clipRule="evenodd"
									></path>
								</svg>

							</button>
						</div>
					</nav>
				</header>

				{/* Hero Section */}
				<section className="dark:bg-curvy-dark-mode bg-curvy-light-mode bg-contain bg-bottom bg-no-repeat">
					<div className="px-6 container mx-auto text-center flex flex-col justify-center items-center md:pt-20 pb-52 ">
						<Image className="mx-auto" src="/images/fylo/illustration-intro.png" width={720} height={534} alt="" />
						<h1 className="text-3xl md:text-4xl my-10 font-bold">All your files in one secure location, assessible anywhere.
						</h1>
						<p className="text-md md:text-xl">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
						</p>
						<button className="bg-accentCyan rounded-full text-lg py-3 px-14 mt-10 capitalize text-black font-[300]
						hover:scale-95">get started</button>
					</div>
				</section>

				{/* Featues Section */}
				<section className="pt-12 bg-gray-50 dark:bg-darkBlue1">

					{/* Features container */}
					<div id="features" className="conainer mx-auto px-6 pb-32">
						{/* first row */}
						<div className="flex my-20 flex-col mx-20 space-y-24 md:space-x-10 text-center md:flex-row md:space-y-0">
							{/* item 1 */}
							<div className="flex flex-col items-center justify-evenly space-y-2 md:w-1/2">
								<div className="mb-10">
									<Image src="/images/fylo/icon-access-anywhere.svg" height={78} width={83} alt="" /></div>
								<h3 className="text-2xl font-bold">Access your file from anywhere
								</h3>
								<p className="text-lg">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
								</p>
							</div>
							{/* item 2 */}
							<div className="flex flex-col items-center justify-evenly space-y-2 md:w-1/2">
								<div className="mb-10">
									<Image src="/images/fylo/icon-security.svg" height={78} width={83} alt="" /></div>
								<h3 className="text-2xl font-bold">Security you can trust
								</h3>
								<p className="text-lg">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
								</p>
							</div>
						</div>
						{/* second row */}
						<div className="flex my-20 flex-col mx-20 space-y-24 md:space-x-10 text-center md:flex-row md:space-y-0">
							{/* item 3 */}
							<div className="flex flex-col items-center justify-evenly space-y-2 md:w-1/2">
								<div className="mb-10">
									<Image src="/images/fylo/icon-collaboration.svg" height={78} width={83} alt="" /></div>
								<h3 className="text-2xl font-bold">Access your file from anywhere
								</h3>
								<p className="text-lg">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
								</p>
							</div>
							{/* item 4 */}
							<div className="flex flex-col items-center justify-evenly space-y-2 md:w-1/2">
								<div className="mb-10">
									<Image src="/images/fylo/icon-any-file.svg" height={78} width={83} alt="" /></div>
								<h3 className="text-2xl font-bold">Security you can trust
								</h3>
								<p className="text-lg">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Produtive Section */}

				<section id="productive" className="bg-white dark:bg-darkBlue">
					{/* <!-- Productive Container --> */}
					<div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
						{/* <!-- Image --> */}
						<div className="md:w-1/2">
							<Image
								width={615}
								height={465}
								src="/images/fylo/illustration-stay-productive.png" alt="" className="mb-10" />
						</div>
						{/* <!-- Content --> */}
						<div className="flex flex-col items-start md:w-1/2">
							<div className="flex flex-col space-y-5">
								<h4 className="max-w-md text-xl font-bold md:text-4xl">
									Stay productive, wherever you are
								</h4>
								<p className="text-md md:text-lg">
									Never let location be an issue when accessing your files. Fylo has
									you covered for all of your file storage needs.
								</p>

								<p className="text-md md:text-lg">
									Securely share files and folders with friends, family and
									colleagues for live collaboration. No email attachments required.
								</p>
							</div>

							{/* <!-- Link --> */}
							<div className="block mt-4">
								<Link href="#" className="border-b border-accentCyan text-accentCyan">
									See how Flyo works
									{" "}
									<Image
										width={16}
										height={16}
										src="/images/fylo/icon-arrow.svg" alt="" className="inline pb-2" />
								</Link>
							</div>
						</div>
					</div>
				</section>


				{/* Testimonial Section */}
				<section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
					{/* <!-- Testimonials Container --> */}
					<div className="container mx-0 px-6 pt-12 pb-80 md:pb-96">
						{/* <!-- Boxes Container --> */}
						<div className="relative flex flex-col items-center justify-between w-full space-y-6 xl:flex-row xl:space-y-0 xl:space-x-12">
							{/* <!-- Quotes Image --> */}
							<Image width={55} height={45} src="/images/fylo/bg-quotes.png" alt="" className="absolute left-1 -top-2 w-10 xl:-top-16 xl:w-20" />
							{/* <!-- Box 1 --> */}
							<div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 xl:w-1/3">
								<p className="text-sm leading-5 xl:text-lg">
									Fylo has improved our team productivity by an order of magnitude.
									Since making the switch our team has become a well-oiled
									collaboration machine.
								</p>
								{/* <!-- Customer Info --> */}
								<div className="flex space-x-4">
									<Image
										width={40}
										height={40}
										src="/images/fylo/profile-1.jpg" alt="" className="w-10 h-10 rounded-full" />
									<div>
										<h5 className="p-0 static text-sm font-semibold">Satish Patel</h5>
										<p className="text-xs font-extralight">Founder &amp; CEO. Huddle</p>
									</div>
								</div>
							</div>

							{/* <!-- Box 2 --> */}
							<div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 xl:w-1/3">
								<p className="text-sm leading-5 xl:text-lg">
									Fylo has improved our team productivity by an order of magnitude.
									Since making the switch our team has become a well-oiled
									collaboration machine.
								</p>
								{/* <!-- Customer Info --> */}
								<div className="flex space-x-4">
									<Image
										width={40}
										height={40}
										src="/images/fylo/profile-2.jpg" alt="" className="w-10 h-10 rounded-full" />
									<div>
										<h5 className="p-0 static text-sm font-semibold">Bruce McKenzie</h5>
										<p className="text-xs font-extralight">Founder &amp; CEO. Huddle 2</p>
									</div>
								</div>
							</div>

							{/* <!-- Box 3 --> */}
							<div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 xl:w-1/3">
								<p className="text-sm leading-5 md:text-lg">
									Fylo has improved our team productivity by an order of magnitude.
									Since making the switch our team has become a well-oiled
									collaboration machine.
								</p>
								{/* <!-- Customer Info --> */}
								<div className="flex space-x-4">
									<Image
										width={40}
										height={40}
										src="/images/fylo/profile-3.jpg" alt="" className="w-10 h-10 rounded-full" />
									<div>
										<h5 className="p-0 static text-sm font-semibold">Eva Boyd</h5>
										<p className="text-xs font-extralight">Founder &amp; CEO. Huddle 3</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Early Access */}
				<section id="early-access" className="relative px-6 dark:bg-darkBlue2 md:px-0">
					<div className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-darkBlue1 md:px-16">
						<h5 className="w-full text-2xl text-black dark:text-white static p-0 text-center font-bold">Get early access today</h5>
						<p className="text-sm">
							It only takes a minute to sign up and our free starter tier is
							extremely generous. If you have any questions, our support team would
							be happy to help you.
						</p>
						{/* <!-- Input & Button Container --> */}
						<div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
							<div className="w-full md:flex-1">
								<input type="text" className="w-full px-10 py-3 rounded-full dark:text-black focus:outline-none" placeholder="email@example.com" />
							</div>
							<button className="w-full p-3 px-6 rounded-full text-black bg-accentCyan md:w-56 hover:scale-95">
								Get Started For Free
							</button>
						</div>
					</div>
				</section>
				{/* Footer */}
				<footer className="bg-darkBlue2 text-white">
					<div className="container mx-auto pt-12 px-5 pb-10">
						{/* <!-- Flex Container For All Items --> */}
						<div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
							{/* <!-- Email & Phone --> */}
							<div className="mt-10 space-y-6">
								<div className="flex items-center space-x-3 md:-mt-10">
									<div className="w-6">
										<Image
											width={18}
											height={18}
											src="/images/fylo/icon-phone.svg" alt="" className="scale-10" />
									</div>
									<div>+1-543-123-4567</div>
								</div>
								<div className="flex items-center space-x-3">
									<div className="w-6">
										<Image
											width={18}
											height={18}
											src="/images/fylo/icon-email.svg" alt="" className="scale-10" />
									</div>
									<div>example@fylo.com</div>
								</div>
							</div>

							{/* <!-- Menus --> */}
							<div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
								<div className="flex flex-col space-y-3">
									<Link href="#">About</Link>
									<Link href="#">Jobs</Link>
									<Link href="#">Press</Link>
									<Link href="#">Blog</Link>
								</div>
								<div className="flex flex-col space-y-3">
									<Link href="#">Contact Us</Link>
									<Link href="#">Terms</Link>
									<Link href="#">Privacy</Link>
								</div>
							</div>

							{/* <!-- Social --> */}
							<div className="flex justify-center pb-10 space-x-3">
								<div className="min-w-[40px]">
									<Link href="#">
										<Image
											width={24}
											height={24}
											src="/images/fylo/facebook.svg" alt="" className="w-full p-2 bg-darkBlue rounded-full ficon" />
									</Link>
								</div>
								<div className="min-w-[40px]">
									<Link href="#">
										<Image
											width={24}
											height={24}
											src="/images/fylo/twitter.svg" alt="" className="w-full p-2 bg-darkBlue rounded-full ficon" />
									</Link>
								</div>
								<div className="min-w-[40px]">
									<Link href="#">
										<Image
											width={24}
											height={24}
											src="/images/fylo/instagram.svg" alt="" className=" w-full p-2 bg-darkBlue rounded-full ficon" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	</>
	)
}

export default FyloPage