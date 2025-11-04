// Część 3: Pisanie kodu

// Zadanie 7: Rabat
let cena = 100;
const RABAT = 0.15;
let cenaPoRabacie = cena - cena * RABAT;
console.log(`Cena przed rabatem: ${cena} zł`);
console.log(`Cena po rabacie: ${cenaPoRabacie} zł`);

// Zadanie 8: Sprawdzenie parzystości
let liczba = 17;
console.log(liczba % 2 === 0 ? "Liczba jest parzysta" : "Liczba jest nieparzysta");

// Zadanie 9: Pole prostokąta
const dlugosc = 10;  
const szerokosc = 5;  
let pole = dlugosc * szerokosc;  
console.log("Pole prostokąta wynosi: " + pole); 

// Zadanie 10: Operator inkrementacji
let licznik = 5;
licznik++; 
console.log(licznik); 
licznik++; 
console.log(licznik); 
licznik--; 
console.log(licznik); 

// Część 4: Zadanie praktyczne

// Zadanie 11: Kalkulator czasu
let sekundy = 135;
let minuty = Math.floor(sekundy / 60); 
let pozostaleSekundy = sekundy % 60; 
console.log(sekundy + " sekund to " + minuty + " minuty i " + pozostaleSekundy + " sekund.");
