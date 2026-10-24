import mongoose from "mongoose";
const DBURL = `mongodb+srv://rahul_mern:rahul_mongodb@mycluster.v1jpya5.mongodb.net/sports_db`

export function dbConnect(){

    try{
        mongoose.connect(DBURL)
        console.log("DataBase Connected successfully");


    }
    catch{

        console.log("DB connect error"+error)
    }


}