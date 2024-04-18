import React from 'react';
import "./style.scss";


import TinTucCard from './card';
import rau_img from "assets/users/images/image_news/rau.jpg"

const NEWS = () => {
    return (
        <div className="">
          <div className="title_page">Tin tức về rau củ</div>

          <div className="video-container">
          <iframe

          src="https://www.youtube.com/embed/PTtgPynBPPg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          
          src="https://www.youtube.com/embed/PTtgPynBPPg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
          </div>


          <div className="tin-tuc-list">
        <TinTucCard
          title="Cách trồng một số loại cây trồng mới"
          image={rau_img}
          content="Dạo gần đây có một số loại cây trồng mới cho ra nhiều năng suất cao hơn..."
        />
        <TinTucCard
          title="Cách trồng một số loại cây trồng mới"
          image={rau_img}
          content="Dạo gần đây có một số loại cây trồng mới cho ra nhiều năng suất cao hơn..."
        />
        <TinTucCard
          title="Cách trồng một số loại cây trồng mới"
          image={rau_img}
          content="Dạo gần đây có một số loại cây trồng mới cho ra nhiều năng suất cao hơn..."
        />
        <TinTucCard
          title="Cách trồng một số loại cây trồng mới"
          image={rau_img}
          content="Dạo gần đây có một số loại cây trồng mới cho ra nhiều năng suất cao hơn..."
        />
        <TinTucCard
          title="Cách trồng một số loại cây trồng mới"
          image={rau_img}
          content="Dạo gần đây có một số loại cây trồng mới cho ra nhiều năng suất cao hơn..."
        />
        <TinTucCard
          title="Cách trồng một số loại cây trồng mới"
          image={rau_img}
          content="Dạo gần đây có một số loại cây trồng mới cho ra nhiều năng suất cao hơn..."
        />
        <TinTucCard
          title="Cách trồng một số loại cây trồng mới"
          image={rau_img}
          content="Dạo gần đây có một số loại cây trồng mới cho ra nhiều năng suất cao hơn..."
        />
        <TinTucCard
          title="Cách trồng một số loại cây trồng mới"
          image={rau_img}
          content="Dạo gần đây có một số loại cây trồng mới cho ra nhiều năng suất cao hơn..."
        />
        <TinTucCard
          title="Cách trồng một số loại cây trồng mới"
          image={rau_img}
          content="Dạo gần đây có một số loại cây trồng mới cho ra nhiều năng suất cao hơn..."
        />
        
         </div>

        </div>
      );
}
export default (NEWS);