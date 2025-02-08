import React from 'react';
import './Footer.css';
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LiaTelegram } from "react-icons/lia";
import { Col, Row } from 'react-bootstrap';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer__top">
                <div className="footer__top-social">
                    <div className="footer__top-brand">
                        <svg class="h-10 sm:h-12 lg:h-13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1065.8713 255.5117">
                            <polygon fill="#006537" points="887.7703 183.9791 826.7449 215.7969 805.491 203.0911 805.491 151.3899 887.7703 183.9791"></polygon>
                            <polygon fill="#006869" points="1050.6455 66.363 887.721 151.4931 729.4719 88.8236 892.4201 3.7033 1050.6455 66.363"></polygon>
                            <line fill="#1a3d3d" x1="1036.3456" y1="99.6297" x2="1036.3134" y2="99.6903"></line>
                            <polygon fill="#006869" points="1063.2357 189.3956 1043.5893 208.2941 1025.2104 188.0983 1037.8194 175.9622 1037.7888 73.0754 1050.642 66.3589 1050.5808 175.4889 1063.2357 189.3956"></polygon>
                            <path fill="#006869" d="M307.5509,155.0539h-67.17v-56.4734l-28.9299,15.1051,.0104,66.0757-55.1067,28.7623,21.632,22.0796,33.9844-17.6526c17.5722-9.2213,28.4831-28.0988,28.4097-47.0865v-.8208c.0294,.3554,.0248,.7222,.0747,1.0708v.041c1.3057,10.101,9.9378,17.8961,20.3856,17.8961h36.9758c21.3859,0,38.7309-17.3452,38.7309-38.7308V48.3851l-28.9971,15.1211v91.5477Z"></path>
                            <rect fill="#1eb35b" x="472.0024" y="210.3168" width="28.7099" height="28.7097" transform="translate(-14.8418 413.934) rotate(-45.482)"></rect>
                            <path fill="#1eb35b" d="M527.2893,154.1019c.8169-3.131,1.2966-6.3986,1.2966-9.7857v-29.936l-29.0036,15.1416v14.2944c0,.31-.0101,.61-.0398,.9102v9.3009h-67.0695v-55.6318l-29.003,15.1415,.0101,66.0831-55.1063,28.7621,21.6317,21.2642,33.9844-17.6524c17.5725-9.2213,28.4831-27.2834,28.4831-47.1255v-.0011c1.1853,10.2237,9.8617,18.1633,20.4127,18.1633h36.9849c17.3421,0,32.0156-11.4021,36.9438-27.1175v6.6137c0,11.2809,9.1451,20.4259,20.4258,20.4259h166.7955v-28.8509h-186.7464Z"></path>
                            <rect fill="#1eb35b" x="403.1911" y="54.0264" width="28.7098" height="28.7098" transform="translate(76.0325 318.1596) rotate(-45.482)"></rect>
                            <path fill="#006869" d="M180.6675,98.4697l-28.9808,15.1586,.2408,30.5847-49.6468,25.9328c-15.212,7.9402-32.2688,7.9669-46.973-.9091-14.7577-8.9295-23.58-24.5961-23.58-41.8935,0-26.7616,21.7084-48.711,48.3361-48.9247h16.5758v.0266h1.7218l.0134,22.0306-12.6093,12.1361,18.3789,20.1957,19.6465-18.8985-12.655-13.9067,.0614-50.7712-7.8357,.0863-23.4579,.1204C37.3417,49.732,2.7202,84.7012,2.7202,127.3433c0,27.5369,14.0358,52.4805,37.5893,66.7035,12.4314,7.5125,26.2535,11.282,40.129,11.282,12.3512,0,23.7135-3.7963,35.1293-9.7849l65.3669-34.0603-.2673-63.0139Z"></path>
                            <polygon fill="#00524c" points="1050.6441 79.3998 1050.6226 109.016 1037.7986 116.4288 1037.7905 86.1166 1050.6441 79.3998"></polygon>
                            <polygon fill="#004b26" points="885.6756 250.9613 805.506 203.1038 805.506 198.6724 887.7228 183.9709 889.2223 187.4094 885.6756 250.9613"></polygon>
                            <polygon fill="#00524c" points="921.5254 133.8265 887.6566 151.5756 729.4703 88.8248 892.4202 3.7033 921.5254 133.8265"></polygon>
                            <polygon fill="#00322d" points="1050.6441 66.3635 1050.6226 82.4322 1037.7986 97.3856 1037.7905 73.0803 1050.6441 66.3635"></polygon>
                            <polygon fill="#1eb35b" points="998.58 126.0938 998.58 172.9425 885.5569 250.9322 826.7438 215.7983 998.58 126.0938"></polygon>
                        </svg>
                    </div>
                    <div className='footer__top-logos'>
                        <div className="footer__top-logo">
                            <FaLinkedinIn />
                        </div>
                        <div className="footer__top-logo">
                            <FaInstagram />
                        </div>
                        <div className="footer__top-logo">
                            <BiLogoTelegram />
                        </div>
                    </div>
                </div>
                <div className="footer__top-contactUs">
                    <div className="contact__us">
                        <HiOutlinePhone className='contact__us-logo' />
                        <span className="contact__us-text">
                            02191030926
                        </span>
                    </div>
                    <div className="contact__us">
                        <HiOutlineEnvelope className='contact__us-logo' />
                        <span className="contact__us-text">
                            info@sabzlearn.ir
                        </span>
                    </div>
                    <div className="contact__us">
                        <LiaTelegram className='contact__us-logo' />
                        <span className="contact__us-text">
                            sabzlearn_support@
                        </span>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <Row>
                    <Col sm={4}>
                        <div className="footer__desc">
                            <h3 className='footer__desc-title'>درباره سبزلرن</h3>
                            <p className="footer__desc-text">
                                شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی، با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.
                            </p>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <Row className='justify-content-center'>
                            <Col sm={5}>
                                <h2 className="footer__list-title">دوره های پرطرفدار</h2>
                                <ul className="footer__list">
                                    <li className='footer__item'>آموزش پایتون</li>
                                    <li className='footer__item'>آموزش Html</li>
                                    <li className='footer__item'>آموزش Css</li>
                                    <li className='footer__item'>پروژه های خلاقانه با Html و Css</li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <h2 className="footer__list-title">دسترسی سریع</h2>
                                <ul className="footer__list">
                                    <li className='footer__item'>قوانین و مقررات</li>
                                    <li className='footer__item'>ارسال تیکت</li>
                                    <li className='footer__item'>همه دوره ها</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={2}>
                        <img src="images/enamad.png" />
                    </Col>
                </Row>
                <div className="footer__copyRight mt-3">
                    <p className="footer__desc-text">
                        کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است.
                    </p>
                    <p className="footer__desc-text fs-6">
                        ساخته شده با ❤️ در سبزلرن
                    </p>
                </div>
            </div>
        </div>
    )
}
