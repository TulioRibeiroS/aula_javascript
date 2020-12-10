/* introdução
let nome = "Tulio Ribeiro";
let idade = 29;
let idade2 = 10;
alert(nome + "tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
*/

/* trabalhando com array
let list = ["maçã", "pera", "laranja"];
list.push("uva"); // inclui um produto na lista, na ultima posição
list.pop(); //retira o ultimo produto da lista
console.log(list);
console.log(list.toString); // transforma em string
console.log(list.join(" - ")); // juntar lista
*/

/* trabalhando com dicionario
let fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

/* trabalhando com dicionario dentro de uma lista
let frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas;
alert(frutas[1].nome);
*/

/*
let idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*
let count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/

/*
let count;
for(count=0; count<=5; count++){
    console.log(count);
};
*/

/*
let d = new Date();
alert(d.getDate());
alert(d.getDay());
alert(d.getHours());
*/

/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));
*/

function clicou(){
    //alert("Obrigado por clicar")
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://openvpn.cesar.org.br"); // abrir em outra pagina
    window.location.href = "https://openvpn.cesar.org.br"; // abrir na mesma pagina
}

function trocar(element){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    element.innerHTML = "Obrigado por passar o mouse";
}

function voltar(element){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    element.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(element){
    console.log(element.value)
}