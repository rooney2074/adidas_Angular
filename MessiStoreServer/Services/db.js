const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/messi',()=>{
    console.log('mongoose connected')
})

const Item = mongoose.model('item',{
    id:Number,
    type:String,
    name:String,
    image:String,
    image2:String,
    image3:String,
    image4:String,
    price:Number,
    model:String,
    discription:String
})

const Wish = mongoose.model('Wish',{
    id:Number,
    type:String,
    name:String,
    image:String,
    image2:String,
    image3:String,
    image4:String,
    price:Number,
    model:String,
    discription:String
})

module.exports={
    Item,Wish
}