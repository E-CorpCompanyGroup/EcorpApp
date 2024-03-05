const HOMEPAGE=()=>{

    CLEAR();

    SCROLLVIEW('','HomeDiv')
    const HomeDiv=document.querySelector('.HomeDiv');
    STYLED(HomeDiv,'background','transparent');
    STYLED(HomeDiv,'bottom','50px');

    FOOTER('','HomeFooter')
    const HomeFooter=document.querySelector('.HomeFooter');
    
    ICONS(HomeFooter,WHITESETTINGSICON,'',()=>{});

    ICONS(HomeFooter,WHITENOTIFICATIONICON,'',()=>{});

    ICONS(HomeFooter,WHITEUSERICON,'',()=>{});

    VIEW(HomeDiv,'')

    VIEW(HomeDiv,'')

    VIEW(HomeDiv,'')

    VIEW(HomeDiv,'')

    

   



    

}

export{HOMEPAGE}