import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { appRoute } from '../../../const/routes.const';
import { buyProduct } from '../../../stores/action/cart.action';
import './style.scss';

const ProductDetail = (props) => {
    const [productDetail, setProductDetail] = useState({});
    const { id } = useParams();


    async function fetchData() {
        const response = await axios.get(`http://localhost:3050/api/products/${id}`).then((res) => {
            setProductDetail(res.data, {
                ...productDetail,
            });
        });
        return response;
    }
    useEffect(() => {
        fetchData();
    }, []);
    const { srcImage, title, shortDecription, category, status, price } = productDetail;
    const check = Object.keys(productDetail).length === 0;
    const product_current = {
        id: id,
        srcImage: srcImage,
        title: title,
        price: price,
        status: status
    }
    return (
        <>
            {check === false && (
                <div className="container-product-detail">
                    <div className="product-detail">
                        <div className="cards">
                            <div className="card-product-detail">
                                <h4 className="title">Chi tiết sản phẩm</h4>

                                <div className="wrapper row">
                                    <div className="preview col-md-6">
                                        <div className="preview-pic tab-content">
                                            <div className="tab-pane active" id="pic-1">
                                                <img className="main-image" src={srcImage} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details col-md-6">
                                        <h3 className="product-title">{title}</h3>
                                        <p className="product-description">{shortDecription}</p>
                                        <div className="card-detail">
                                            <p className='price'>Giá gốc:
                                                <span>30000</span></p>
                                            <p className="price">
                                                Giá bán: <span> ₫{price.toLocaleString()}</span>
                                            </p>
                                            <div className="product-category all-detail">
                                                <p className="detail">Loại:</p>
                                                <span className="category information">
                                                    {category}
                                                </span>
                                            </div>
                                            <div className="all-detail">
                                                <p className="detail">Trạng thái:</p>
                                                <span className="information status">{status}</span>
                                            </div>

                                            <div className="action">
                                                <button className="add-to-cart btn btn-default" onClick={() => props.buyProduct(product_current)}>
                                                    Thêm vào giỏ hàng
                                                </button>
                                                <Link to={appRoute.shoppingCart}>
                                                    <button className="like btn btn-default">
                                                        Giỏ hàng
                                                    </button>

                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='descriptions'>
                            <h5 className='title-description'>
                                Mô tả sản phẩm
                            </h5>
                            <p className='short-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore iste, illum reiciendis ex atque beatae natus itaque est dolore. Eveniet qui hic distinctio consectetur molestiae optio dignissimos velit modi.
                                Hic rerum vero, quisquam et placeat necessitatibus ipsum mollitia maiores distinctio, fugit sapiente ex ipsam eaque illum alias minus nemo omnis enim. Nostrum perferendis beatae iusto natus fugit veritatis dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque totam accusantium temporibus similique quae laborum officiis dignissimos consequatur natus omnis quidem quis non sequi, neque, laudantium debitis eos inventore quia.
                                Quidem sequi eligendi nemo enim rem, ea fugiat voluptate minima soluta, beatae sed! Temporibus tempora dolorem officia non quia aliquid iusto, porro repellendus! Dicta nemo accusamus ipsa incidunt tenetur sed.
                                Ad quos possimus adipisci, libero, optio voluptatibus numquam nobis voluptatem impedit porro laudantium. Ad repellat eius nesciunt, ab magni corrupti voluptate delectus explicabo, voluptas enim, nulla necessitatibus! Beatae, enim qui.
                                Sit ducimus asperiores maiores earum optio libero dolor, inventore id consequuntur commodi unde voluptatum quod eos aut qui quae itaque iure. Earum quod necessitatibus ratione voluptatem accusamus veritatis numquam harum!</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyProduct: (product_current) =>
            dispatch(buyProduct(product_current)),
    };
};


export default connect(null, mapDispatchToProps)(ProductDetail);
