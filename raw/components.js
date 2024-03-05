//CREATE ABUTTON
const BUTTON=(ELEMENT,TEXT,IMAGE,CLASS,onClick = null)=>{

    const button=document.createElement('button');

    //ADD CLASS FOR EASY USAGE
    if (CLASS.value) {

        button.classList.add(CLASS);
        
    }

    //STYLES
    STYLED(button,'height','50px');
    STYLED(button,'width','95%');
    STYLED(button,'borderRadius','10px');
    STYLED(button,'border','none');
    STYLED(button,'outline','none');
    STYLED(button,'color','white');
    STYLED(button,'background','#00000080');
    STYLED(button,'position','relative');
    STYLED(button,'display','inline-flex');
    STYLED(button,'left','2%');
    STYLED(button,'marginTop','0.3rem');
    STYLED(button,'marginBottom','0.3rem');
    STYLED(button,'textAlign','left');

    CONDITION(localStorage.getItem('AppColour'),
    ()=>STYLED(button,'border','1px  solid #DCDCDC800'),
    ()=>STYLED(DIV,'background','#DCDCDC')
    )

    //CREATE THE LABEL
    const holder = document.createElement('h3');

    STYLED(holder, 'position', 'relative');
    STYLED(holder, 'color', '#ffffff');
    STYLED(holder, 'textAlign', 'left');
    STYLED(holder, 'marginLeft', '1rem');
    STYLED(holder, 'marginRight', 'auto');

    DISPLAY(holder,TEXT);
    
    button.append(holder)

    //CREATEICON
    const image = document.createElement('img');

    //STYLES
    STYLED(image,'position','relative');
    STYLED(image,'width','25px');
    STYLED(image,'height','25px');
    STYLED(image,'padding','5px');
    STYLED(image,'objectFit','cover');
    STYLED(image,'outline','none');
    STYLED(image,'border','none');
    STYLED(image,'marginTop','auto');
    STYLED(image,'marginBottom','auto');
    STYLED(image,'marginLeft','auto');
    STYLED(image,'marginRight','1rem');

    //IMAGE PATH
    image.src=IMAGE;

    if (IMAGE) {

        button.append(image);

    }else{

        STYLED(holder, 'marginLeft', 'auto');

        STYLED(holder, 'marginRight', 'auto');

    }

    if (onClick) {

        button.addEventListener('click', onClick);

    }

    CONDITION(ELEMENT,
    ()=>ADD(ELEMENT,button),
    ()=>ADD('',button)
    )

}

//CREATE A INPUT
const INPUT = (ELEMENT,TYPE, LABEL, CLASS) => {

    const input = document.createElement('input');

    //Assign A Type 
    CONDITION(TYPE,
        ()=>input.type = TYPE,
        ()=>input.type = 'text',
    )

    //Enter Text Name
    CONDITION(LABEL,
    ()=>input.placeholder=LABEL,
    ()=>input.placeholder='',
    )
    
    // STYLES
    STYLED(input, 'position', 'relative');
    STYLED(input, 'background', '#00000080');
    STYLED(input, 'width', '92%');
    STYLED(input, 'left', '2%');
    STYLED(input, 'height', '32px');
    STYLED(input, 'minHeight', '16px');
    STYLED(input, 'maxHeight', '32px');
    STYLED(input, 'marginTop', '0.2rem');
    STYLED(input, 'marginBottom', '0.2rem');
    STYLED(input, 'border', 'none');
    STYLED(input, 'outline', 'none');
    STYLED(input, 'borderRadius', '5px');
    STYLED(input, 'paddingLeft', '0.5rem');
    STYLED(input, 'color', '#ffffff');
    STYLED(input, 'textAlign', 'left');

    //ADD EVENT LISET
    input.addEventListener('input',()=>{
        STYLED(input, 'background', '#00000080');
        STYLED(input, 'border', 'none');
        STYLED(input, 'outline', 'none');
    })
    
    if (CLASS) {
        input.classList.add(CLASS);
    }
    
    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,input),
        ()=>ADD('',input)
    )
      
};

