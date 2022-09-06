const express = require('express');
const path = require('path');
const app = express();

//const publicPath = path.join(__dirname, '/public');
//const publicPath = path.resolve(__dirname, './public')

app.use(express.static(path.resolve(__dirname, './public')));

// app.get('/', (req,res) =>{ 
//     res.send("Cambie");  // Permite enviar texto o codigo HTML
// });

// app.get('/mostrar_mensaje', (req,res) =>{ 
//     res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
// });

app.get('/', (req,res) =>{ 
    res.sendFile((__dirname + '/views/home.html'));  
});

app.get('/login', (req,res) =>{
   res.sendFile((__dirname + '/views/login.html')) 
});

app.get('/register', (req,res) =>{
    res.sendFile((__dirname + '/views/register.html')) 
 });

app.get('*', (req,res) =>{ 
    res.send('Ruta no definida');  // Permite enviar texto o codigo HTML
});

app.listen(process.env.PORT || 3000, () =>
    console.log('Servidor corriendo en el puerto 3000')
);
