export function coachLogin(request,response){
    const clientData = request.body

    const {username,password}= clientData
    console.log("Coach email"+username)
    console.log("Coach Password"+password)

    if(username === "coach@gmail.com" && password === "Rahul@123")
        response.json({"message":"🎉😊Welcome Coach Profile","token":username,"status":"Ok"})

    else 
        response.json({"message":"Invalid userId😔"})   


    // response.json({"message":"Login done successfully","token":"coach"})


}