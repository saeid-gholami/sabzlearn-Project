import React, { useEffect, useState } from 'react';
import './Courses.css'
import { HiOutlineUser } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { Col, Container, Row } from 'react-bootstrap';
import coursesDatas from '../../../../datas';
import { SlArrowDown } from "react-icons/sl";
import MainBodyHeader from '../mainBodyHeader/MainBodyHeader';

let allCategories = ['همه موارد', ...new Set(coursesDatas.map(course => course.category))]

export default function Courses() {
    const [datas, setDatas] = useState(coursesDatas);
    const [categories, setCategories] = useState(allCategories);
    const [filteredMenus, setFilteredMenus] = useState(coursesDatas);

    useEffect(() => {
        console.log(filteredMenus)
    }, [filteredMenus])

    const filterMenus = (category) => {
        if (category === "همه موارد") {
            setFilteredMenus(coursesDatas);
            return
        }
        setFilteredMenus(datas.filter(data => data.category === category));
    }

    return (
        <>
            <MainBodyHeader categories={categories} filterMenus={filterMenus} />
            <div className='courses'>
                <Container className='p-0'>
                    <Row>
                        {filteredMenus.map(data => (
                            <Col sm={4} key={data.id}>
                                <div className="course__box">
                                    <div className="course__img">
                                        <img src={data.img} alt="course img" className='course__img-image' />
                                    </div>
                                    <div className="course__info">
                                        <div className="course__info-header">
                                            <h5 className='cuorse__info-title'>
                                                {data.title}
                                            </h5>
                                            <p className="course__info-subTitle">
                                                {data.subTitle}
                                            </p>
                                        </div>
                                        <div className="course__info-teacher-stars">
                                            <div className="course__teacher">
                                                <HiOutlineUser className='course__teacher-icon' />
                                                <span className='course__teacher-text'>
                                                    {data.teacher}
                                                </span>
                                            </div>
                                            <div className="course__star">
                                                <span className="course__star-number">
                                                    {data.score.toLocaleString("fa-ir")}
                                                </span>
                                                <FaStar />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course__registers-price">
                                        <div className="course__registers">
                                            <HiOutlineUsers className='course__registers-icon' />
                                            <span className="course__registers-number">
                                                {data.registers.toLocaleString("fa-ir")}
                                            </span>
                                        </div>
                                        <div className="course__price">
                                            <span>
                                                {data.price === 0 ? "رایگان" :
                                                    `${data.price.toLocaleString("fa-ir")} تومان`}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className="text-center">
                    <button className='seeMore__btn'>
                        مشاهده بیشتر
                        <SlArrowDown className='seeMore__icon' />
                    </button>
                </div>
            </div>
        </>
    )
}
