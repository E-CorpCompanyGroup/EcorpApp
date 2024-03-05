//ZOOM FUNCTION
const ZOOM=()=>{

    // Prevent default behavior for multi-touch and wheel events
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('wheel', function (event) {
        if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {
            event.preventDefault();
        }
    });

    // Set the device information in localStorage
    localStorage.setItem('Device', 'Android');

    // Set the Technology in localStorage
    localStorage.setItem('FrameWork', 'Advance');

}

//STYLE
const STYLED=(ELEMENT,PROPERTY,VALUE)=>{

    ELEMENT.style[PROPERTY]=VALUE;

}

//CLEAR
const CLEAR=(ELEMENT)=>{

    CONDITION(ELEMENT,
        ()=>DISPLAY(ELEMENT,''),
        ()=>DISPLAY(document.body,'')
    )

}

//CREATE A BREAK
const BREAK=(ELEMENT)=>{

    const spacer=document.createElement('br')

    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,spacer),
        ()=>ADD(document.body,spacer)
    )

}

//ENVIRONMENT
const ENVIRONMENT=(TEXT)=>{
    
    if (TEXT) {
      
        localStorage.setItem('Environment','Test');

        document.body.style.top='0';

        document.body.style.bottom='0';
 
    } else {

        localStorage.setItem('Environment','Production');

        document.body.style.top='30px';
        
    }

}

//SAFE AREA VIEW
const SAFEAREAVIEW=()=>{

    const DIV=document.createElement('div');

    //DIV STYLES
    STYLED(DIV,'color','#ffff');
    STYLED(DIV,'width','100%');
    STYLED(DIV,'height','30%');
    STYLED(DIV,'display','block');
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'borderRadius','20px 20px 0px 0px');
    STYLED(DIV,'left','0%');
    STYLED(DIV,'bottom','0');
    
    if (localStorage.getItem('AppColour')) {
        STYLED(DIV,'border','1px  solid #DCDCDC80');
        STYLED(DIV,'background',localStorage.getItem('AppColour'));
    } else {
        STYLED(DIV,'background','#00000080'); 
    }

    //CREATE TEXTS ON IT
    const TEXT=document.createElement('h1');
    //STYLES
    STYLED(TEXT,'textAlign','center');
    STYLED(TEXT,'position','relative');
    STYLED(TEXT,'fontSize','20px');

    //THE TEXT
    TEXT.innerHTML=`ALLOW SAFE AREA VIEW`;

    //CREATE BUTTON FOR DENY
    const Buttons=document.createElement('button');
    //STYLES
    STYLED(Buttons,'background','#00000080');
    STYLED(Buttons,'width','45%');
    STYLED(Buttons,'height','50px');
    STYLED(Buttons,'position','absolute');
    STYLED(Buttons,'height','50px');
    STYLED(Buttons,'bottom','10px');
    STYLED(Buttons,'left','10px');
    STYLED(Buttons,'borderRadius','10px');
    STYLED(Buttons,'border','none');
    STYLED(Buttons,'color','white');
    Buttons.innerHTML='Deny';

    //CLICK ON DENY
    Buttons.addEventListener('click',()=>{

        localStorage.setItem('SAFEAREAVIEW','FALSE')

        STYLED(DIV,'display','none');

    })

    DIV.append(Buttons)

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
    Button.innerHTML='Allow';

    //CLICK ON ALLOW
    Button.addEventListener('click',()=>{

        localStorage.setItem('SAFEAREAVIEW','TRUE')

        STYLED(DIV,'display','none');

    })

    //ENTER DATA
    DIV.append(TEXT);

    DIV.append(Button);

    if (localStorage.getItem('SAFEAREAVIEW')) {
       
        if (localStorage.getItem('SAFEAREAVIEW')==='TRUE') {

            document.body.style.bottom='5.9%';

        } else {

            document.body.style.bottom='0';
            
        }
        
    } else {
        
        document.body.append(DIV);

    }

}

