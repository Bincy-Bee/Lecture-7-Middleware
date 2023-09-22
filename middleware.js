
const auth=(req, res, next)=>{

    const {emailid, password} = req.body;

    if( emailid == "bhavin@gmail.com" && password == "12345"){
        next();
    }
    else{
        res.send("Email & Password id wrong")
    }
}

module.exports= auth; 