import React, { useState } from 'react'
import './MainBodyHeader.css'
import { HiArrowsUpDown } from "react-icons/hi2";
import { v4 as uuidv4 } from 'uuid';

export default function MainBodyHeader({ categories, filterMenus }) {
    const [mainCategory, setMainCategory] = useState("همه موارد");

    return (
        <div className='mainBodyHeader'>
            <HiArrowsUpDown className='mainBodyHeader__icon' />
            <span className='mainBodyHeader__title'>مرتب سازی بر اساس :</span>
            <ul className="mainBodyHeader__list">
                {categories.map(category => (
                    <li
                        key={uuidv4()}
                        className={mainCategory === category ?
                            "mainBodyHeader__item active" :
                            "mainBodyHeader__item"}
                        onClick={() => {
                            setMainCategory(category)
                            filterMenus(category)
                        }}>
                        <a href="#" className='mainBodyHeader__link'>{category}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
