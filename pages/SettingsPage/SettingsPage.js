import { HOMEPAGE } from "../HomePage/HomePage.js";
import { LOGINPAGE } from "../LoginPage/LoginPage.js";

const SETTINGSPAGE=()=>{

    CLEAR();

    HEADER('','HomeHeader');
    const HomeHeader=document.querySelector('.HomeHeader');
    STYLED(HomeHeader,'background','transparent');

    ICONS(HomeHeader,WHITEBACKICON,'BackIcon',()=>{HOMEPAGE()})
    const BackIcon=document.querySelector('.BackIcon');
    STYLED(BackIcon,'marginLeft','0.5rem');
    STYLED(BackIcon,'width','30px');
    
    TEXT(HomeHeader,'h2','Settings ','UserAccount',()=>{})
    const UserAccount=document.querySelector('.UserAccount');
    STYLED(UserAccount,'marginTop','auto');
    STYLED(UserAccount,'marginBottom','auto');
    STYLED(UserAccount,'marginLeft','auto');
    STYLED(UserAccount,'marginRight','1rem');
    STYLED(UserAccount,'color','white');
    STYLED(UserAccount,'fontSize','20px');

    SCROLLVIEW('','HomeDiv')
    const HomeDiv=document.querySelector('.HomeDiv');
    STYLED(HomeDiv,'background','transparent');
    STYLED(HomeDiv,'top','50px');

    BUTTON(HomeDiv,'LogOut',WHITELOGOUTICON,'',()=>{REMOVESTORE('local','Admin'),LOGINPAGE()})


    APPMODEBUTTON(HomeDiv,'teal','#191919')


}

export{SETTINGSPAGE}