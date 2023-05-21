import Link from "next/link"
import Image from "next/image"
import styles from "./Menu.module.css"
import { useState } from "react"

const Menu = () => {

  let [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  }

  
  return (
    <>
      {/* nav/logo container */}
      <nav className="flex items-center justify-between font-bold text-white">
        <Link href="/" aria-label='Home'>
          <Image width={192} height={32} src="./images/loop-studios/logo.svg" alt='logo' />
        </Link>
        {/* menu */}
        <div className='hidden h-10 font-alata md:flex md:space-x-8'>
          <div className="group">
            <Link href="#">About</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>

          <div className="group">
            <Link href="#">Careers</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>

          <div className="group">
            <Link href="#">Events</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>

          <div className="group">
            <Link href="#">Products</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>

          <div className="group">
            <Link href="#">Support</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
        </div>
        {/* hamburger btn */}
        <div className="md:hidden">
          <button
            onClick={handleHamburgerClick}
            id="menu-btn"
            type="button"
            className={`z-40 block ${styles.hamburger} md:hidden focus:outline-none ${menuOpen&&styles.open}`}>
              <span className={`${styles.hamburgerTop}`}></span>
              <span className={`${styles.hamburgerMiddle}`}></span><span className={`${styles.hamburgerBottom}`}></span>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
  
      <div id="menu" className={`bg-white text-black absolute top-0 left-0 bottom-0 ${menuOpen?"flex":"hidden"} flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg dark:text-white dark:bg-black uppercase`}>
        <Link className="hover:text-pink-500" href="#">about</Link>
        <Link className="hover:text-pink-500" href="#">careers</Link>
        <Link className="hover:text-pink-500" href="#">events</Link>
        <Link className="hover:text-pink-500" href="#">products</Link>
        <Link className="hover:text-pink-500" href="#">support</Link>
      </div>
    </>
  )
}
export default Menu;