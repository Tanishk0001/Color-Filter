const mainImage=document.getElementById('img');
const btn = document.getElementsByClassName('.buttons');
const defaultBtn=document.getElementById('default');
const blurBtn=document.getElementById('blur');
const grayscaleBtn=document.getElementById('grayscale');
const brightnessBtn=document.getElementById('brightness');
const contrastBtn=document.getElementById('contrast');
const saturationBtn=document.getElementById('saturation');
const opacityBtn=document.getElementById('opacity');
const huerotateBtn=document.getElementById('huerotate');
const dropshadowBtn=document.getElementById('dropshadow');
const invertBtn=document.getElementById('invert');

defaultBtn.addEventListener('click',()=>resetFilters());
document.getElementById('blur').addEventListener('click',()=>{
    applyFilter('blur(5px)');
    
});
grayscaleBtn.addEventListener('click',()=>applyFilter('grayscale(100%)'));
brightnessBtn.addEventListener('click',()=>applyFilter('brightness(150%)'));
contrastBtn.addEventListener('click',()=>applyFilter('contrast(200%)'));
saturationBtn.addEventListener('click',()=>applyFilter('saturate(200%)'));
opacityBtn.addEventListener('click',()=>applyFilter('opacity(50%)'));
huerotateBtn.addEventListener('click',()=>applyFilter('hue-rotate(90deg)'));
dropshadowBtn.addEventListener('click',()=>applyFilter('drop-shadow(5px 5px 5px #888888)'));
invertBtn.addEventListener('click',()=>applyFilter('invert(100%)'));

function resetFilters(){
    mainImage.style.filter='none';
}

function applyFilter(filterValue){
    console.log(filterValue)
    mainImage.style.filter = filterValue;
}
