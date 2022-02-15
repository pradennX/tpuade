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
                    <li class="nav-item">
                      <a class="nav-link" href="index.html">Home
                        <span class="sr-only">(current)</span>
                      </a>
                    </li> 
                    <li class="nav-item active">
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

class Banner extends React.Component{
    render(){
        return(
        <div id="banner">
            <div class="page-heading products-heading header-text">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="text-content">
                      <h4>new arrivals</h4>
                      <h2>sportswear store</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
        </div>
        );
    }
}



class App extends React.Component {

  render(){
      return(
          <div>
              <h1 class="tituloAPP">Productos</h1>
              <Productos/>
          </div>
      );
  }

}

class Productos extends React.Component {

  constructor(props){
      super(props);
      this.state = {productos: null, productoInd: null}
  }

  componentDidMount(){
      this.obtenerProductos();
  }

  obtenerProductos(){

      let resp = axios.get("http://localhost:3050/productos");
      resp.then((x) => {
          //console.log(x.data);
          this.setState({productos: x.data});
      }).catch((err) => {
          console.log(err);
      })

  }

  obtenerProductoPorId(id){
      let resp = axios.get("http://localhost:3050/productos/" + id);
      resp.then((x) => {
          console.log(x.data);
          this.setState({productoInd: x.data});
      }).catch((err) => {
          console.log(err);
      })
  }

  handlerClick(event){
      let id = event.target.getAttribute("data-id");
      this.obtenerProductoPorId(id);
      // TODO: Actualizar vista
  }

  render(){

      let html;
      if(this.state.productos == null){
          html = <p>Cargando productos</p>
      } else {
          html = (        
              <ul>
                  {this.state.productos.map(x => {
                      return <li onClick={this.handlerClick.bind(this)} data-id={x.id}>
                              <div class="latest-products">
                                <div class="container">
                                  <div class="row">
                                    <div class="col-md-4">
                                      <div class="product-item product-item2">
                                        <a href="#"><img src={x.imagenesProductos} alt={x.descripcionProductos}/></a>
                                        <div class="down-content">
                                          <a href="#"><h4 >{x.tituloProductos}</h4></a>
                                          <h6>{x.precioProductos}</h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>  
                                </div>
                              </div>
                      </li>
                  })}
              </ul>
          ) 
      }

      return html;

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

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Banner/>, document.getElementById('banner'));
ReactDOM.render(<App/>, document.getElementById('productos'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));