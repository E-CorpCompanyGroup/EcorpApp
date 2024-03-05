const LOGINPAGE=()=>{

    CLEAR();

    BREAK(),BREAK(),BREAK();

    TEXT('','h1','E-corp App','AppName',()=>{
        ALERTBOX('','E-corp App','Welcome TO E-corp App')
    })
    const AppName=document.querySelector('.AppName');
    STYLED(AppName,'color','#ffffff')

    BREAK(),

    INPUT('','email','Enter User Email','');
    
    INPUT('','password','Enter User Password','');

    BUTTON('','Login','','',()=>{

    })
    
    TEXT('','h3','Forgot Password?Click Here!','Forgot',()=>{
        alert('')
    })
    const Forgot=document.querySelector('.Forgot');
    STYLED(Forgot,'color','#ffffff')

}

export{LOGINPAGE}