
///CAROUSELL
let radio = document.querySelectorAll('.radio');
var counter = radio.length - radio.length + 1;


const imgSliding =  () => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}

let imgInterv = setInterval(imgSliding, 5000);

radio.forEach( (rad, i) => {
    rad.addEventListener('click', () => {
    clearInterval(imgInterv);
    counter = i+1;
    console.log(counter);
    imgInterv = setInterval(imgSliding, 5000);
    });
});

   /////REQUIRED WHEN PAINTED IS SELECTED 



let addInfo = document.querySelector('.addInfo');
let requiredScript = document.querySelectorAll('.requiredScript');
const requiredChanger = () => {
    if (requiredScript[0].value == 'Pearl' || requiredScript[1].value == 'Painted' || requiredScript[2].value == 'Painted') {
       addInfo.required = true;
    } else {
      addInfo.removeAttribute('required');
    };
};


requiredScript.forEach( oneOfRequiredScript => {
    oneOfRequiredScript.addEventListener('change', requiredChanger);
});

///SHOW WOOD TYPE
const imgList = [{
    img: "images/camper.png",
    imgInt: "images/camperInt.png",
    imgFloor: "images/woodColout1.jpg",
   },
   {
    img: "images/camper2.png",
    imgInt: "images/camperInt2.png",
    imgFloor: "images/woodColout2.jpg",
   },
   {
    img: "images/camper3.png",
    imgInt: "images/camperInt3.png",
    imgFloor: "images/woodColout3.jpg",
   },
   {
    img: "images/camper4.png",
    imgFloor: "images/woodColout4.jpg",
   }];

const typeExterior = document.querySelector('.typeImgEx img');
const typeExteriorSel = document.querySelector('.typeExteriorSel');


/// EXTERIOR
const imgChangerEx = () => {
    if (typeExteriorSel.value == 'White') {
        typeExterior.src = imgList[0].img;
    } else if (typeExteriorSel.value == 'Blue') {
        typeExterior.src = imgList[1].img;
     } else if (typeExteriorSel.value == 'Green') {
        typeExterior.src = imgList[2].img;
     } else if (typeExteriorSel.value == 'Yellow') {
        typeExterior.src = imgList[3].img;
     } 
};

typeExteriorSel.addEventListener('change', imgChangerEx);

/// INTERIOR
const typeInterior = document.querySelector('.typeImgIn img');
const typeInteriorSel = document.querySelector('.typeInteriorSel');

const imgChangerIn = () => {
    if (typeInteriorSel.value == 'Oak') {
        typeInterior.src = imgList[0].imgInt;
    } else if (typeInteriorSel.value == 'Pine') {
        typeInterior.src = imgList[1].imgInt;
     } else if (typeInteriorSel.value == 'Spruce') {
        typeInterior.src = imgList[2].imgInt;
     } 
};

typeInteriorSel.addEventListener('change', imgChangerIn);


/// Panel
const woodTypePanel = document.querySelector('.typeImgPanel img');
const floorPanelsTypeSel = document.querySelector('.floorPanelsTypeSel');

const imgChangerPanel = () => {
    if (floorPanelsTypeSel.value == 'Fir') {
        woodTypePanel.src = imgList[0].imgFloor;
    } else if (floorPanelsTypeSel.value == 'Oak') {
        woodTypePanel.src = imgList[1].imgFloor;
     } else if (floorPanelsTypeSel.value == 'Pine') {
        woodTypePanel.src = imgList[2].imgFloor;
     } else if (floorPanelsTypeSel.value == 'Spruce') {
        woodTypePanel.src = imgList[3].imgFloor;
     } 
};

floorPanelsTypeSel.addEventListener('change', imgChangerPanel);
