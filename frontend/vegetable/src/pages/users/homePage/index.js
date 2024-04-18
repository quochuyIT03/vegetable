import { memo } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "./style.scss";
import rau_den_img from "assets/users/images/vegetable/spinach.jpg";
import cai_ngong_img from "assets/users/images/vegetable/cai_ngong.jpg";
import broccoli_img from "assets/users/images/vegetable/broccoli.jpg";
import bok_choy_img from "assets/users/images/vegetable/bok_choy.jpg";
import swam_spinach_img from "assets/users/images/vegetable/swam_spinach.jpg";
import yu_choy_img from "assets/users/images/vegetable/yu_choy.jpg";
import malabar_spinach_img from "assets/users/images/vegetable/malabar_spinach.jpg";
import Chinese_Broccoli_img from "assets/users/images/vegetable/Chinese_Broccoli.jpg";
import bo_ngot_img from "assets/users/images/vegetable/bo_ngot.jpg";
import rau_hung_que_img from "assets/users/images/vegetable/rau-hung-que.jpg";
import rau_cang_cua_img from "assets/users/images/vegetable/rau_cang_cua.jpg";
import rau_hung_lui_img from "assets/users/images/vegetable/hung_lui.jpg";
import ngo_gai_img from "assets/users/images/vegetable/ngo_gai.jpg";
import ngo_ri_img from "assets/users/images/vegetable/ngo_ri.jpg";
import hanh_img from "assets/users/images/vegetable/hanh.jpg";
import hanh_tay_img from "assets/users/images/vegetable/hanh_tay.jpg";
import toi_img from "assets/users/images/vegetable/toi.jpg";
import hanh_tim_img from "assets/users/images/vegetable/hanh_tim.jpg";
import tomato_img from "assets/users/images/vegetable/tomato.jpg";
import dau_bap_img from "assets/users/images/vegetable/dau_bap.jpg";
import dua_leo_img from "assets/users/images/vegetable/dualeo.jpg";
import kho_qua_img from "assets/users/images/vegetable/kho_qua.jpg";
import bau_img from "assets/users/images/vegetable/bau.jpg";

/////////////
import du_du_img from "assets/users/images/fruit/papaya.jpg";
import tamarind_img from "assets/users/images/fruit/tamarind.jpg";
import mango_img from "assets/users/images/fruit/mango.jpg";
import ambarella_img from "assets/users/images/fruit/ambarella.jpg";
import orange_img from "assets/users/images/fruit/orange.jpg";

// import { render } from "@testing-library/react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { fomatall } from "utils/fomatall";

import banner_1 from "assets/users/images/image/banner_1.jpg"; 
import banner_2 from "assets/users/images/image/banner_2.jpg"; 

