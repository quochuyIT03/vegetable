import { memo } from "react"
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiFillInstagram, 
    AiFillTwitterSquare,  AiFillYoutube  } from "react-icons/ai";
import "./style.scss";

const Footer = () =>{
    return <footer className="footer">
        <div className="container">
            <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="info">
                    <h1 className="shop_name">
                    ORGANIC OASIS
                    </h1>
                    <ul>
                        <li>Địa chỉ: 361 Võ Thị Sáu</li>
                        <li>Điện thoại: 0797744819</li>
                        <li>Email: nguyenquochuy3102@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="about_store">
                    <h5>Hướng dẫn mua hàng</h5>
                    <ul>
                        <li><Link to="">Trang chủ</Link></li>
                        <li><Link to="">Sản phẩm</Link></li>
                        <li><Link to="">Tin tức</Link></li>
                        
                    </ul>
                    <ul>
                    <li><Link to="">Khuyến mãi</Link></li>
                        
                    <li><Link to="">Liên hệ</Link></li>
                        
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="about_store">
                    <h5>Khuyến mãi và ưu đãi</h5>
                    <p>nhận thêm thông tin tại đây</p>
                    <form action="#">
                        <div>
                            <input type="text" placeholder="Nhập email"/>
                            <button type="submit" className="button_add">
                                Đăng ký ngay
                            </button>
                        </div>
                        <div className="widget_social">
                            <div>
                            <AiOutlineFacebook />
                            </div>
                            <div>
                            <AiFillInstagram />
                            </div>
                            <div>
                            <AiFillTwitterSquare />
                            </div>
                            <div>
                            <AiFillYoutube />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className="col-lg-3">4</div> */}
            </div>
        </div>
    </footer>
};

export default memo(Footer);