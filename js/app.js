var name = prompt(" what's your cat's name ");
var type = prompt(" what breed of cat " + name + " ? ") ;//string(just collecton of characters wrapped in quotes)
var age =prompt(" How old is your " + type + " ? ");        //number does not need quoatations marks

var opinion = confirm("Do you want to know what I think of your pet?")
// comparsion 'equals' needs 2 == signs

if(age <= 1  && opinion == true){
    console.log( name + " the " + type + " wow that cat is only a kitten g");
    

}
//age is greater or equal to 10
else if (age >= 10 && opinion == true) {
    console.log ( name + " the " + type + " wow keep on purring Elder ")
}
// if none of the above conditions are true...
else if (opinion == true){
    console.log( name + " the " + type + " that's a mid aged cat ");
}
else {
    console.log("Fine I won't tell you my opinion")
}
if (type == " cat " || type == " dog " ){
    console.log(" That's a normal pet ")
}
else {
    console.log(" That's an exotic pet")
}