//CREATE A TEXTAREA
const TEXTAREA = (ELEMENT,TYPE, LABEL, CLASS) => {

    const input = document.createElement('textarea');

    //Assign A Type 
    CONDITION(TYPE,
        ()=>input.type = TYPE,
        ()=>input.type = 'text',
    )

    //Enter Text Name
    CONDITION(LABEL,
    ()=>input.placeholder=LABEL,
    ()=>input.placeholder='',
    )
    
    // STYLES
    STYLED(input, 'position', 'relative');
    STYLED(input, 'background', '#00000080');
    STYLED(input, 'width', '92%');
    STYLED(input, 'left', '2%');
    STYLED(input, 'height', '100px');
    STYLED(input, 'minHeight', '16px');
    STYLED(input, 'marginTop', '0.2rem');
    STYLED(input, 'marginBottom', '0.2rem');
    STYLED(input, 'border', 'none');
    STYLED(input, 'outline', 'none');
    STYLED(input, 'borderRadius', '5px');
    STYLED(input, 'paddingLeft', '0.5rem');
    STYLED(input, 'color', '#ffffff');
    STYLED(input, 'textAlign', 'left');

    //ADD EVENT LISET
    input.addEventListener('input',()=>{
        STYLED(input, 'background', '#00000080');
        STYLED(input, 'border', 'none');
        STYLED(input, 'outline', 'none');
    })
    
    if (CLASS) {
        input.classList.add(CLASS);
    }
    
    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,input),
        ()=>ADD('',input)
    )
      
};

//CREATE A TEXT
const TEXT = (ELEMENT,TYPE, LABEL,CLASS,onClick = null) => {
    
    const holder = document.createElement(TYPE || 'p'); 
    
    //STYLES
    STYLED(holder, 'position', 'relative');
    STYLED(holder, 'textAlign', 'center');

    if (TYPE === 'h1') {

        STYLED(holder, 'fontSize', '30px');

    } else if (TYPE === 'h2') {

        STYLED(holder, 'fontSize', '25px');

    } else if (TYPE === 'h3') {

        STYLED(holder, 'fontSize', '20px');

    } else {

        STYLED(holder, 'fontSize', '18px');

    }

    //ADD TEXT TO IT
    DISPLAY(holder,LABEL);

    if (CLASS) {

        holder.classList.add(CLASS);

    }

    if (onClick) {

        holder.addEventListener('click', onClick);

    }

    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,holder),
        ()=>ADD('',holder)
    )

};

//CREATE A FOOTER
const FOOTER=(ELEMENT,CLASS)=>{

    const footer=document.createElement('footer');

    if (CLASS) {

        footer.classList.add(CLASS);

    }

    //STYLED
    STYLED(footer,'position','absolute');
    STYLED(footer,'bottom','0');
    STYLED(footer,'background','#00000080');
    STYLED(footer,'width','100%');
    STYLED(footer,'height','50px');
    STYLED(footer,'display','inline-flex');

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,footer),
        ()=>ADD('',footer)
    )

}

//CREATE A  VIEW
const VIEW=(ELEMENT,CLASS)=>{

    const DIV=document.createElement('div');

    if (CLASS) {
      
        DIV.classList.add(CLASS);
        
    }

    //STYLES
    STYLED(DIV,'position','relative');
    STYLED(DIV,'width','95%');
    STYLED(DIV,'height','30%');
    STYLED(DIV,'background','#00000080')
    STYLED(DIV,'left','2%');
    STYLED(DIV,'marginTop','1rem');
    STYLED(DIV,'marginBottom','1rem');
    STYLED(DIV,'borderRadius','10px');
    STYLED(DIV,'overFlow','hidden');

   //Append
   CONDITION(ELEMENT,
    ()=>ADD(ELEMENT,DIV),
    ()=>ADD('',DIV)
    )

}