//SAFE NOTIFICATIONS VIEW
const APPNOTIFICATIONS=()=>{

    const DIV=document.createElement('div');

    //DIV STYLES
    STYLED(DIV,'background','#00000080');
    STYLED(DIV,'color','#ffff');
    STYLED(DIV,'width','100%');
    STYLED(DIV,'height','30%');
    STYLED(DIV,'display','block');
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'borderRadius','20px 20px 0px 0px');
    STYLED(DIV,'left','0%');
    STYLED(DIV,'bottom','0');

    if (localStorage.getItem('AppColour')) {
        STYLED(DIV,'border','1px  solid #DCDCDC80');
        STYLED(DIV,'background',localStorage.getItem('AppColour'));
    } else {
        STYLED(DIV,'background','#00000080'); 
    }

    //CREATE TEXTS ON IT
    const TEXT=document.createElement('h1');
    //STYLES
    STYLED(TEXT,'textAlign','center');
    STYLED(TEXT,'position','relative');
    STYLED(TEXT,'fontSize','20px');

    //THE TEXT
    TEXT.innerHTML=`Allow App Notifications`;

    //CREATE BUTTON FOR DENY
    const Buttons=document.createElement('button');
    //STYLES
    STYLED(Buttons,'background','#00000080');
    STYLED(Buttons,'width','45%');
    STYLED(Buttons,'height','50px');
    STYLED(Buttons,'position','absolute');
    STYLED(Buttons,'height','50px');
    STYLED(Buttons,'bottom','10px');
    STYLED(Buttons,'left','10px');
    STYLED(Buttons,'borderRadius','10px');
    STYLED(Buttons,'border','none');
    STYLED(Buttons,'color','white');
    Buttons.innerHTML='Deny';

    //CLICK ON DENY
    Buttons.addEventListener('click',()=>{

        localStorage.setItem('AppNotifications','FALSE')

        STYLED(DIV,'display','none');

    })

    DIV.append(Buttons)

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
    Button.innerHTML='Allow';

    //CLICK ON ALLOW
    Button.addEventListener('click',()=>{

        localStorage.setItem('AppNotifications','TRUE')

        STYLED(DIV,'display','none');

    })

    //ENTER DATA
    DIV.append(TEXT);

    DIV.append(Button);

    if (!localStorage.getItem('AppNotifications')) {
       
        document.body.append(DIV); 
          
    } 


}

//DISPLAY DATA ON PAGE
const DISPLAY=(ELEMENT,ELEMENT1)=>{

    if (ELEMENT) {

        ELEMENT.innerHTML=ELEMENT1; 

    } else {
        
        document.body.innerHTML=ELEMENT1;

    }

}

//APPENDING DATA TO ELEMENT
const ADD=(ELEMENT,ELEMENT1)=>{

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1); 

    } else {
        
        document.body.append(ELEMENT1);

    }
    
}

//EXTERNAL JS
const EXTERNALJS = (PATH, callback) => {
    // Create a new script element
    var script = document.createElement('script');

    // Set the source attribute to your JavaScript file
    script.src = PATH;

    // Optionally, you can set other attributes if needed
    script.async = true; // Set async attribute to load asynchronously
    script.onload = function() {
        // Code to execute after the script has loaded (optional)
        console.log('Script loaded successfully');
        // If a callback function is provided, call it
        if (typeof callback === 'function') {
            callback();
        }
    };

    // Append the script element to the head of the document
    document.head.appendChild(script);

};

//SET LOCAL STORAGE
const STORE=(STORAGE,KEY,ELEMENT)=>{

    if (STORAGE==='local') {
       
        localStorage.setItem(KEY,ELEMENT);
        
    } else {
       
        sessionStorage.setItem(KEY,ELEMENT);
        
    }

}

//GET LOCAL STORAGE
const GETSTORE=(STORAGE,KEY)=>{

    if (STORAGE==='local') {
       
        localStorage.getItem(KEY);
        
    } else {
       
        sessionStorage.getItem(KEY);
        
    }

}

//REMOVE LOCAL STORAGE
const REMOVESTORE=(STORAGE,KEY)=>{

    if (STORAGE==='local') {
       
        localStorage.removeItem(KEY);
        
    } else {
       
        sessionStorage.removeItem(KEY);
        
    }

}

//DELETE LOCAL STORAGE
const DELETESTORE=(STORAGE,KEY)=>{

    if (STORAGE==='local') {
       
        localStorage.clear();
        
    } else {
       
        sessionStorage.clear();
        
    }

}

//FETCH DATA FROM A SERVER
const GETPACKAGE = (URL, MODE, callback) => {
    fetch(URL, {
        method: "GET",
        mode: MODE
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            return response.json(); // Return parsed JSON data
        } else {
            return response.text(); // Return response text
        }
    })
    .then((data) => {
        callback(data); // Call the callback function with the fetched data
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; // Re-throw the error to handle it where you call GETPACKAGE
    });
};

//POST DATA TO A SERVER
const POSTPACKAGE = (URL, MODE, TYPE, DATA, callback) => {
    fetch(URL, {
        method: 'POST',
        mode: MODE,
        body: JSON.stringify(DATA), // Assuming DATA is already a JSON object
    })
    .then(res => {
        if (TYPE === 'json') {
            return res.json(); // Return the parsed JSON
        } else {
            return res.text(); // Return the response body as text
        }
    })
    .then((data) => {
        callback(data); // Call the callback function with the fetched data
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; // Re-throw the error to handle it where you call POSTPACKAGE
    });
};

//BREAK DOWN THE DATA
const REDUX = (DATA, ACTION) => {
    const modifiedData = [];
    
    DATA.forEach(element => {
        
        modifiedData.push(ACTION(element));

    });

    return modifiedData;

};

//DATA FINDER
const FINDER = (DATA, ELEMENT, ELEMENT1, ACTION) => {

    const user = DATA.find(item => item[ELEMENT] === ELEMENT1);

    return ACTION(user ? user : false);
    
};

//CHECK DATA COMPARE
const CHECK = (ELEMENT, ACTION) => {

    const result = ELEMENT ;

    return ACTION(result ? result : false);

};

