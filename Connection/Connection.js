import { HOMEPAGE } from "../pages/HomePage/HomePage.js"
import { LOGINPAGE } from "../pages/LoginPage/LoginPage.js"

const CONNECTION=()=>{

    CONDITION(localStorage.getItem('Admin'),
    ()=>HOMEPAGE(),
    ()=>LOGINPAGE()
    )


}

export{CONNECTION}