//CREATE ICON
const ICONS = (ELEMENT,PATH,CLASS,onClick = null) => {

    const icon = document.createElement('img');

    if (CLASS) {

        icon.classList.add(CLASS); 

    }

    //STYLES
    STYLED(icon,'position','relative');
    STYLED(icon,'width','25px');
    STYLED(icon,'height','25px');
    STYLED(icon,'padding','5px');
    STYLED(icon,'objectFit','cover');
    STYLED(icon,'outline','none');
    STYLED(icon,'marginTop','auto');
    STYLED(icon,'marginBottom','auto');
    STYLED(icon,'marginLeft','auto');
    STYLED(icon,'marginRight','auto');
    STYLED(icon,'border','none');

    if (onClick) {

        icon.addEventListener('click', onClick);

    }
    
    icon.src = PATH;

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,icon),
        ()=>ADD('',icon)
    )
    
}

//CREATE A SPINING LOADER
const LOADER=(ELEMENT,TIME)=>{

    const loader=document.createElement('div');

    //STYLES
    STYLED(loader,'width','20%');
    STYLED(loader,'height','10%');
    STYLED(loader,'left','40%');
    STYLED(loader,'position','absolute');
    STYLED(loader,'display','inline-flex');
    STYLED(loader,'bottom','0');
    STYLED(loader,'marginBottom','5%');
    STYLED(loader,'background','#00000080');
    STYLED(loader,'borderRadius','10px');

    //CREATE AN IMAGE

    const IMAGE=document.createElement('img');

    IMAGE.src=WHITELOADINGICON;

    //STYLE
    STYLED(IMAGE,'width','50%');
    STYLED(IMAGE,'height','auto');
    STYLED(IMAGE,'position','relative');
    STYLED(IMAGE,'display','block');
    STYLED(IMAGE,'bottom','0');
    STYLED(IMAGE,'marginBottom','auto');
    STYLED(IMAGE,'marginTop','auto');
    STYLED(IMAGE,'marginLeft','auto');
    STYLED(IMAGE,'marginRight','auto');
    STYLED(IMAGE,'borderRadius','10px');

    var rotationAngle = 0;

    // Define a function to rotate the image
    function rotateImage() {
        rotationAngle += 2; // Increment rotation angle
        IMAGE.style.transform = 'rotate(' + rotationAngle + 'deg)'; // Apply rotation to the image
    }

    // Set interval to rotate the image every 10 milliseconds (adjust as needed for desired speed)
    var rotationInterval = setInterval(rotateImage, 1);

    loader.append(IMAGE);

    //Set a Timer
    CONDITION(TIME,
        ()=>setTimeout(() => {STYLED(loader,'display','none')}, TIME),
        ()=>setTimeout(() => {STYLED(loader,'display','none')}, 2000)
    )

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,loader),
        ()=>ADD('',loader)
    )

}

//CREATE A HEADER
const HEADER=(ELEMENT,CLASS)=>{

    const header=document.createElement('footer');

    if (CLASS) {
      
        header.classList.add(CLASS)
        
    }

    //STYLED
    STYLED(header,'position','absolute');
    STYLED(header,'top','0');
    STYLED(header,'background','#00000080');
    STYLED(header,'width','100%');
    STYLED(header,'height','50px');
    STYLED(header,'display','inline-flex');

     //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,header),
        ()=>ADD('',header)
    )

}