import banner_3 from "assets/users/images/image/banner_3.jpg"; 
const HomePage = () =>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const slider_bar =[
        {
            prod1: ambarella_img,
            name: "trái cóc",
        },
        {
            prod1: orange_img,
            name: "trái cam",
        },
        {
            prod1: mango_img,
            name: "Xoài",
        },
        {
            prod1: du_du_img,
            name: "đu đủ",
        },
        {
            prod1: tamarind_img,
            name: "trái me",
        },
      ];


        const renderfeat_prod =(i) => {
        const tab_product = [];
        const tab_products_below = [];
  

        Object.keys(i).forEach((key,index) =>{
            console.log(key,index);
            tab_product.push(<Tab key={index}> {i[key].title}</Tab>);

            const tab_product_below =[]; 
            i[key].products.forEach((item, jndex) => {
                tab_product_below.push( <div className="col-lg-3" key={jndex}>
                <div className="feat_product_info">
                    <div className="feat_product_img" style={{backgroundImage: `url(${item.img})`,}}>
                        <ul className="hover_icon">
                            <li>
                                <AiOutlineEye/>
                            </li>
                            <li>
                                <AiOutlineShoppingCart/>
                            </li>
                        </ul>
                    </div>
                    <div className="feat_product_text">
                        <h5>
                            <Link to="">
                                {item.name}
                            </Link>
                        </h5>
                        <h4>
                            {
                                fomatall(item.price)
                            }
                        </h4>
                    </div>
                </div>
                </div>);
               
            });
            tab_products_below.push(tab_product_below)
        });
   

            return <Tabs>
            <TabList>{tab_product}
              {/* <Tab></Tab>
              <Tab>Title 2</Tab> */}
            </TabList>
              {tab_products_below.map((item, key) => (
                    <TabPanel key={key}>
                    
                    <div className="row">{item}</div>    
                        
                    </TabPanel>
              ))}
           
            
          </Tabs>
      }

      const feat_prod = {
        all: {
            title: "tất cả",
            products: [
                {
                    img: rau_den_img, 
                    name: "Rau dền", 
                    price: 18000,
                },
                {
                    img: cai_ngong_img, 
                    name: "Cải ngồng", 
                    price: 20000,
                },
                {
                    img: broccoli_img, 
                    name: "cải bẹ xanh", 
                    price: 22000,
                },
                {
                    img: bok_choy_img, 
                    name: "cải thìa", 
                    price: 20000,
                },
                {
                    img: swam_spinach_img, 
                    name: "rau muống", 
                    price: 20000,
                },
                {
                    img: yu_choy_img, 
                    name: "cải ngọt", 
                    price: 20000,
                },
                {
                    img: malabar_spinach_img, 
                    name: "mồng tơi", 
                    price: 15000,
                },

                {
                    img: Chinese_Broccoli_img, 
                    name: "cải rổ", 
                    price: 20000,
                },
                {
                    img: bo_ngot_img, 
                    name: "rau bồ ngót", 
                    price: 20000,
                },
                {
                    img: rau_hung_que_img, 
                    name: "rau húng quế", 
                    price: 22000,
                },

                {
                    img: rau_cang_cua_img, 
                    name: "rau càng cua", 
                    price: 19000,
                },

                {
                    img: rau_hung_lui_img, 
                    name: "rau húng lủi", 
                    price: 15000,
                },

                {
                    img: ngo_gai_img, 
                    name: "ngò gai", 
                    price: 21000,
                },

                {
                    img: ngo_ri_img, 
                    name: "ngò rí", 
                    price: 25000,
                },

                {
                    img: hanh_img, 
                    name: "hành lá", 
                    price: 35000,
                },


                {
                    img: hanh_tay_img, 
                    name: "hành tây", 
                    price: 45000,
                },

                {
                    img: toi_img, 
                    name: "tỏi", 
                    price: 30000,
                },

                {
                    img: hanh_tim_img, 
                    name: "hành tím", 
                    price: 40000,
                },
                
                {
                    img: tomato_img, 
                    name: "cà chua", 
                    price: 50000,
                },
                {
                    img: orange_img, 
                    name: "cam", 
                    price: 25000,
                },
                {
                    img: ambarella_img, 
                    name: "cóc", 
                    price: 20000,
                },
                {
                    img: mango_img, 
                    name: "xoài thái", 
                    price: 30000,
                },
                {
                    img: tamarind_img, 
                    name: "me", 
                    price: 50000,
                },
                {
                    img: du_du_img, 
                    name: "đu đủ", 
                    price: 50000,
                },
                {
                    img: dua_leo_img, 
                    name: "dưa leo", 
                    price: 50000,
                },
                {
                    img: dau_bap_img, 
                    name: "đậu bắp", 
                    price: 50000,
                },
                {
                    img: kho_qua_img, 
                    name: "khổ qua", 
                    price: 34000,
                },
                {
                    img: bau_img, 
                    name: "trái bầu", 
                    price: 34000,
                },
                


            ],
            
        },
        rau: {
            title: "rau",
            products: [
                {
                    img: rau_den_img, 
                    name: "Rau dền", 
                    price: 18000,
                },
                {
                    img: cai_ngong_img, 
                    name: "Cải ngồng", 
                    price: 20000,
                },
                {
                    img: broccoli_img, 
                    name: "cải bẹ xanh", 
                    price: 22000,
                },
                {
                    img: bok_choy_img, 
                    name: "cải thìa", 
                    price: 20000,
                },
                {
                    img: swam_spinach_img, 
                    name: "rau muống", 
                    price: 20000,
                },
                {
                    img: yu_choy_img, 
                    name: "cải ngọt", 
                    price: 20000,
                },
                {
                    img: malabar_spinach_img, 
                    name: "mồng tơi", 
                    price: 15000,
                },

                {
                    img: Chinese_Broccoli_img, 
                    name: "cải rổ", 
                    price: 20000,
                },
                {
                    img: bo_ngot_img, 
                    name: "rau bồ ngót", 
                    price: 20000,
                },
                {
                    img: rau_cang_cua_img, 
                    name: "rau càng cua", 
                    price: 19000,
                },
            ],
        },
        củ: {
            title: "củ quả",
            products: [
                {
                    img: hanh_tay_img, 
                    name: "hành tây", 
                    price: 45000,
                },

                {
                    img: toi_img, 
                    name: "tỏi", 
                    price: 30000,
                },

                {
                    img: hanh_tim_img, 
                    name: "hành tím", 
                    price: 40000,
                },
                
                {
                    img: tomato_img, 
                    name: "cà chua", 
                    price: 50000,
                },
                {
                    img: orange_img, 
                    name: "cam", 
                    price: 25000,
                },
                {
                    img: ambarella_img, 
                    name: "cóc", 
                    price: 20000,
                },
                {
                    img: mango_img, 
                    name: "xoài thái", 
                    price: 30000,
                },
                {
                    img: tamarind_img, 
                    name: "me", 
                    price: 50000,
                },
                {
                    img: du_du_img, 
                    name: "đu đủ", 
                    price: 50000,
                },
                {
                    img: dua_leo_img, 
                    name: "dưa leo", 
                    price: 50000,
                },
                {
                    img: dau_bap_img, 
                    name: "đậu bắp", 
                    price: 50000,
                },
                {
                    img: kho_qua_img, 
                    name: "khổ qua", 
                    price: 34000,
                },
                {
                    img: bau_img, 
                    name: "trái bầu", 
                    price: 34000,
                },
            ],
        },
        rau_thơm: {
            title: "rau thơm",
            products: [
                {
                    img: rau_hung_que_img, 
                    name: "rau húng quế", 
                    price: 22000,
                },
                {
                    img: rau_hung_lui_img, 
                    name: "rau húng lủi", 
                    price: 15000,
                },

                {
                    img: ngo_gai_img, 
                    name: "ngò gai", 
                    price: 21000,
                },

                {
                    img: ngo_ri_img, 
                    name: "ngò rí", 
                    price: 25000,
                },

                {
                    img: hanh_img, 
                    name: "hành lá", 
                    price: 35000,
                },
            ],
        },
      }



      //Phần carousel
return(
  
    <div className="container slide_prod">
        <Carousel responsive={responsive} className="info_slide_prod">
        {
            slider_bar.map((item, key)=> (
                <div className="prod_item" style={{backgroundImage: `url(${item.prod1})`}}
                key={key}> 
                <p>{item.name}</p>
             </div>
            ))
        }
        </Carousel>
{/* 
        Phần này là phần sản phẩm  */}
            <div className="container">
        <div className="featured">
            <div className="section_prod">
                <h2>Sản phẩm nổi bật</h2>
               
            </div>
            {renderfeat_prod(feat_prod)}
            
        </div>
        <div className="about_us">
            <img src = {banner_3} alt =""/>
         

           
            <div className="text_overlay">ORGANIC OASIS</div>
            <div className="text_overlay_">Rau sạch cho gia đình bạn</div>
            <button className="button_after_overlay">Về chúng tôi</button>
         
        </div>
        </div>
        
        <div className="container">
            <div className="section_banner">
                <div className="img_banner">
                    <img src={banner_1} alt="banner1"/>

                </div>
                <div className="img_banner">
                    <img src={banner_2} alt="banner1"/>
                    
                </div>
            </div>
        </div>
        
    </div>

    
   
);


};


export default memo(HomePage);