import { NOTIFICATIONSPAGE } from "../NotificationsPage/NotificationsPage.js";
import { SETTINGSPAGE } from "../SettingsPage/SettingsPage.js";
import { USERACCOUNTPAGE } from "../UserAccountPage/UserAccountPage.js";

const HOMEPAGE=()=>{

    CLEAR();

    SCROLLVIEW('','HomeDiv')
    const HomeDiv=document.querySelector('.HomeDiv');
    STYLED(HomeDiv,'background','transparent');
    STYLED(HomeDiv,'bottom','50px');

    VIEW(HomeDiv,'')

    VIEW(HomeDiv,'')

    VIEW(HomeDiv,'')

    VIEW(HomeDiv,'')

    FOOTER('','HomeFooter')
    const HomeFooter=document.querySelector('.HomeFooter');
    STYLED(HomeFooter,'background','transparent');
    
    ICONS(HomeFooter,WHITESETTINGSICON,'',()=>{SETTINGSPAGE()});

    ICONS(HomeFooter,WHITENOTIFICATIONICON,'',()=>{NOTIFICATIONSPAGE()});

    ICONS(HomeFooter,WHITEUSERICON,'',()=>{USERACCOUNTPAGE()});

}

export{HOMEPAGE}