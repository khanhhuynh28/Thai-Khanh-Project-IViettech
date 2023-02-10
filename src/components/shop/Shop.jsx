import "./style.scss";
function Shop() {
  return (
    <div className="containerShop">
      <div className="home-section">

        <section class="padding-y">
          <div class="container">

            <div class="row">
              <main class="col-lg-7">

                <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                  <strong class="d-block py-2">Tin đăng mới</strong>
                  <div class="ms-auto ">
                    <select class="form-select d-inline-block w-auto me-1">
                      <option value="0">Best match</option>
                      <option value="1">Recommended</option>
                      <option value="2">High rated</option>
                      <option value="3">Randomly</option>
                    </select>
                    <div class="btn-group">
                      <a href="#" class="btn btn-light" data-bs-toggle="tooltip" title="List view">
                        <i class="fa fa-bars"></i>
                      </a>
                      <a href="#" class="btn btn-light active" data-bs-toggle="tooltip" title="Grid view">
                        <i class="fa fa-th"></i>
                      </a>
                    </div>
                  </div>
                </header>


                <div class="row">
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <figure class="card card-product-grid">
                      <div class="img-wrap image"></div>
                      <figcaption class="info-wrap border-top">
                        <div class="price-wrap">
                          <strong class="price">$99.00</strong>
                          <del class="price-old">$170.00</del>
                        </div>
                        <p class="title mb-2">T-shirts with multiple colors, for men and lady</p>

                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <a href="#" class="btn btn-light btn-icon"> <i class="fa fa-heart"></i> </a>
                      </figcaption>
                    </figure>
                  </div>

                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <figure class="card card-product-grid">
                      <div class="img-wrap">
                        <img src="assets/images/items/11.webp" />
                      </div>
                      <figcaption class="info-wrap border-top">
                        <div class="price-wrap">
                          <strong class="price">$120.00</strong>
                        </div>
                        <p class="title mb-2">Winter Jacket for Men and Women, All sizes</p>

                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <a href="#" class="btn btn-light btn-icon"> <i class="fa fa-heart"></i> </a>
                      </figcaption>
                    </figure>
                  </div>

                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <figure class="card card-product-grid">
                      <div class="img-wrap">
                        <img src="assets/images/items/12.webp" />
                      </div>
                      <figcaption class="info-wrap border-top">
                        <div class="price-wrap">
                          <strong class="price">$120.00</strong>
                        </div>
                        <p class="title mb-2">T-shirts with multiple colors, for men and lady</p>

                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <a href="#" class="btn btn-light btn-icon"> <i class="fa fa-heart"></i> </a>
                      </figcaption>
                    </figure>
                  </div>

                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <figure class="card card-product-grid">
                      <div class="img-wrap">
                        <img src="assets/images/items/9.webp" />
                      </div>
                      <figcaption class="info-wrap border-top">
                        <div class="price-wrap">
                          <strong class="price">$120.00</strong>
                        </div>
                        <p class="title mb-2">T-shirts with multiple colors, for men and lady</p>

                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <a href="#" class="btn btn-light btn-icon"> <i class="fa fa-heart"></i> </a>
                      </figcaption>
                    </figure>
                  </div>

                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <figure class="card card-product-grid">
                      <div class="img-wrap">
                        <img src="assets/images/items/14.webp" />
                      </div>
                      <figcaption class="info-wrap border-top">
                        <div class="price-wrap">
                          <strong class="price">$510.00</strong>
                        </div>
                        <p class="title mb-2">Blazer Suit Dress Jacket for Men, Blue color</p>

                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <a href="#" class="btn btn-light btn-icon"> <i class="fa fa-heart"></i> </a>
                      </figcaption>
                    </figure>
                  </div>

                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <figure class="card card-product-grid">
                      <div class="img-wrap">
                        <img src="assets/images/items/10.webp" />
                      </div>
                      <figcaption class="info-wrap border-top">
                        <div class="price-wrap">
                          <strong class="price">$79.99</strong>
                        </div>
                        <p class="title mb-2">Rucksack Backpack The Bridge Large Line Mounts</p>

                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <a href="#" class="btn btn-light btn-icon"> <i class="fa fa-heart"></i> </a>
                      </figcaption>
                    </figure>
                  </div>

                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <figure class="card card-product-grid">
                      <div class="img-wrap">
                        <img src="assets/images/items/11.webp" />
                      </div>
                      <figcaption class="info-wrap border-top">
                        <div class="price-wrap">
                          <strong class="price">$120.00</strong>
                        </div>
                        <p class="title mb-2">T-shirts with multiple colors, for men and lady</p>

                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <a href="#" class="btn btn-light btn-icon"> <i class="fa fa-heart"></i> </a>
                      </figcaption>
                    </figure>
                  </div>

                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <figure class="card card-product-grid">
                      <div class="img-wrap">
                        <img src="assets/images/items/12.webp" />
                      </div>
                      <figcaption class="info-wrap border-top">
                        <div class="price-wrap">
                          <strong class="price">$120.00</strong>
                        </div>
                        <p class="title mb-2">T-shirts with multiple colors, for men and lady</p>

                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <a href="#" class="btn btn-light btn-icon"> <i class="fa fa-heart"></i> </a>
                      </figcaption>
                    </figure>
                  </div>

                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <figure class="card card-product-grid">
                      <div class="img-wrap">
                        <img src="assets/images/items/9.webp" />
                      </div>
                      <figcaption class="info-wrap border-top">
                        <div class="price-wrap">
                          <strong class="price">$43.50</strong>
                        </div>
                        <p class="title mb-2">Summer New Men's Denim Jeans Shorts </p>

                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <a href="#" class="btn btn-light btn-icon"> <i class="fa fa-heart"></i> </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <hr />

                <footer class="d-flex mt-4">

                  <nav class="ms-3">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item active" aria-current="page">
                        <span class="page-link">2</span>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>
                </footer>

              </main>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}
export default Shop;