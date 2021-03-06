const express = require('express')
const mysql = require('mysql');
const PORT = process.env.PORT || 3050;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const app = express();

app.use('/', express.static(__dirname));
app.use('/', express.static(__dirname + '/img'));




app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

var bodyParser = require('body-parser');
app.use(bodyParser.json());


const connection = mysql.createConnection({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b53c09e893d6af',
  password: '2ffb44e7',
  database: 'heroku_76f97eed50c8edd'
});


connection.connect(error => {
  if (error) throw error;
  console.log('Database server running!')
})

//Rutas

app.get('/', (req, res)=>{
  var html = ReactDOM.renderToString(
    React.createElement(indexReact)
  );
  res.send(html); 
});

//Todos los productos

app.get('/productos', (req, res)=>{
  const sql = 'SELECT * FROM new_table';
  connection.query(sql, (error, resultado)=>{
    if (error) throw error;
    if (resultado.length > 0){
      res.json(resultado);
    }else {
      res.send('No hay resultados')
    }
  })
  
});

app.get('/productos/:id', (req, res)=>{

  const { id } = req.params;
  const sql = `SELECT * FROM new_table WHERE idProductos = ${id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;

    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('Not result');
    }
  });

});

app.post('/add', (req, res) => {
  const sql = 'INSERT INTO new_table SET ?';

  const productoObj = {
    tituloProductos: req.body.tituloProductos,
    descripcionProductos: req.body.descripcionProductos,
    precioProductos: req.body.precioProductos
  };

  connection.query(sql, productoObj, error => {
    if (error) throw error;
    res.send('Producto creado!');
  });
  
});

app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { tituloProductos, descripcionProductos, precioProductos } = req.body;
  const sql = `UPDATE new_table SET tituloProductos = '${tituloProductos}', descripcionProductos='${descripcionProductos}', precioProductos = '${precioProductos}' WHERE idProductos =${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send('Producto actualizado');
  });
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM new_table WHERE idProductos= ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send('Producto borrado');
  });
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));