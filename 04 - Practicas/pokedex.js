poketipos=[];
pokemoves=[];
pokeNum=0;
count=0;
count2=0;

const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput= pokeName.value.toLowerCase();
    const url =`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    fetch(url).then((res)=>{
        if(res.status != "200"){
            console.log(res);
            pokeImage("./pokeball.png");
        } 
        else{
            return res.json();
        }
    }).then((data)=>{
        
        datos(data);
    })

}

const fetchPokemonId = () =>{
    const url =`https://pokeapi.co/api/v2/pokemon/${this.pokeNum}`;

    fetch(url).then((res)=>{
        if(res.status != "200"){
            console.log(res);
            pokeImage("./pokeball.png");
        } 
        else{
            return res.json();
        }
    }).then((data)=>{
        
        datos(data);
    })

}

let datos = (data) => {
    this.poketipos= [];
    this.pokemoves= [];
    let pokeImg = data.sprites.front_default;
    this.pokeNum = data.id;
    let pokeName = data.forms[0].name;
    let pokeStats=[];

    data.types.forEach(x => this.poketipos.push(x.type.name));
    data.moves.forEach(x => this.pokemoves.push(x.move.name));
    data.stats.forEach(x => pokeStats.push(x.base_stat));
    
    document.getElementById("pokeStatsHp").innerHTML = pokeStats[0];
    document.getElementById("pokeStatsAtk").innerHTML = pokeStats[1];
    document.getElementById("pokeStatsDef").innerHTML = pokeStats[2];
    document.getElementById("pokeStatsVel").innerHTML = pokeStats[5];
    
    document.getElementById("types").innerHTML = this.poketipos[0];
    document.getElementById("moves").innerHTML = this.pokemoves[0];


    pokeImage(pokeImg);
    return this.pokeNum;
}

const pokeImage = (url) =>{
    const pokeImg =document.getElementById("pokeImg");
    pokeImg.src = url;
}

const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput= pokeName.value;
    console.log("Hola " + pokeInput);
}

const reset = () => {
    this.poketipos = [];
    this.pokemoves = [];
    document.getElementById("pokeStatsHp").innerHTML = '';
    document.getElementById("pokeStatsAtk").innerHTML = '';
    document.getElementById("pokeStatsDef").innerHTML = '';
    document.getElementById("pokeStatsVel").innerHTML = '';
    document.getElementById("types").innerHTML = 'Types';
    document.getElementById("moves").innerHTML = 'Moves';
    pokeImg =document.getElementById("pokeImg"); 
    pokeImg.src = 'img/pokeball.png';
    data = undefined;
    pokeName.value = '';  
}

const left = () => {
    this.count === 0 ? this.count = this.poketipos.length -1 : this.count -= 1;
    document.getElementById("types").innerHTML = this.poketipos[this.count];    
}

const right = () => {
    this.count2 === 0 ? this.count2 = this.pokemoves.length -1 : this.count2 -= 1;
    document.getElementById("moves").innerHTML = this.pokemoves[this.count2];
}

const down= () => {
    pokeNum === 1 ? null : pokeNum -= 1;
    fetchPokemonId();
}

const up = () => {
    pokeNum === 898 ? null : pokeNum += 1;
    fetchPokemonId();
}