import { Resume } from "./resume-api.js";

class ResumeApp {


    constructor() {
        console.log("resumeapp constructor called");
        this.id = 0;
        let json;
        this.json = json;
    }
    init() {
        this.id = 0;
        this.loadJsonFile();
    }

    loadJsonFile() {

        const resumeObj = new Resume();
        resumeObj.getJSONData().then((response) => {
            this.json = response;
            if (response.resume.length > 0) {
                document.getElementById("previous").disabled = true;
                document.getElementById("next").disabled = false;
            }
            this.updateControls(this.json);
            this.addEventListeners();
        });
    }

    addEventListeners() {
        console.log("addeventhandlers called");
        console.log(this.json);
        const prevBtnElement = document.getElementById("previous");
        const nextBtnElement = document.getElementById("next");
        let currentObj = this;

        prevBtnElement.onclick = function () {
            console.log("previous button clicked");
            currentObj.previous();
        }


        nextBtnElement.onclick = function () {
            console.log("next button clicked");
            console.log(currentObj.json);
            currentObj.next();
        }

    }

    previous() {
        this.id--;
        this.displayPreviousResume();
    }

    next() {
        this.id++;
        this.displayNextResume();
    }

    displayNextResume() {
        if (this.id >= this.json.resume.length-1) {
            document.getElementById("next").disabled = true;
        }
        else if (this.id > 0 && this.id < this.json.resume.length) {
            document.getElementById("previous").disabled = false;
        }
        this.updateControls(this.json);
    }

    displayPreviousResume() {

        if (this.id <= 0) {
            document.getElementById("previous").disabled = true;
        }
        else if (this.id >= 0 && this.id < this.json.resume.length) {
            document.getElementById("next").disabled = false;
        }
        this.updateControls(this.json);
    }
    // const nextBtnElement = document.getElementById("next");
    // const previousBtnElement = document.getElementById("previous");

    // if (previousBtnElement) {
    //     previousBtnElement.addEventListener("click", () => {
    //         console.log("previous button clicked");
    //         this.id--;
    //         
    //         this.updateControls(response);
    //     });
    // }
    // else if (nextBtnElement) {
    //     nextBtnElement.addEventListener("click", () => {
    //         console.log("next button clicked");
    //         this.id++;
    //         if (this.id >= response.resume.length) {
    //             document.getElementById("next").disabled = true;
    //         }
    //         else if (this.id > 0 && this.id < response.resume.length) {
    //             document.getElementById("previous").disabled = false;
    //         }
    //         this.updateControls(response);
    //     });

    // }

    updateControls(jsonData) {
        const nameElement = document.querySelector(".applicant-name");
        nameElement.innerHTML = `${jsonData.resume[this.id].basics.name}`;

        const appliedForElement = document.querySelector(".applied-for");
        appliedForElement.innerHTML = `${jsonData.resume[this.id].basics.AppliedFor}`;

        // const applicantImg=document.querySelector(".applicant-img");
        // if(`${jsonData.resume[this.id].basics.image}`===""){
        //     applicantImg.src=`${jsonData.resume[this.id].basics.image}`;
        // }
        // else{
        //     applicantImg.src="./applicant.png"
        // }   


        const personalInfoElement = document.querySelector(".personal-info");
        personalInfoElement.innerHTML = `
        <p style="color:black;text-align:right;font-size: 12px;font-weight: bolder;">${jsonData.resume[this.id].basics.phone}</p>
        <p style="color:black;text-align:right;font-size: 12px;font-weight: bolder;">${jsonData.resume[this.id].basics.email}</p>
        <a style="color:red;float:right;font-size: 12px;font-weight: bolder;" 
        href="${jsonData.resume[this.id].basics.profiles.url}">${jsonData.resume[this.id].basics.profiles.network}</a><br>`;

        const techSkillsElement = document.querySelector(".technical-skills");
        let skillsText = "";
        for (let i = 0; i < jsonData.resume[this.id].skills.keywords.length; i++) {
            skillsText += jsonData.resume[this.id].skills.keywords[i] + "<br>";
        }
        techSkillsElement.innerHTML = `
        <p style="color:black;text-align:right;font-size: 12px;font-weight: bolder;">${skillsText}</p>
        `;

        const hobbiesElement = document.querySelector(".hobbies");
        let hobbiesText = "";
        for (let i = 0; i < jsonData.resume[this.id].interests.hobbies.length; i++) {
            hobbiesText += jsonData.resume[this.id].interests.hobbies[i] + "<br>";
        }
        hobbiesElement.innerHTML = `
        <p style="color:black;text-align:right;font-size: 12px;font-weight: bolder;">${hobbiesText}</p>
        `

        const workexpElement = document.querySelector(".exp-prev-company");
        workexpElement.innerHTML = `
            <p><b>Company Name: </b>${jsonData.resume[this.id].work["Company Name"]}</p>
            <p><b>Position: </b>${jsonData.resume[this.id].work["Position"]}</p>
            <p><b>Start Date: </b>${jsonData.resume[this.id].work["Start Date"]}</p>
            <p><b>End Date: </b>${jsonData.resume[this.id].work["End Date"]}</p>
            <p><b>Summary: </b>${jsonData.resume[this.id].work["Summary"]}</p>`

        const projectsElement = document.querySelector(".projects");
        projectsElement.innerHTML = `
        <p><b>${jsonData.resume[this.id].projects["name"]}</b>${jsonData.resume[this.id].projects["description"]}</p>`

        const educationElement = document.querySelector(".education");
        educationElement.innerHTML = `
        <ul>
            <li><b>UG: </b> ${jsonData.resume[this.id].education["UG"]["institution"]}, ${jsonData.resume[this.id].education["UG"]["course"]}, ${jsonData.resume[this.id].education["UG"]["Start Date"]}, ${jsonData.resume[this.id].education["UG"]["End Date"]}, ${jsonData.resume[this.id].education["UG"]["cgpa"]}</li>
            <li><b>PU: </b> ${jsonData.resume[this.id].education["Senior Secondary"]["institute"]}, ${jsonData.resume[this.id].education["Senior Secondary"]["cgpa"]}</li>
            <li><b>High School: </b> ${jsonData.resume[this.id].education["High School"]["institute"]}, ${jsonData.resume[this.id].education["High School"]["cgpa"]}</li>
        </ul>`

        const internshipElement = document.querySelector(".internship");
        internshipElement.innerHTML = `
        <ul>
            <li><b>Company Name: </b> ${jsonData.resume[this.id].Internship["Company Name"]}</li>
            <li><b>Position: </b> ${jsonData.resume[this.id].Internship["Position"]}</li>
            <li><b>Start Date: </b> ${jsonData.resume[this.id].Internship["Start Date"]}</li>
            <li><b>End Date: </b> ${jsonData.resume[this.id].Internship["End Date"]}</li>
            <li><b>Summary: </b> ${jsonData.resume[this.id].Internship["Summary"]}</li>
        </ul>`

        const achievementsElement = document.querySelector(".achievements");
        let achievementsText = "<ul>";
        for (let i = 0; i < jsonData.resume[this.id].achievements["Summary"].length; i++) {
            achievementsText += `<li>${jsonData.resume[this.id].achievements["Summary"][i]}</li>`;
        }
        achievementsText += "</ul>";
        achievementsElement.innerHTML = achievementsText;

    }
}

export { ResumeApp }