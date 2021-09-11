const app = require('express')();
const PORT = 3001;

app.get('/', (req,res) => {
  res.json({health: true});
})

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }else{
    console.log(`server running on Port: ${PORT}`);
  }
})