import React from 'react';
import {  AiTwotoneHome } from 'react-icons/ai';
import thumb_1 from "assets/users/images/image/thumb-1.jpg";
import thumb_5 from "assets/users/images/image/thumb-5.jpg";
import seal from "assets/users/images/image/xc.png";
import AboutCard from './card';
import "./style.scss"
import ReactJsCarouselSlider from 'reactjs-carousel-slider'

const ABOUTUS = () => {
    return (
        <div className="">
            <div className="about-thumb">

            <div className="container_img">
                <div className="column">

                    <img src={thumb_1} alt="Image1"/> 
                </div>
                <div className="column">
                    <div className="column_">
                        <h1>Giới thiệu</h1>
                        <h2>Chuyên cung cấp nguồn rau sạch trong và ngoài nước</h2>
                        <p>Các sản phẩm chúng tôi 100% không sử dụng chất hóa học và phân hóa học</p>
                    </div>

                    <div className="row_with_svg">
                    <div style={{ marginRight: "1rem" }}><AiTwotoneHome/></div>
                      <div>
                        <h4>Đối tác thực phẩm đáng tin cậy</h4>
                        <p>Chúng tôi có các đối tác cung cấp thực phẩm đáng tin cậy</p>
                      </div>
                        

                       
                    </div>
                    <div className="row_with_svg">
                    <div style={{ marginRight: "1rem" }}><AiTwotoneHome/></div>
                      <div>
                        <h4>Đối tác thực phẩm đáng tin cậy</h4>
                        <p>Chúng tôi có các đối tác cung cấp thực phẩm đáng tin cậy</p>
                      </div>
                    </div>
                    <button className="btn-more">Xem thêm +</button>



                </div>

                

            </div>
            </div>

            <div className="container_stat">
            <div className="circle">
                    <div className="card">
                        <div className="box">
                            <div className="par">
                                <svg>
                                    <circle cx="70" cy="70" r="70" ></circle>
                                    <circle cx="70" cy="70" r="70" ></circle>
                                </svg>
                                <div className="num">
                                    <h2>90<span>%</span></h2> 
                                </div>
                            </div>
                            <div className="text">Trái cây tươi</div>
                            
                        </div>
                        
                    </div>

                    <div className="card">
                        <div className="box">
                            <div className="par">
                                <svg>
                                    <circle cx="70" cy="70" r="70" ></circle>
                                    <circle cx="70" cy="70" r="70" ></circle>
                                </svg>
                                <div className="num">
                                    <h2>85<span>%</span></h2> 
                                </div>
                            </div>
                            <div className="text">Thực vật hữu cơ</div>
                            
                        </div>
                        
                    </div>

                    <div className="card">
                        <div className="box">
                            <div className="par">
                                <svg>
                                    <circle cx="70" cy="70" r="70" ></circle>
                                    <circle cx="70" cy="70" r="70" ></circle>
                                </svg>
                                <div className="num">
                                    <h2>91<span>%</span></h2> 
                                </div>
                            </div>
                            <div className="text">Đánh giá </div>
                            
                        </div>
                        
                    </div>

                    <div className="card">
                        <div className="box">
                            <div className="par">
                                <svg>
                                    <circle cx="70" cy="70" r="70" ></circle>
                                    <circle cx="70" cy="70" r="70" ></circle>
                                </svg>
                                <div className="num">
                                    <h2>35<span>%</span></h2> 
                                </div>
                            </div>
                            <div className="text">Nhập khẩu</div>
                            
                        </div>
                        
                    </div>
            </div>

            </div>
           
                

        <div className="container_why_choose_us">
            <h2>Các nhà đồng sáng tạo nên </h2>
            <h1>ORGANIC OASIS</h1>
            <div className="card-about_">
                <AboutCard
                title="Quốc Huy"
                image={seal}
                content="Dạo ..."/>

                <AboutCard
                title="Cách trồng một số loại cây trồng mới"
                image={seal}
                content="Dạo gần đâyho ra nhiều năng suất cao hơn..."/>

                <AboutCard
                title="Cách trồng một số loại cây trồng mới"
                image={seal}
                content="Dạo gần đâyho ra nhiều năng suất cao hơn..."/>
            </div>
           
            
        </div>

        <ReactJsCarouselSlider timer={5000}
                               pics={[require(thumb_5), require(thumb_5), require(thumb_5)]}/>

        </div>
            
      
        
    );
};
export default (ABOUTUS);