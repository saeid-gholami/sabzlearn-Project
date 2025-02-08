import React from 'react'
import './Sidebar.css'
import { CiSearch } from "react-icons/ci";
import { Form } from 'react-bootstrap';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__search">
                <input type="text" placeholder='جستجو بین دوره ها' className='sidebar__input' />
                <button className='sideBar__search-btn'>
                    <CiSearch />
                </button>
            </div>
            <div className="sidebar__filter">
                <span className='sidebar__filter-text'>فقط دوره های رایگان</span>
                <Form className='sidebar__form'>
                    <Form.Check type='switch' id="custom-switch"/>
                </Form>
            </div>
            <div className="sidebar__filter">
                <span className='sidebar__filter-text'>در حال پیش فروش</span>
                <Form className='sidebar__form'>
                    <Form.Check type='switch' id="custom-switch"/>
                </Form>
            </div>
            <div className="sidebar__filter">
                <span className='sidebar__filter-text'>دوره های خریداری شده</span>
                <Form className='sidebar__form'>
                    <Form.Check type='switch' id="custom-switch"/>
                </Form>
            </div>
        </div>
    )
}
