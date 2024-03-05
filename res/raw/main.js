document.body.style.position='fixed';
document.body.style.padding='0';
document.body.style.margin='0';
document.body.style.display='block';
document.body.style.overflow='hidden';
document.body.style.scrollBehavior='smooth';
document.body.style.listStyle='none';
document.body.style.width='100%';
document.body.style.height='auto';
document.body.style.bottom='0';
document.body.style.top='0';
document.body.style.fontSize='20px';
document.body.style.fontFamily='san-serif';

ZOOM();

HIDENAVIGATIONBAR();

document.body.addEventListener('click',()=>{

    HIDENAVIGATIONBAR();

})