function myclick(a){
    form.resultat.value+=a;
}
function equal() {
    form.resultat.value=eval(form.resultat.value);
}
function AC(){
    form.resultat.value="0";
}
function Sin(){
    form.resultat.value= Math.sin(form.resultat.value);     
}
function Cos(){
    form.resultat.value= Math.cos(form.resultat.value);     
}
function Tan(){
    form.resultat.value= Math.tan(form.resultat.value);     
}
function Square(){
    form.resultat.value= Math.sqrt(form.resultat.value);
}
function Pi(){
    form.resultat.value= Math.PI;
    
}
function Backspace(){
    var space= form.resultat.value;
    if(space)
    {
        form.resultat.value= space.substring(0, space.length-1);
    }
}
function Log(){
    form.resultat.value=  Math.log(form.resultat.value);
}
function Factoriel(){
    var x=form.resultat.value;
    if(x<2)
    {
        document.form.resultat.value= 1;
    }
    else{
    form.resultat.value= (eval(x)*(eval(x)+1));
    }
}
function Expo(){
    form.resultat.value=  Math.exp(form.resultat.value);
}
function Carré(){
    form.resultat.value=  Math.pow(form.resultat.value, 2);
}
