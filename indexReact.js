class Header extends React.Component{
    render(){
        return(
            <header class="">
            <nav class="navbar navbar-expand-lg">
              <div class="container">
                <a class="navbar-brand" href="index.html"><h2>Sportswear <em>Store</em></h2></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="index.html">Home
                        <span class="sr-only">(current)</span>
                      </a>
                    </li> 
                    <li class="nav-item">
                      <a class="nav-link" href="products.html">Our Products</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        );
    }
}

class Footer extends React.Component{
    render(){
        return(
        <footer>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="inner-content">
                    <p>Copyright &copy; 2021 Sportswear Store Co., Ltd. - Design: Juan Segundo Schmid Aguerre</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}

class Products extends React.Component{
  render(){
    return(
      <div class="latest-products">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Latest Products</h2>Estos productos son pura decoracion, los del tp estan en "view all products"
              <a href="products.html">view all products <i className="fa fa-angle-right"></i></a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product-item">
              <a href="#"><img src="img/product1.jpg" alt="Remera Reebok"/></a>
              <div class="down-content">
                <a href="#"><h4>Reebok T-Shirt For Men</h4></a>
                <h6>$29.99</h6>
                <ul class="stars">
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                </ul>
                <span></span> 
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product-item">
              <a href="#"><img src="img/product2.jpg" alt="Short Nike Dry Fit"/></a>
              <div class="down-content">
                <a href="#"><h4>Short Nike Dry Fit</h4></a>
                <h6>$25.50</h6>
                <ul class="stars">
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product-item">
              <a href="#"><img src="img/product3.jpg" alt="Under Armour T-Shirt"/></a>
              <div class="down-content">
                <a href="#"><h4>Under Armour T-Shirt</h4></a>
                <h6>$27.45</h6>
                <ul class="stars">
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                  <li><i class="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

ReactDOM.render(<Header/>, document.getElementById("header"));
ReactDOM.render(<Footer/>, document.getElementById("footer"));
ReactDOM.render(<Products/>, document.getElementById('products'))