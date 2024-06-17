var element;
var hiza;
var secilitext;
var metin;
secilitext=window.getSelection().toString();
metin=document.getElementById("metin").innerHTML.toString();

function islem(parametre){
    secilitext=window.getSelection().toString();
    metin=document.getElementById("metin").innerHTML.toString();

    switch (parametre) {
        case 'kalin':
            element='b';
            metinedit();
            break;
        case 'italik':
            element='i';
            metinedit();
            break;
        case 'alticizili':
            element='u';
            metinedit();
            break;
        case 'ustucizili':
            element='strike';
            metinedit();
            break;
        case 'solayasli':
            hiza="align='left'";
            hizala("sol");
            break;
        case 'merkezyasli':
            hiza="align='center'";
            hizala("merkez");
            break;  
        case 'sagayasli':
            hiza="align='right'";
            hizala("sag");
            break;      
    }

   document.getElementById("metin").innerHTML=metin;
}

function metinedit(){
    if(metin.indexOf("<"+element+">"+secilitext+"</"+element+">")!=-1){
        metin=metin.replace("<"+element+">"+secilitext+"</"+element+">",secilitext);
      }else{
        metin=metin.replace(secilitext,"<"+element+">"+secilitext+"</"+element+">");
    }
}

function hizala(yon){
    if(yon=="sol"){
        metin=metin.replace('class="MsoNormal"','class="MsoNormal"'+hiza);
    }else if(yon=="sag"){
        metin=metin.replace('class="MsoNormal"','class="MsoNormal"'+hiza);
    }else if(yon=="merkez"){
        metin=metin.replace('class="MsoNormal"','class="MsoNormal"'+hiza);
    }
   
}

var secici=document.getElementById("renksecici");
secici.addEventListener('input',function(){
    secilitext=window.getSelection().toString();
    metin=document.getElementById("metin").innerHTML.toString();
    metin=metin.replace(secilitext,"<span style='color:"+secici.value+";'>"+secilitext+"</span>");
    document.getElementById("metin").innerHTML=metin;
});