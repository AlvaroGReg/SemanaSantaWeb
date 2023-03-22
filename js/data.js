let cofradiasList = [{
    name: "Santa Vera Cruz y Santo Entierro", fundation: "1482",
    logo: "res/escudo-veracruz.gif",
    president: "José Antonio Martínez Lucio", brothers: "300", steps: 15,
    url: "http://www.ssantabenavente.com/vcyse/vcyse.htm",
    youtube: "https://www.youtube.com/embed/Y-sZGpKKzGY"
}, {
    name: "Jesús Nazareno", fundation: "1604", logo: "res/escudo-nazareno.png",
    president: "Fco. José Rebordinos Hernando", brothers: "200", steps: 1,
    url: "http://www.ssantabenavente.com/nazareno/nazarenos.htm",
    youtube: "https://www.youtube.com/embed/PGOVWY2Sx-g"
}, {
    name: "Cofradía del silencio", fundation: "1943", logo: "res/cruz-santiago.svg",
    president: "Juan Antonio Flórez López", brothers: "120", steps: 3,
    url: "http://www.ssantabenavente.com/silencio/silencio.htm",
    youtube: "https://www.youtube.com/embed/CzeUm5Chj1o"
}];

let daysList = [{
    id: "previos", cofradias: [1], procesiones: ["Procesión de Las Palmas"]
}, {
    id: "martes", cofradias: [1], procesiones: ["Procesión de Las Tinieblas"]
}, {
    id: "miercoles", cofradias: [3], procesiones: ["Procesión del Silencio"]
}, {
    id: "jueves", cofradias: [1, 2], procesiones: ["Procesión de La Santa Vera Cruz"]
}, {
    id: "viernes", cofradias: [1, 2], procesiones: ["Procesión del Encuentro"]
}, {
    id: "domingo", cofradias: [1], procesiones: ["Procesión del Santo Entierro"]
}];