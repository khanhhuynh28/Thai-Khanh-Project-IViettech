import React from 'react';
import "./style/carousel.scss";
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
    return (
        <div className="containerCarousel">
            <div className="carousels">
                <MDBCarousel showIndicators showControls fade>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src='https://cdn.thuvienphapluat.vn/uploads/lawnews/2022/02/21/39496/KHUY%E1%BA%BEN%20M%E1%BA%A0I.png?w=480&h=280'
                        alt='...'

                    >
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src='https://www.chili.vn/blogs/wp-content/uploads/2018/04/14-chieu-khuyen-mai-giup-ban-bung-no-doanh-so-03-e1523256143314.jpg'
                        alt='...'

                    >
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src='https://standachinhhang.vn/wp-content/uploads/2020/09/%E1%BA%A3nh-khuy%E1%BA%BFn-m%C3%A3i-Mi%E1%BB%85n-ph%C3%AD-v%E1%BA%ADn-chuy%E1%BB%83n-to%C3%A0n-qu%E1%BB%91c-1-min.jpg'
                        alt='...'

                    >
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
        </div>
    );
}
