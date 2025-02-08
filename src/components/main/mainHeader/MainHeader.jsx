import React from 'react'
import './MainHeader.css'

export default function MainHeader() {
    return (
        <div className='main__header'>
            <div className="main_header-title">
                <h2>دوره های فرانت اند</h2>
            </div>
            <div className='main__header-text'>
                <h3>{(29).toLocaleString('fa-ir')} عنوان آموزشی</h3>
            </div>
        </div>
    )
}