//CREATE A IMAGE
const IMAGE = (ELEMENT,PATH,CLASS,onClick = null) => {

    const Image = document.createElement('img');
    
    if (CLASS) {

        Image.classList.add(CLASS);

    }

    //STYLES
    STYLED(Image,'position','relative');
    STYLED(Image,'width','97%');
    STYLED(Image,'height','95%');
    STYLED(Image,'left','2%');
    STYLED(Image,'borderRadius','10px');
    STYLED(Image,'outline','none');
    STYLED(Image,'border','none');
    STYLED(Image,'marginTop','0.5rem');
    STYLED(Image,'marginBottom','0.5rem');

    if (onClick) {

        Image.addEventListener('click', onClick);

    }
    
    Image.src = PATH;

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,Image),
        ()=>ADD('',Image)
    )
   
}

//DISPLAY A MESSAGE
const MESSAGE=(ELEMENT,Message,TIME,TIMER)=>{

    //Enable Vibration
    CONDITION(TIMER,
        ()=>VIBRATION(TIMER),
        ()=>VIBRATION(500)
    )
    
    const DIV=document.createElement('div');

    //STYLES
    STYLED(DIV,'display','inline-flex');
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'width','95%');
    STYLED(DIV,'height','50px');
    STYLED(DIV,'background','#00000080');
    STYLED(DIV,'borderRadius','10px');
    STYLED(DIV,'bottom','0');
    STYLED(DIV,'marginBottom','1rem');
    STYLED(DIV,'left','2%');

    //CREATE MESSAGE FOR IT

    const TEXT=document.createElement('h1');
    //STYLES
    STYLED(TEXT,'textAlign','center');
    STYLED(TEXT,'position','relative');
    STYLED(TEXT,'fontSize','18px');
    STYLED(TEXT,'marginTop','auto');
    STYLED(TEXT,'marginBottom','auto');
    STYLED(TEXT,'marginLeft','auto');
    STYLED(TEXT,'marginRight','auto');
    STYLED(TEXT,'color','white');
    STYLED(TEXT,'fontStyle','itallic');

    //Append Message
    CONDITION(Message,
        ()=>DISPLAY(TEXT,Message),
        ()=>DISPLAY(TEXT,'')
    )

    ADD(DIV,TEXT);

    //Set Time Out
    CONDITION(TIME,
        ()=>setTimeout(() => {DISPLAY(TEXT,''),STYLED(DIV,'display','none')}, TIME),
        ()=>setTimeout(() => {DISPLAY(TEXT,''),STYLED(DIV,'display','none')}, 2000)
    )

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,DIV),
        ()=>ADD('',DIV)
    )

}

//ALERT BOX
const ALERTBOX=(ELEMENT,TITLE,DATA)=>{

    const DIV=document.createElement('div');

    //DIV STYLES
    STYLED(DIV,'color','#ffff');
    STYLED(DIV,'width','95%');
    STYLED(DIV,'height','30%');
    STYLED(DIV,'display','block');
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'borderRadius','10px');
    STYLED(DIV,'left','2%');
    STYLED(DIV,'bottom','40%');
    STYLED(DIV,'border','1px  solid #DCDCDC80');

    CONDITION(localStorage.getItem('AppColour'),
    ()=>STYLED(DIV,'background',localStorage.getItem('AppColour')),
    ()=>STYLED(DIV,'background','#DCDCDC')
    )

    //CREATE TEXTS ON IT
    const TEXT=document.createElement('h1');
    //STYLES
    STYLED(TEXT,'textAlign','center');
    STYLED(TEXT,'position','relative');
    STYLED(TEXT,'fontSize','20px');
    
    //Append
    CONDITION(TITLE,
        ()=>DISPLAY(TEXT,TITLE),
        ()=>DISPLAY(TEXT,'Advance')
    )

    //CREATE THE DATA DIV
    const Para=document.createElement('p');
    //STYLE

    //Append
    CONDITION(DATA,
        ()=>DISPLAY(Para,DATA),
        ()=>DISPLAY(Para,'This Is an Alert')
    )

    //STYLES
    STYLED(Para,'width','100%');
    STYLED(Para,'textAlign','center');
    STYLED(Para,'position','relative');
    STYLED(Para,'display','block');

    //CREATE BUTTON FOR ALLOW
    const Button=document.createElement('button');
    //STYLES
    STYLED(Button,'background','#00000080');
    STYLED(Button,'width','95%');
    STYLED(Button,'height','50px');
    STYLED(Button,'position','absolute');
    STYLED(Button,'height','50px');
    STYLED(Button,'bottom','10px');
    STYLED(Button,'right','10px');
    STYLED(Button,'borderRadius','10px');
    STYLED(Button,'border','none');
    STYLED(Button,'color','white');

    DISPLAY(Button,'Ok');
    
    //CLICK ON ALLOW
    Button.addEventListener('click',()=>{

        STYLED(DIV,'display','none');

    })

    //ENTER DATA

    ADD(DIV,TEXT);

    ADD(DIV,Para);

    ADD(DIV,Button);

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,DIV),
        ()=>ADD('',DIV)
    )

}

