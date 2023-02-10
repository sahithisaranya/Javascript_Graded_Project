class Resume{
    constructor(){}
    
    getJSONData(){
        return fetch("./data.json")
            .then((response)=>{
                return response.json()
            })
            .then((responseAsJson)=>{
                console.log(responseAsJson)
                return responseAsJson;
            })
            .catch((error)=>{
                console.log("Error in reading the Json file");
                console.log(error);
                return;
            })
    }
    
}

export{Resume}