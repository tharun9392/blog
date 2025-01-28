const jwt=require('jsonwebtoken')
require('dotenv').config()

function verifyToken(req,res,next)
{
    //get bearer token from headers of req..
    const bearerToken=req.headers.authorization;
    //if bearer token is not available
    if(!bearerToken)
    {
        return res.send({message:"Unauthorized Access. please login to continue.."})
    }
    //extract token from bearer token
    const token=bearerToken.split(' ')[1]
    try{
        jwt.verify(token,process.env.SECURITY_KEY)
        next();
    }
    catch(err)
    {
        next(err)
    }

}

module.exports=verifyToken;