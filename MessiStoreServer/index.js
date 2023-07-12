const express = require('express')

const cors=require('cors')

const dataService = require('./Services/dataService')

const app = express()

//to parse JSON
app.use(express.json())

app.listen(3000,()=>{
    console.log('listening to port 3000')
})

app.use(cors({
    origin:'http://localhost:4200'
}))

app.get('/item',(req,res)=>{
    dataService.get()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/jogger',(req,res)=>{
    dataService.jogger()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/outer',(req,res)=>{
    dataService.outer()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/hoddy',(req,res)=>{
    dataService.hoddy()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/graphic',(req,res)=>{
    dataService.graphic()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/kid',(req,res)=>{
    dataService.kid()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/messi',(req,res)=>{
    dataService.messi()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/underwear',(req,res)=>{
    dataService.underwear()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/addswish',(req,res)=>{
    dataService.addwish(req.body.id,req.body.type,req.body.name,req.body.image,req.body.image2,req.body.image3,req.body.image4,req.body.price,req.body.model,req.body.discription)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/getwishlist',(req,res)=>{
    dataService.getWishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.delete('/delete/:id',(req,res)=>{
    dataService.deletewish(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result) 
    })
})