//CONFIRM BOX
const CONFIRMBOX=(ELEMENT,TITLE,DATA)=>{

    const DIV=document.createElement('div');

    //DIV STYLES
    STYLED(DIV,'color','#ffff');
    STYLED(DIV,'width','95%');
    STYLED(DIV,'height','30%');
    STYLED(DIV,'display','block');
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'borderRadius','10px');
    STYLED(DIV,'left','2%');
    STYLED(DIV,'bottom','40%');
    STYLED(DIV,'border','1px  solid #DCDCDC80');

    CONDITION(localStorage.getItem('AppColour'),
    ()=>STYLED(DIV,'background',localStorage.getItem('AppColour')),
    ()=>STYLED(DIV,'background','#DCDCDC')
    )

    //CREATE TEXTS ON IT
    const TEXT=document.createElement('h1');
    //STYLES
    STYLED(TEXT,'textAlign','center');
    STYLED(TEXT,'position','relative');
    STYLED(TEXT,'fontSize','20px');

    //Append
    CONDITION(TITLE,
        ()=>DISPLAY(TEXT,TITLE),
        ()=>DISPLAY(TEXT,'Advance')
    )

    //CREATE THE DATA DIV
    const Para=document.createElement('p');
    //STYLE

    //Append
    CONDITION(ELEMENT,
        ()=>DISPLAY(Para,DATA),
        ()=>DISPLAY(Para,'This Is a Confirmation')
    )
    
    //STYLES
    STYLED(Para,'width','100%');
    STYLED(Para,'textAlign','center');
    STYLED(Para,'position','relative');
    STYLED(Para,'display','block');

    //CREATE BUTTON FOR ALLOW
    const Button=document.createElement('button');
    //STYLES
    STYLED(Button,'background','#00000080');
    STYLED(Button,'width','45%');
    STYLED(Button,'height','50px');
    STYLED(Button,'position','absolute');
    STYLED(Button,'height','50px');
    STYLED(Button,'bottom','10px');
    STYLED(Button,'right','10px');
    STYLED(Button,'borderRadius','10px');
    STYLED(Button,'border','none');
    STYLED(Button,'color','white');
    Button.innerHTML='OK';

    //CLICK ON ALLOW
    Button.addEventListener('click',()=>{

        STYLED(DIV,'display','none');

    })

    //CREATE BUTTON FOR ALLOW
    const Button1=document.createElement('button');
    //STYLES
    STYLED(Button1,'background','#00000080');
    STYLED(Button1,'width','45%');
    STYLED(Button1,'height','50px');
    STYLED(Button1,'position','absolute');
    STYLED(Button1,'height','50px');
    STYLED(Button1,'bottom','10px');
    STYLED(Button1,'left','10px');
    STYLED(Button1,'borderRadius','10px');
    STYLED(Button1,'border','none');
    STYLED(Button1,'color','white');
    Button1.innerHTML='Cancel';

    //CLICK ON ALLOW
    Button1.addEventListener('click',()=>{

        STYLED(DIV,'display','none');

    })

    //ENTER DATA
   
    ADD(DIV,TEXT);

    ADD(DIV,Para);

    ADD(DIV,Button);

    ADD(DIV,Button1);

   //Append
   CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,DIV),
        ()=>ADD('',DIV)
    )

}

