const express = require('express');
const db = require('./models/Users');
const app = express();
const port = 3000; 
app.use(express.json());
app.use(express.urlencoded({
extended: true
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/create', async (req, res) => {

    try {
      
      const value= await db.create({
  
        id: req.body.id,
        title: req.body.title,
        playbackUrls:req.body.playbackUrls,
        description :req.body.description,
        category_id:req.body.category_id
  
      });
      console.log(value,'tfghj')
      res.send('User added');
  
    } catch (error) {
        console.log(error,'error')
      res.json(error);
    }
  
  });
  app.get('/VideoList', async (req, res) => {

    try {
  
      let getVideoList = await db.findAll();
  console.log(getVideoList,'list')
      if (!getVideoList) {
        res.send('Video List found')
      }
  
      res.send(getVideoList);
  
    } catch (error) {
      res.json(error);
    }
  
  });
  
app.get('/VideoList/:category_id', async (req, res) => {

    try {
  
      let categoryList = await db.findAll({
        where: {
            category_id: req.params.category_id
        }
      })
     let url= categoryList.map((data)=>{
        return data.playbackUrls;
      })
    
      if (!url) {
        res.send('Video list for this category id not found');
      }
  
      res.send(url);
  
    } catch (error) {
      res.json(error);
    }
  
  });

db.sequelize.sync().then((res) => {

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })

})

// Define a simple model


// Synchronize the model with the database
