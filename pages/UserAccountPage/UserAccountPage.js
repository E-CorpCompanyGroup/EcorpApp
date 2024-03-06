import { HOMEPAGE } from "../HomePage/HomePage.js";

const USERACCOUNTPAGE=()=>{

    CLEAR();

    HEADER('','HomeHeader');
    const HomeHeader=document.querySelector('.HomeHeader');
    STYLED(HomeHeader,'background','transparent');

    ICONS(HomeHeader,WHITEBACKICON,'BackIcon',()=>{HOMEPAGE()})
    const BackIcon=document.querySelector('.BackIcon');
    STYLED(BackIcon,'marginLeft','0.5rem');
    STYLED(BackIcon,'width','30px');
    
    TEXT(HomeHeader,'h2','My Profile','UserAccount',()=>{})
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

    VIEW(HomeDiv,'UserName')
    const UserName=document.querySelector('.UserName');
    STYLED(UserName,'background','#000000');
    STYLED(UserName,'height','100px');

    TEXT(UserName,'h3','Welcome','Welcome',()=>{})
    const Welcome=document.querySelector('.Welcome');
    STYLED(Welcome,'color','White');
    STYLED(Welcome,'textAlign','left');
    STYLED(Welcome,'marginLeft','1rem');
    STYLED(Welcome,'top','1rem');
    
    TEXT(UserName,'h1',`${localStorage.getItem('Admin')}`,'MyName',()=>{})
    const MyName=document.querySelector('.MyName');
    STYLED(MyName,'color','White');

    const USERDATA='/Database/Users.json'

    LOADER(HomeDiv,'')

    GETPACKAGE(USERDATA,'cors',(data)=>{
        FINDER(data,'UserName',localStorage.getItem('Admin'),(user)=>{

            VIEW(HomeDiv,'Position')
            const Position=document.querySelector('.Position');
            STYLED(Position,'background','#000000');
            STYLED(Position,'height','100px');
        
            TEXT(Position,'h3','Position','PositionHeld',()=>{})
            const PositionHeld=document.querySelector('.PositionHeld');
            STYLED(PositionHeld,'color','White');
            STYLED(PositionHeld,'textAlign','left');
            STYLED(PositionHeld,'marginLeft','1rem');
            STYLED(PositionHeld,'top','1rem');
            
            TEXT(Position,'h2',`${user.Position}`,'ActualPostion',()=>{})
            const ActualPostion=document.querySelector('.ActualPostion');
            STYLED(ActualPostion,'color','White');

            VIEW(HomeDiv,'CurrentLocationHolder')
            const CurrentLocationHolder=document.querySelector('.CurrentLocationHolder');
            STYLED(CurrentLocationHolder,'background','#000000');
            STYLED(CurrentLocationHolder,'height','100px');
        
            TEXT(CurrentLocationHolder,'h3','Current Location','CurrentLocationHold',()=>{})
            const CurrentLocationHold=document.querySelector('.CurrentLocationHold');
            STYLED(CurrentLocationHold,'color','White');
            STYLED(CurrentLocationHold,'textAlign','left');
            STYLED(CurrentLocationHold,'marginLeft','1rem');
            STYLED(CurrentLocationHold,'top','1rem');
            
            TEXT(CurrentLocationHolder,'h2',`${user.CurrentLocation}`,'CurrentLocation',()=>{})
            const CurrentLocation=document.querySelector('.CurrentLocation');
            STYLED(CurrentLocation,'color','White');
          
        
        })
    })

}

export{USERACCOUNTPAGE}