const getJSONData=function(){
    fetch("./data.json")
        .then((response)=>response.json())
        .then(value=function(){
            return value;
        });
}

const previousBtnElement = document.getElementById('previous');
if (previousBtnElement) {
    previousBtnElement.addEventListener("click", ()=> {
        console.log(getJSONData());
        
    });
}