//CONDITIONER
const CONDITIONER = (CONDITION,HOOK,ACTION,ACTION1) => {

    if (CONDITION===HOOK) {

      return  ACTION();

    } else {

      return  ACTION1();

    }
    
};

//CONDITIONER
const CONDITION = (CONDITION,ACTION,ACTION1) => {

    if (CONDITION) {

      return  ACTION();

    } else {

      return  ACTION1();

    }
    
};

//APPMODE
const APPMODE = (ELEMENT, IMG,DEFAULT) => {

    if (IMG === 'Image') {

        document.body.style.backgroundImage = `url(${ELEMENT})`;

        document.body.style.backgroundRepeat = 'no-repeat';

        document.body.style.backgroundPosition = 'center';
        
        document.body.style.backgroundSize = 'cover';

    } else {

        if (ELEMENT) {
           
            localStorage.setItem('AppColour',ELEMENT);

            document.body.style.background = ELEMENT;
            
        } else {
           
            localStorage.setItem('AppColour',DEFAULT);

            document.body.style.background = DEFAULT;
            
        }
        
    }
};

//SHUFFLE DATA
const SHUFFLE = (array, callback) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    callback(array);
};
  
//CREATE FILES
const FILES = (callback) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
  
    fileInput.addEventListener('change', function() {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const fileData = event.target.result;
        callback(fileData); // Pass the file data to the callback function
      };
  
      reader.readAsDataURL(file); // Read file data as a data URL
    });
  
    fileInput.click();
};
  
//PASSWORD HARSH
const PASSWORDHASH = async (password, callback) => {
    try {
        // Convert password string to ArrayBuffer
        const encoder = new TextEncoder();
        const data = encoder.encode(password);

        // Hash password using SHA-256 algorithm
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);

        // Convert ArrayBuffer to hex string
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

        // Invoke the callback with the hashed password
        callback(hashHex);
    } catch (error) {
        // If any error occurs, alert the error
        alert(error);
    }
};

//DEHARSH PASSWORD
const PASSWORDDEHASH = async (hashedPassword, inputPassword, callback) => {
    try {
        // Convert input password string to ArrayBuffer
        const encoder = new TextEncoder();
        const inputData = encoder.encode(inputPassword);

        // Hash the input password using SHA-256 algorithm
        const inputHashBuffer = await crypto.subtle.digest('SHA-256', inputData);

        // Convert ArrayBuffer to hex string
        const inputHashArray = Array.from(new Uint8Array(inputHashBuffer));
        const inputHashHex = inputHashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

        // Compare the hashed input password with the stored hashed password
        const match = hashedPassword === inputHashHex;

        // Invoke the callback with the result
        callback(match);
    } catch (error) {
        // If any error occurs, alert the error
        alert(error);
    }
};

//RANDOM CODE GENERATOR
const RANDOMCODE=(inputValue,callback)=>{
    // Get the current date and time
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();

    // Combine the input value with date and time
    const combinedString = inputValue + currentDay + currentHour + currentMinute + currentSecond;

    // Generate a random number based on the combined string
    const randomNumber = parseInt(combinedString, 36) % 10000; // Modulus 10,000 to limit to four digits

    // Format the random number as a four-digit string
    const randomCode = randomNumber.toString().padStart(4, '0');

    // Invoke the callback with the random code
    callback(randomCode);
}

//RANDOM WORD GENERATOR
const RANDOMWORD=(length, callback)=> {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    callback(randomString);
}

//OPEN GMAIL
const GMAIL = (emailAddress) => {
    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress);
    window.open(mailtoLink);
}

//OPEN WHATSAPP
const WHATSAPP=(phoneNumber) => {
    var whatsappLink = 'https://wa.me/' + encodeURIComponent(phoneNumber);
    window.open(whatsappLink);
}

//OPEN INSTAGRAME
const INSTAGRAM = (username) => {
    var instagramLink = 'https://www.instagram.com/' + encodeURIComponent(username);
    window.open(instagramLink);
}

//OPEN FACEBOOK
const FACEBOOK = (usernameOrProfileId) => {
    var facebookLink = 'https://www.facebook.com/' + encodeURIComponent(usernameOrProfileId);
    window.open(facebookLink);
}

//OPEN TELEGRAM
const TELEGRAM = (username) => {
    var telegramLink = 'https://t.me/' + encodeURIComponent(username);
    window.open(telegramLink);
}

//OPEN YOUTUBE
const YOUTUBE = (query) => {
    var youtubeLink = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
    window.open(youtubeLink);
}

//OPEN TWITTER
const TWITTER = (username) => {
    var twitterLink = 'https://twitter.com/' + encodeURIComponent(username);
    window.open(twitterLink);
}

//OPEN WEBSITE
const WEBSITE = (url) => {
    window.open(url);
}

//ADD EVENT LISTENER
const EVENT = (ELEMENT, FUNCTION, callback) => {
    ELEMENT.addEventListener(FUNCTION, callback);
}