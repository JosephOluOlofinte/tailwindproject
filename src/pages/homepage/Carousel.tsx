
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../components/Card";

export const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
      };

    return (
        <div className="w-full min-h-[50vh] py-[30px] bg-gray-300 flex justify-center items-center">
            <div className="w-[95%] ">
                <Slider {...settings} className="">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Slider>
            </div>
        </div>
    )
}