//CREATE A BOTTOM DRAWER
const BOTTOMDRAWER=(ELEMENT,CLASS)=>{

    const DIV=document.createElement('div');

    if (CLASS) {
      
        DIV.classList.add(CLASS);
        
    }

    //STYLES
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'width','100%');
    STYLED(DIV,'height','auto');
    STYLED(DIV,'left','0%');
    STYLED(DIV,'top','0');
    STYLED(DIV,'bottom','0');
    STYLED(DIV,'borderRadius','0px');
    STYLED(DIV,'overFlowY','auto');
    STYLED(DIV,'overFlowX','hidden');
    STYLED(DIV,'display','block');
    STYLED(DIV,'border','1px  solid #DCDCDC80');

    //Append
    CONDITION(localStorage.getItem('AppColour'),
        ()=>STYLED(DIV,'background',localStorage.getItem('AppColour')),
        ()=>STYLED(DIV,'background','#DCDCDC')
    )

    //CREATE ICON
    const Image=document.createElement('img');
    Image.src=WHITECLOSEICON;
    //STYLE
    STYLED(Image,'position','absolute');
    STYLED(Image,'background','#00000080');
    STYLED(Image,'width','25px');
    STYLED(Image,'height','25px');
    STYLED(Image,'right','5px');
    STYLED(Image,'padding','5px');
    STYLED(Image,'borderRadius','20px');
   
    Image.addEventListener('click',()=>{

        STYLED(DIV,'display','none');

    })

    ADD(DIV,Image);
    
    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,DIV),
        ()=>ADD('',DIV)
    )

}

//CREATE A BOTTOM DRAWER
const MENUDRAWER=(ELEMENT,CLASS)=>{

    const DIV=document.createElement('div');

    if (CLASS) {
      
        DIV.classList.add(CLASS);
        
    }

    //STYLES
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'width','90%');
    STYLED(DIV,'height','auto');
    STYLED(DIV,'left','0%');
    STYLED(DIV,'top','0');
    STYLED(DIV,'bottom','0');
    STYLED(DIV,'borderRadius','0px');
    STYLED(DIV,'overFlowY','auto');
    STYLED(DIV,'overFlowX','hidden');
    STYLED(DIV,'display','block');
    STYLED(DIV,'border','1px  solid #DCDCDC80');

    //Append
    CONDITION(localStorage.getItem('AppColour'),
        ()=>STYLED(DIV,'background',localStorage.getItem('AppColour')),
        ()=>STYLED(DIV,'background','#DCDCDC')
    )

    //CREATE ICON
    const Image=document.createElement('img');
    Image.src=WHITECLOSEICON;
    //STYLE
    STYLED(Image,'position','absolute');
    STYLED(Image,'background','#00000080');
    STYLED(Image,'width','25px');
    STYLED(Image,'height','25px');
    STYLED(Image,'right','5px');
    STYLED(Image,'padding','5px');
    STYLED(Image,'borderRadius','20px');
    
    Image.addEventListener('click',()=>{

        STYLED(DIV,'display','none');

        STYLED(DIV,'width','0');

    })

    ADD(DIV,Image);

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,DIV),
        ()=>ADD('',DIV)
    )

}

//CREATE A SCROLL VIEW
const SCROLLVIEW=(ELEMENT,CLASS)=>{

    const DIV=document.createElement('div');

    if (CLASS) {
      
        DIV.classList.add(CLASS);
        
    }

    //STYLES
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'width','100%');
    STYLED(DIV,'height','100%');
    STYLED(DIV,'background','#00000080')
    STYLED(DIV,'left','0');
    STYLED(DIV,'top','0');
    STYLED(DIV,'bottom','0');
    STYLED(DIV,'borderRadius','0px');
    STYLED(DIV,'overflowX','hidden');
    STYLED(DIV,'overflowY','auto');
    STYLED(DIV,'display','block');

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,DIV),
        ()=>ADD('',DIV)
    )

}

