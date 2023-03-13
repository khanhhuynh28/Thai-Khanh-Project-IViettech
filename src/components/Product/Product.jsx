import './style.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { buyProduct } from '../../stores/action/cart.action';

function Product(props) {
    const product_current = {
        id: props.id,
        srcImage: props.srcImage,
        title: props.title,
        price: props.price,
        status: props.status
    }

    return (
        <div className="product-list">
            <div className="container-product_item" >
                <div className='product-item'>
                    <Link to={`product/${props.id}`}>
                        <div className="image">
                            <img
                                className="image-item"
                                src={props.srcImage}
                                alt={props.srcImage}
                            />
                        </div>
                        <div className='describe'>
                            <div className="name">
                                <p>{props.title}</p>
                            </div>
                            <div className="price">
                                <p>₫{props.price.toLocaleString()}</p>
                            </div>
                            <div className="status">
                                <p>{props.status}</p>
                            </div>

                        </div>
                    </Link>
                    <div className="btn-buy">
                        <button onClick={() => props.buyProduct(product_current)}>
                            <p>Thêm vào<img src="https://cdn.pixabay.com/photo/2015/10/22/16/42/icon-1001596_960_720.png" alt="" width={25} /></p>
                        </button>
                    </div>
                </div>


            </div>


        </div >

    );
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        buyProduct: (product_current) =>
            dispatch(buyProduct(product_current)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
