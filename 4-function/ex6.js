function isSuperHero(name)
{
    var firstLetter = name.charAt(0);
    if(firstLetter == "s") {
        console.log("SuperHero");
    } else {
        console.log("Villain");
    }
}
isSuperHero("superman")