//VIDEO ELEMENT
const VIDEO=(ELEMENT,PATH,CLASS)=>{

    const video=document.createElement('video');
    //STYLES
    STYLED(video,'position','relative');
    STYLED(video,'width','95%');
    STYLED(video,'height','30%');
    STYLED(video,'background','transparent');
    STYLED(video,'left','2%');
    STYLED(video,'marginTop','1rem');
    STYLED(video,'marginBottom','1rem');
    STYLED(video,'borderRadius','20px');

    video.controls=true

    if (CLASS) {
      
        video.classList.add(CLASS);
        
    }

    video.src=PATH;
    
        //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,video),
        ()=>ADD('',video)
    )

}

//AUDIO ELEMENT
const AUDIO=(ELEMENT,PATH,CLASS)=>{

    const video=document.createElement('audio');
    //STYLES
    STYLED(video,'position','relative');
    STYLED(video,'width','95%');
    STYLED(video,'height','30%');
    STYLED(video,'background','transparent'); 
    STYLED(video,'backgroundColor','transparent');
    STYLED(video,'left','2%');
    STYLED(video,'marginTop','1rem');
    STYLED(video,'marginBottom','1rem');
    STYLED(video,'borderRadius','20px');
    STYLED(video,'border','none');

    video.controls=true

    if (CLASS) {
        video.classList.add(CLASS);
    }

    video.src=PATH;

        //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,video),
        ()=>ADD('',video)
    )
}

//CREATE A IFRAME
const IFRAME=(ELEMENT,PATH,CLASS)=>{
    const web=document.createElement('iframe');

    if (CLASS) {
        web.classList.add(CLASS);
    }

    STYLED(web,'position','relative');
    STYLED(web,'width','95%');
    STYLED(web,'height','30%');
    STYLED(web,'marginTop','1rem');
    STYLED(web,'marginBottom','1rem');
    STYLED(web,'marginLeft','0.5rem');
    STYLED(web,'marginRight','0.5rem');
    STYLED(web,'overflowX','hidden');
    STYLED(web,'overflowY','hidden');
    STYLED(web,'display','block');
    STYLED(web,'background','#00000080');
    STYLED(web,'border','none');
    STYLED(web,'borderRadius','20px');

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,web),
        ()=>ADD('',web)
    )

}

//CREATE A WEBVIEW
const WEBVIEW=(PATH)=>{

    const web=document.createElement('iframe');

    STYLED(web,'position','absolute');
    STYLED(web,'width','100%');
    STYLED(web,'height','100%');
    STYLED(web,'top','0');
    STYLED(web,'bottom','0');
    STYLED(web,'overflowX','hidden');
    STYLED(web,'overflowY','auto');
    STYLED(web,'display','block');
    STYLED(web,'background','black');
    STYLED(web,'border','none');

    //CREATE ICON
    const Image=document.createElement('img');
    Image.src=WHITECLOSEICON;
    //STYLE
    STYLED(Image,'position','absolute');
    STYLED(Image,'background','#00000080');
    STYLED(Image,'width','25px');
    STYLED(Image,'height','25px');
    STYLED(Image,'top','5px');
    STYLED(Image,'left','5px');
    STYLED(Image,'padding','5px');
    STYLED(Image,'borderRadius','20px');
    STYLED(Image,'display','block')

    web.src=PATH;
   
    Image.addEventListener('click',()=>{

        STYLED(web,'display','none');
        STYLED(Image,'display','none');

    })

    ADD('',web)

    ADD('',Image);

}