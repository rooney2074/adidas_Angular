const db = require('./db')

const get =()=>{
    return db.Item.find({type:"polo"}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

const jogger =()=>{
    return db.Item.find({type:"joggers"}).then(
        (result)=>{
            if(result){
                return {
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

const outer =()=>{
    return db.Item.find({type:"outer"}).then(
        (result)=>{
            if(result){
                return {
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}
const hoddy =()=>{
    return db.Item.find({type:"hoddies"}).then(
        (result)=>{
            if(result){
                return {
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

const graphic =()=>{
    return db.Item.find({type:"graphic"}).then(
        (result)=>{
            if(result){
                return {
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

const kid =()=>{
    return db.Item.find({type:"kids"}).then(
        (result)=>{
            if(result){
                return {
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

const messi =()=>{
    return db.Item.find({type:"messi"}).then(
        (result)=>{
            if(result){
                return {
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

const underwear =()=>{
    return db.Item.find({type:"underwear"}).then(
        (result)=>{
            if(result){
                return {
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

const addwish =(id,type,name,image,image2,image3,image4,price,model,discription)=>{
    return db.Wish.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Item already exsist"
                }
            }else{
                const Product = new db.Wish({id,type,name,image,image2,image3,image4,price,model,discription})
                Product.save()
                return{
                    status:false,
                    statusCode:400,
                    message:"Item added successfully"
                }
            }
        }
    )
}

const getWishlist =()=>{
    return db.Wish.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your watch list is Empty'
                }
            }
        }
    )
}

const deletewish=(id)=>{
    return db.Wish.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Item removed"
                }
        }
        else{
            return{
                status:false,
                statusCode:400,
                message:"Your Watch list is empty"
            }
        }
    }
    )
}

module.exports={
    get,jogger,outer,hoddy,graphic,kid,messi,underwear,addwish,getWishlist,deletewish
}