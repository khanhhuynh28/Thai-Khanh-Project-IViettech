import "./carousel.scss";
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

function Carousel() {
    return (
        <div className="containerCarousel">
            <div className="carousels">
                <MDBCarousel showControls fade>
                    <MDBCarouselItem
                        className='w-100 d-block image'
                        itemId={1}
                        src='https://haycafe.vn/wp-content/uploads/2022/11/anh-sale-vao-mua-thu.jpg'
                        alt='...'
                    >
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block image'
                        itemId={2}
                        src='https://phunugioi.com/wp-content/uploads/2022/06/Banner-sale.jpg'
                        alt='...'
                    >
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block image'
                        itemId={3}
                        src='https://png.pngtree.com/png-vector/20200820/ourlarge/pngtree-special-offer-final-sale-banner-design-png-image_2327826.jpg'
                        alt='...'
                    >
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
        </div >
    );
}
export default Carousel;
