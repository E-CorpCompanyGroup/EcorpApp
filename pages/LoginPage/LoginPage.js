import { HOMEPAGE } from "../HomePage/HomePage.js";

const LOGINPAGE=()=>{

    CLEAR();

    BREAK(),BREAK(),BREAK();

    TEXT('','h1','E-corp App','AppName',()=>{
       
    })
    const AppName=document.querySelector('.AppName');
    STYLED(AppName,'color','#ffffff')

    BREAK(),

    INPUT('','email','Enter User Email','UserEmail');
    
    INPUT('','password','Enter User Password','UserPassword');

    BUTTON('','Login','','',()=>{

        const EMAIL=document.querySelector('.UserEmail');
        const PASSWORD=document.querySelector('.UserPassword');

        const LOGINAPI=`https://e-corpcompanygroup.github.io/EcorpApp/Database/Users.json`;

        CHECK(EMAIL.value,(result)=>{
            CONDITIONER(result,false,
            ()=>MESSAGE('','Fill In Your Email',''),
            ()=> CHECK(PASSWORD.value,(result)=>{
                CONDITIONER(result,false,
                    ()=>MESSAGE('','Enter Your Password',''),
                    ()=>LOADER(),GETPACKAGE(LOGINAPI,'cors',(data)=>{
                        FINDER(data,'UserEmail',EMAIL.value,(user)=>{
                            CONDITIONER(user,false,
                            ()=>MESSAGE('','Wrong User Email',''),
                            ()=>CONDITIONER(user.UserPassword,PASSWORD.value,
                                ()=>CHECK(user,(result)=>{
                                    HOMEPAGE(),STORE('local','Admin',user.UserName)
                                }),
                                ()=>MESSAGE('','Wrong User Password','')
                                )
                            )
                        })
                    })

                )

            })
            )
        })

    })
    
    TEXT('','h3','Forgot Password?Click Here!','Forgot',()=>{
        
    })
    const Forgot=document.querySelector('.Forgot');
    STYLED(Forgot,'color','#ffffff')

}

export{LOGINPAGE}