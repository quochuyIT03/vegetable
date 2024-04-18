import { memo, useState } from "react"
import "./style.scss";
import { AiOutlineFacebook, AiFillInstagram, 
    AiFillTwitterSquare,  AiFillYoutube, AiOutlineUser, 
    AiOutlineMail,  
    AiOutlineMenu,
    AiOutlinePhone,
    } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";

import { Link } from "react-router-dom";
import { fomatall } from "utils/fomatall";
import { ROUTERS } from "utils/router";
import logo from "assets/users/images/image/logo.png"; 


const Header = () =>{


    const handleMenuClick = (index) => {
        setShowCategory(index);
    };

    
    const[isShowCategory, setShowCategory] = useState(true);
    const[menues] = useState([
        {
            name: "Trang chủ", 
            path: ROUTERS.USER.HOME,
        },
        
        {
            name: "Khuyến mãi", 
            path: ROUTERS.USER.PROMOTION,
        },
        {
            name: "Sản phẩm", 
            path: ROUTERS.USER.PRODUCT,
            isShowSubmenu: false, 
            child: [
                {
                    name: "Cải ngọt", 
                    path: "",
                },
                {
                    name: "Cải thìa", 
                    path: "",
                },
                {
                    name: "Rau", 
                    path: "",
                },
                {
                    name: "Rau", 
                    path: "",
                },
            ],
        },
        {
            name: "Tin tức", 
            path: ROUTERS.USER.NEWS,
            isShowSubmenu: false, 
            child: [
                {
                    name: "Về chúng tôi", 
                    path: ROUTERS.USER.ABOUTUS,
                },
                {
                    name: "Giới thiệu", 
                    path: ROUTERS.USER.INTRODUCEPAGE,
                },
                {
                    name: "Liên hệ", 
                    path: ROUTERS.USER.CONTACT,
                },
                
            ],
        },
        
    ]);
    


    return (<>
    
        <div className="header_top">
            <div className="container">
            <div className="row">
                <div className="col-6 header_top_leftside" >
                    <ul>
                        <li>
                            <AiOutlineMail />
                            nguyenquochuy3102@gmail.com
                        </li>

                        <li>
                            miễn phí ship cho đơn từ {fomatall(100000)}
                        </li>
                    </ul>
                </div>

                <div className="col-6 header_top_rightside">
                    <ul>
                        <li>
                            <Link to={""}>
                                 <AiOutlineFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <AiFillInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <AiFillTwitterSquare />
                            </Link> 
                        </li>
                        <li>
                            <Link to={""}>
                                <AiFillYoutube />
                            </Link>
                        </li>

                        <li>
                            <Link to={""}>
                                <AiOutlineUser  />
                            </Link>
                            <span>Login</span>
                           
                        </li>
                    </ul>
                </div>

            </div>
            </div>  
        </div>

        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <div className="hd_logo">
                        <img src={logo} alt="logo"></img>
                        <h1> ORGANIC OASIS</h1>
                    </div>
                </div>
                <div className="col-xl-6">
                <nav className="hd_menu">
                <ul>
                        {
                            menues.map((menu, menuK) => (
                                <li key={menuK} className={menuK === isShowCategory ?"active_page":" "}>
                                <Link to ={menu.path} onClick={() => handleMenuClick(menuK)}>{menu.name}
                            </Link>
                                {menu.child &&(
                                   <ul className="hd_menu_dropdown">
                                    {
                                        menu.child.map((childSP, childK) =>(
                                            <li key={`${menuK}-${childK}`}>
                                                <Link to={childSP.path}>{childSP.name}</Link>
                                            </li>
                                        ))}
                                   </ul> 
                                )}
                            </li>
                            ))}
                    </ul>
                </nav>
                </div>

                <div className="col-xl-3">
                    <div className="hd_cart">
                        <div className="hd_cart_price">
                                <span>{fomatall(120000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                    <CiShoppingCart /> <span>
                                        10
                                    </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-3 categories">
                    <div className="category" onClick={()=> setShowCategory(!isShowCategory)}>
                        <AiOutlineMenu/>
                        Product List
                    </div>
                    {
                        isShowCategory && (<ul className={isShowCategory ? "":"hidden"}>
                    
                        <li><Link to={""}>rau cải</Link></li>
                        <li><Link to={""}>rau dền</Link></li>
                        <li><Link to={""}>bắp cải</Link></li>
                        <li><Link to={""}>rau bồ ngót</Link></li>
                        <li><Link to={""}>rau má</Link></li>
                    </ul>
                    )}
                </div>
                <div className="col-lg-9 search_box">
                        <div className="search">
                            <div className="search_form">
                                <form>
                                    <input type="text" name=""  placeholder="nhập thứ cần tìm ở đây"/>
                                    <button type="submit">Tìm kiếm</button>
                                </form>
                            </div>

                            <div className="phone">
                                <div className="phone_icon">
                                    <AiOutlinePhone/>
                                </div>

                                <div className="phone_text">
                                    <p>01215887750</p>
                                    <span>Online 24/7</span>
                                </div>

                            </div>

                        </div>

                            <div className="items">
                                <div className="_text">
                                    <span>Organic Oasis</span>
                                    <h2>Vegetable <br/>Organic 100%</h2>
                                    <p>Free ship</p>
                                    <Link to="" className="btn_buy">
                                        Buy now
                                    </Link>
                                </div>
                            </div>

                </div>
            </div>
        </div>
       
        </>
    );
};

export default memo(Header);