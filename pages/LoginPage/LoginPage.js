import { HOMEPAGE } from "../HomePage/HomePage.js";

const LOGINPAGE=()=>{

    CLEAR();

    BREAK(),BREAK(),BREAK();

    TEXT('','h1','E-corp App','AppName',()=>{
       
    })
    const AppName=document.querySelector('.AppName');
    STYLED(AppName,'color','#ffffff')

    BREAK(),

    INPUT('','email','Enter User Email','');
    
    INPUT('','password','Enter User Password','');

    BUTTON('','Login','','',()=>{

        HOMEPAGE()

    })
    
    TEXT('','h3','Forgot Password?Click Here!','Forgot',()=>{
        
    })
    const Forgot=document.querySelector('.Forgot');
    STYLED(Forgot,'color','#ffffff')

}

export{LOGINPAGE}