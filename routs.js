
console.log("ROUTS FILE LOADED");
const exprees = require("express")

const  router = exprees.Router()

const auth = function(req,res,next){
    console.log("i am inside authwala middleware")

    req.user ={userid:1,role:"student"}

    if(req.user){
        next()
    }
    else{
        res.json({
            succes:false,
            Message:"not valid in this"
        })
    }


}

const isstudent = function(req,res,next){
    console.log("I am inside student wala middleware")

    if(req.user.role==="student"){
        next()
    }
    else{
        res.json({
            succes:false,
            Message:"access denied"
        })
    }
}
const isadmin = function(req,res,next){
    console.log("i am inside isadmin wala middleware")

    if(req.user.role=="admin")
        next()
    else{
        res.json({
            succes:false,
            Message:"Access is Denied your roter is not in admin"
        })
    }
}

 

// router.get("/student",auth,isstudent,(req,res)=>{
//     console.log(" I am inside student router")
//     res.send("specific in student page")

// })

// router.get("/admin",auth,isadmin,(req,res)=>{
//     console.log("i am inside admin router")
//     res.send("specific in admin page")
// })


// module.exports=router



 




const express = require("express");

const router = express.Router();

router.get("/student", (req, res) => {
    res.send("Student page");
});

router.get("/admin", (req, res) => {
    res.send("Admin page");
});

module.exports = router;