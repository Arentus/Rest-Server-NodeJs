require('./config/config.js');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //middleware
// parse application/json
app.use(bodyParser.json()); //middleware (tuberia por el que pasan los datos a la app)

app.get('/', function (req, res) {
  
  res.json('Hello World');
});

app.get('/usuario', function (req, res) {
  res.json("GET: USUARIOS");
}); // obtener datos

app.post('/usuario', function (req, res) {

	let body = req.body; // esta linea se puede hacer gracias al bodyparser

	if (body.nombre === undefined) {
		res.status(400).json({
			ok:false,
			mensaje:'El nombre es necesario.'
		});
	}else{
		res.json({
			persona:body
		});
	}

	

}); //CREAR NUEVOS REGISTROS

app.put('/usuario/:id', function (req, res) {
  
  let req_id = req.params.id; // este debe hacer match con el parametro de la URL

  res.json({
  	req_id
  });

}); //ACTUALIZAR REGISTROS

app.delete('/usuario', function (req, res) {
  res.json("DELETE: USUARIOS");
}); //BORRAR REGISTROS


app.listen(process.env.PORT,()=>{
	console.log('Escuchando el puerto',3000);
});