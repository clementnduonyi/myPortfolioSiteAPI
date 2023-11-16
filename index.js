const express = require('express');
const server = express();
const bodyParser = require('body-parser');



async function startServer(){
    await require('./db').connect();

    server.use(bodyParser.json())

    const projectsRoutes = require('./routes/projects');
    const blogRoutes = require('./routes/blogs');
    const imageUploadRouts = require('./routes/images');
    const categoryRoutes = require('./routes/categories');
    

    server.use('/api/v1/projects', projectsRoutes);
    server.use('/api/v1/blogs', blogRoutes);
    server.use('/api/v1/categories', categoryRoutes);
    server.use('/api/v1/images', imageUploadRouts);
   
    
    server.get('/app', (req, res)=>{
        res.json("Welcome to my API")
    })

    server.get('', (req, res)=>{
        res.sendFile('index.html', {root: __dirname})
    })
    

    const PORT = parseInt(process.env.PORT, 10) || 3001;
    server.listen(PORT, (error) =>{
        if(error) console.error(error);
        console.log("Server running on port ", PORT)
    })
}


startServer();