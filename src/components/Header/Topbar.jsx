import React, { useEffect, useRef, useState } from 'react'
import './Topbar.css'
import { IoMdArrowBack } from "react-icons/io";
import { HiOutlineBellAlert } from "react-icons/hi2";

export default function Topbar() {
    const [secondCount, setSecondCount] = useState(null);
    const [minutesCount, setMinutesCount] = useState(null);
    const [hourCount, setHourCount] = useState(null);
    const [dayCount, setDayCount] = useState(null);
    const [showOff, setShowOff] = useState(true)
    let secondRef = useRef(10);
    let minutesRef = useRef(0);
    let hourRef = useRef(0);
    let dayRef = useRef(3);

    useEffect(() => {
        let timer = setInterval(() => {
            setMinutesCount(minutesRef.current.toLocaleString('fa-ir'));
            setSecondCount(secondRef.current.toLocaleString('fa-ir'));
            setHourCount(hourRef.current.toLocaleString('fa-ir'));
            setDayCount(dayRef.current.toLocaleString('fa-ir'))
            secondRef.current--;

            if (secondRef.current < 0) {
                secondRef.current = 59;
                minutesRef.current--;
            }
            if (minutesRef.current < 0) {
                minutesRef.current = 59;
                hourRef.current--
            }
            if (hourRef.current < 0) {
                hourRef.current = 23;
                dayRef.current--
            }
            if (secondRef.current === 0 &&
                minutesRef.current === 0 &&
                hourRef.current === 0 &&
                dayRef.current === 0) {
                clearInterval(timer);
                setTimeout(() => {
                    setShowOff(false)
                }, 1000)
            }
        }, 1000)
    }, [])

    return (
        <>
            {showOff && (
                <section className='topbar'>
                    <div className="topbar__right">
                        <HiOutlineBellAlert className='topbar__icon' />
                        <span className="topbar__text">
                            پیشنهاد شگفت‌انگیز سبزلرن: {(50).toLocaleString("fa-ir")}% تخفیف برای دوره الکترون جی اس
                        </span>
                        <div className='topbar__link'>
                            <span className="topbar__link-text" title='تمامی دوره ها'>مشاهده دوره</span>
                            <IoMdArrowBack className='topbar__link-icon' />
                        </div>
                    </div>
                    <div className="topbar__left">
                        <div className="topbar__left-section red">
                            <span className='topbar__left-number'>{secondCount}</span>
                            <span className='topbar__left-text'>ثانیه</span>
                        </div>
                        <div className="topbar__left-section red">
                            <span className='topbar__left-number'>{minutesCount}</span>
                            <span className='topbar__left-text'>دقیقه</span>
                        </div>
                        <div className="topbar__left-section white">
                            <span className='topbar__left-number'>{hourCount}</span>
                            <span className='topbar__left-text'>ساعت</span>
                        </div>
                        <div className="topbar__left-section white">
                            <span className='topbar__left-number'>{dayCount}</span>
                            <span className='topbar__left-text'>روز</span>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
