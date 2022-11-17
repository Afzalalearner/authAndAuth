const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const fileStream=require('./utils/requestLogging')
const bodyParser=require('body-parser')

const app = express();

const homeRouter = require('./routers/homeRouter')
const userRouter=require('./routers/userRouter');
const productRouter=require('./routers/productRouter')
const auth=require('./utils/auth')

const port = process.env.port || 3000;
app.listen(port, () => { console.log(`Server Listening on port ${port}...`) })


mongoose.connect('mongodb://127.0.0.1:27017/myapp',
    () => { console.log(`Connected to DB`) },
    (err) => { console.error(err) })

app.use(bodyParser.json());
app.use(morgan('combined',{stream:fileStream}))

//public routes
app.use('/', homeRouter)
app.use('/api/users',userRouter)


app.use(auth.basicAuth)

//private routes
app.use('/api/products',productRouter)
app.get('*', (req, res) => {
    res.status(404)
    res.send('Page Not Found')
})



