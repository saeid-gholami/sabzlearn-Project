import React from 'react';
import './Navbar.css';
import { CiSearch } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";

export default function Navbar() {
    return (
        <section className='navigationbar'>
            <div className="navbar__right">
                <a href='#' className="navbar__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1020 769">
                        <polygon fill="#006537" points="484.8124 560.0603 302.0609 655.3444 238.4124 617.2945 238.4124 462.4662 484.8124 560.0603"></polygon>
                        <polygon fill="#006869" points="972.5712 207.8379 484.6647 462.7753 10.7595 275.1003 498.7369 20.1923 972.5712 207.8379"></polygon>
                        <line fill="#1a3d3d" x1="929.7475" y1="307.461" x2="929.6513" y2="307.6423"></line>
                        <polygon fill="#006869" points="1010.2748 576.281 951.4402 632.8758 896.4012 572.396 934.1612 536.0524 934.0697 227.9393 972.5606 207.8255 972.3776 534.6349 1010.2748 576.281"></polygon>
                        <polygon fill="#00524c" points="972.5669 246.8789 972.5027 335.57 934.0989 357.7689 934.0747 266.9936 972.5669 246.8789"></polygon>
                        <polygon fill="#004b26" points="478.5395 760.6504 238.4571 617.3325 238.4571 604.062 484.6701 560.0356 489.1606 570.333 478.5395 760.6504"></polygon>
                        <polygon fill="#00524c" points="585.898 409.8693 484.472 463.0223 10.7549 275.1038 498.7374 20.1923 585.898 409.8693"></polygon>
                        <polygon fill="#00322d" points="972.5669 207.8394 972.5027 255.9601 934.0989 300.7406 934.0747 227.9542 972.5669 207.8394"></polygon>
                        <polygon fill="#1eb35b" points="816.6519 386.7124 816.6519 527.0091 478.1841 760.5632 302.0575 655.3487 816.6519 386.7124"></polygon>
                    </svg>
                </a>
                <ul className="navbar__right-list">
                    <li className="navbar__right-item">
                        <a href="#" className="navbar__right-link">دوره های آموزشی</a>
                    </li>
                    <li className="navbar__right-item">
                        <a href="#" className="navbar__right-link">همه دوره ها</a>
                    </li>
                    <li className="navbar__right-item">
                        <a href="#" className="navbar__right-link">مقالات</a>
                    </li>
                </ul>
            </div>
            <div className="navbar__left">
                <form action="#" className="navbar__left-form rounded-pill">
                    <label className='navbar__left-label'>
                        <input type="text" placeholder='چیو میخوای یاد بگیری؟' />
                        <button className='navbar__left-btn'>
                            {/* <CiSearch /> */}
                        </button>
                    </label>
                </form>
                <a href='#' className="navbar__left-icon">
                    <IoSunnyOutline />
                </a>
                <a href='#' className="navbar__left-icon">
                    <HiOutlineShoppingBag />
                </a>
                <a href='#' className="navbar__left-icon">
                    <HiOutlineUser />
                </a>
            </div>
        </section>
    )
}
