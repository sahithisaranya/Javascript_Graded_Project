import { Resume } from "./resume-api.js";

class ResumeApp{
    constructor(){
        console.log("resumeapp constructor called");
        
    }
    init(){
        // const bodyElement=document.querySelector(".resume-body");
        // bodyElement.style.backgroundColor="red";
        window.history.forward();
        this.addEventHandlers();
    }

//     const previousBtnElement = document.getElementById('previous');
// if (previousBtnElement) {
//     previousBtnElement.addEventListener("click", ()=> {
//         resumeData=getJSONData();
//         console.log(resumeData);
        
//     });
// }
    addEventHandlers(){
        console.log("addeventhandlers called");
        const resume=new Resume();
        resume.getJSONData().then((response)=>{
            console.log(response);
            this.updateControls(response);
        })
       
    }

    updateControls(jsonData){
        const nameElement=document.querySelector(".applicant-name");
        nameElement.innerHTML=`${jsonData.resume[0].basics.name}`;

        const appliedForElement=document.querySelector(".applied-for");
        appliedForElement.innerHTML=`${jsonData.resume[0].basics.AppliedFor}`;

        // const applicantImg=document.querySelector(".applicant-img");
        // if(`${jsonData.resume[0].basics.image}`===""){
        //     applicantImg.src=`${jsonData.resume[0].basics.image}`;
        // }
        // else{
        //     applicantImg.src="./applicant.png"
        // }   
            

        const personalInfoElement=document.querySelector(".personal-info");
        personalInfoElement.innerHTML=`
        <p style="color:black;text-align:right;font-size: 12px;font-weight: bolder;">${jsonData.resume[0].basics.phone}</p>
        <p style="color:black;text-align:right;font-size: 12px;font-weight: bolder;">${jsonData.resume[0].basics.email}</p>
        <a style="color:red;float:right;font-size: 12px;font-weight: bolder;" 
        href="${jsonData.resume[0].basics.profiles.url}">${jsonData.resume[0].basics.profiles.network}</a><br>`;

        const techSkillsElement=document.querySelector(".technical-skills");
        let skillsText="";
        for(let i=0;i<jsonData.resume[0].skills.keywords.length;i++){
            skillsText+=jsonData.resume[0].skills.keywords[i]+"<br>";
        }
        techSkillsElement.innerHTML=`
        <p style="color:black;text-align:right;font-size: 12px;font-weight: bolder;">${skillsText}</p>
        `;
       
        const hobbiesElement=document.querySelector(".hobbies");
        let hobbiesText="";
        for(let i=0;i<jsonData.resume[0].interests.hobbies.length;i++){
            hobbiesText+=jsonData.resume[0].interests.hobbies[i]+"<br>";
        }
        hobbiesElement.innerHTML=`
        <p style="color:black;text-align:right;font-size: 12px;font-weight: bolder;">${hobbiesText}</p>
        `

        const workexpElement=document.querySelector(".exp-prev-company");
        workexpElement.innerHTML=`
            <p><b>Company Name: </b>${jsonData.resume[0].work["Company Name"]}</p>
            <p><b>Position: </b>${jsonData.resume[0].work["Position"]}</p>
            <p><b>Start Date: </b>${jsonData.resume[0].work["Start Date"]}</p>
            <p><b>End Date: </b>${jsonData.resume[0].work["End Date"]}</p>
            <p><b>Summary: </b>${jsonData.resume[0].work["Summary"]}</p>`

        const projectsElement=document.querySelector(".projects");
        projectsElement.innerHTML=`
        <p><b>${jsonData.resume[0].projects["name"]}</b>${jsonData.resume[0].projects["description"]}</p>`

        const educationElement=document.querySelector(".education");
        educationElement.innerHTML=`
        <ul>
            <li><b>UG: </b> ${jsonData.resume[0].education["UG"]["institution"]}, ${jsonData.resume[0].education["UG"]["course"]}, ${jsonData.resume[0].education["UG"]["Start Date"]}, ${jsonData.resume[0].education["UG"]["End Date"]}, ${jsonData.resume[0].education["UG"]["cgpa"]}</li>
            <li><b>PU: </b> ${jsonData.resume[0].education["Senior Secondary"]["institute"]}, ${jsonData.resume[0].education["Senior Secondary"]["cgpa"]}</li>
            <li><b>High School: </b> ${jsonData.resume[0].education["High School"]["institute"]}, ${jsonData.resume[0].education["High School"]["cgpa"]}</li>
        </ul>`

        const internshipElement=document.querySelector(".internship");
        internshipElement.innerHTML=`
        <ul>
            <li><b>Company Name: </b> ${jsonData.resume[0].Internship["Company Name"]}</li>
            <li><b>Position: </b> ${jsonData.resume[0].Internship["Position"]}</li>
            <li><b>Start Date: </b> ${jsonData.resume[0].Internship["Start Date"]}</li>
            <li><b>End Date: </b> ${jsonData.resume[0].Internship["End Date"]}</li>
            <li><b>Summary: </b> ${jsonData.resume[0].Internship["Summary"]}</li>
        </ul>`

        const achievementsElement=document.querySelector(".achievements");
        let achievementsText="<ul>";
        for(let i=0;i<jsonData.resume[0].achievements["Summary"].length;i++){
            achievementsText+=`<li>${jsonData.resume[0].achievements["Summary"][i]}</li>`;
        }
        achievementsText+="</ul>";
        achievementsElement.innerHTML=achievementsText;

    }
}

export {ResumeApp}