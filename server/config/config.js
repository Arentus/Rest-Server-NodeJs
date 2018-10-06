



// ===========================
//	 Puerto
// ===========================
// nota: esta configuración se hace para cambiar de ambiente de desarrollo a producción
// en heroku 

process.env.PORT = process.env.PORT || 3000; //process.env.PORT sera definida por Heroku
// en otro caso el puerto 3000 sera el puerto.