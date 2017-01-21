var imie = prompt ("Jak sie nazywasz?");
var chcesz = prompt ("Hej " + imie + " Chcesz zagrac w gre?");
var losoweCzesciCiala = ["twarz", "noga", "reka", "stopa", "koszulka"];
var losowePrzymiotniki = ["brzydka", "brudna", "smierdzaca", "ochydna", "obrzydliwa"];
var losoweSlowa = ["twarz potwora", "glista", "swinia", "malpa", "krowa"];
var losowaCzescCiala = losoweCzesciCiala [Math.floor(Math.random() * 5 )];
var losowyPrzymiotnik = losowePrzymiotniki [Math.floor(Math.random() * 5 )];
var losoweSlowo = losoweSlowa [Math.floor(Math.random() * 5 )];
var zdanie = "Twoja " + losowaCzescCiala + " jest jak " + losowyPrzymiotnik + " " + losoweSlowo + "!!!";
if (chcesz == "yes") {
alert("coming soon");
} else if (chcesz == "tak") {
alert ("Niedlugo! Pracuje nad tym!");
} else if (chcesz == "no") {
alert (zdanie);
} else if (chcesz == "nie") {
alert (zdanie);
} else {
alert ("coming soon!")
}
