// 上から順番に実行されるヨ
// これはコメントだヨ
// コンピューターは０から数えるヨ
// 配列にしたいときは[]を使うヨ　array　入れなくてもできるヨ 数字も文字列も入れられるヨ
// 繰り返しはforを使うヨ　for(初期化; 条件; 増減) { }
// 変数はletを使うヨ
// 文字列は""で囲むヨ
// 条件式　if(条件) { 条件に合っているときの処理 }　&&：かつ　||：または　===：等しい　!==：等しくない　条件たくさん増やせる
// 条件を満たさない場合はelseを使うヨ
// 関数はfunctionを使うヨ　function 関数名(引数) { 処理 }
// 関数を呼び出すときは　関数名();　で呼び出すヨ　この（）;の中に引数を入れると条件を変えられるヨ




let hello1 = "Hello world!";
const hello = "Hello!";

hello1 = "Hello world! こんにちは！"; // 変数の値を変更することができるヨ
// hello = ”こんにちは！”// 変数の値を変更することはできないヨ

console.log(hello1);


const pikachu = {id: 1 ,
    name: "ぴかち" ,
    level: 1 , 
    type: ["denki"], 
    hp: 35,
    attack: 55,
    defense: 40,
    speed: 90, 
    skill: ["サンダーボルト", "でんこうせっか"],
    levelUp: function(){
        this.level++;
        if(this.level === 7){
            this.skill.push("かみなり");
        }
    }
};

console.log ("1st pikachu", pikachu.level,pikachu.skill);
for (a=0; a < 1; a++){
    pikachu.levelUp();
    
}



const mokurou = {id: 2 ,
    name: "もくろーちゃん" ,
    level: 1 ,
    type: ["kusa"],
    hp: 40,
    attack: 50,
    defense: 35,
    speed: 65,
    skill: ["葉っぱカッター", "体当たり"],
    levelUp: function(){
        this.level++;
        if(this.level === 15){
            this.skill.push("草の呼吸");
        }
    }
};

console.log("1mokurou" , mokurou.level,mokurou.skill);
for (a=0; a < 1; a++){
    mokurou.levelUp();
}
console.log("2mokurou" , mokurou.level,mokurou.skill);


const mimikkyu = {id: 3 ,
    name: "みみっきゅ",
    level: 1 ,
    type: ["ghost"],
     hp: 55,
     attack: 90,
     defense: 80,
     speed: 96,
     skill: ["シャドークロウ", "じゃれつく"],
     levelUp: function(){
        this.level++;
        if(this.level === 25){
            this.skill.push("身代わり");
        }
    }
};

for (a=0; a < 10; a++){
    mimikkyu.levelUp();
     mimikkyu.levelUp();
}



// const LevelUp = () => {
//     console.log(pokemon[0]);
//     pokemon[0].levelUp();
//     console.log(pokemon[0]);

//     for (let i = 0; i < pokemon.length; i++) {
//         console.log(pokemon[i].levelUp());
//     }
// };

// LevelUp();
//     console.log(pokemon);




function mypokemons(newpokemon1,newpokemon2){
    pokemon.push(newpokemon1);
    if (newpokemon2){
        pokemon.push(newpokemon2);
    }

console.log("今の仲間は");
  for (const pokemons of pokemon) {
    console.log(pokemons);
  }
  console.log(`の ${pokemon.length} 匹です。`);
  }

const pokemon = [`${pikachu.name}  レベル${pikachu.level}` ,`${mokurou.name}  レベル${mokurou.level}`];


mypokemons(`${mimikkyu.name}  レベル${mimikkyu.level}`);
// mypokemons("にゃーす");
// mypokemons("ロコン");



function updatePikachuName() {
    document.getElementById('pikachu-name').textContent = `${pikachu.name}  レベル${pikachu.level} ${pikachu.skill}`;
}
updatePikachuName();

// 1つ目のpoke-ballボタンでピカチュウのレベルアップ
const pokeBalls = document.querySelectorAll('.poke-ball');
pokeBalls[0].addEventListener('click', () => {
    pikachu.levelUp();
    updatePikachuName();
     // 色を一時的に変える
    pokeBalls[0].classList.add('active');
    setTimeout(() => {
        pokeBalls[0].classList.remove('active');
    }, 300); // 0.3秒後に元に戻す
});

function updateMokurouName() {
    document.getElementById('mokurou-name').textContent = `${mokurou.name}  レベル${mokurou.level} ${mokurou.skill}`;
}
updateMokurouName();

// 2つ目のpoke-ballボタンでもくろーちゃんのレベルアップ
pokeBalls[1].addEventListener('click', () => {
    mokurou.levelUp();
    updateMokurouName();
    pokeBalls[1].classList.add('active');
    setTimeout(() => {
        pokeBalls[1].classList.remove('active');
    }, 300);
});


function updatemimikkyuName() {
    document.getElementById('mimikkyu-name').textContent = `${mimikkyu.name}  レベル${mimikkyu.level} ${mimikkyu.skill}`;
}
updatemimikkyuName();

// 3つ目のpoke-ballボタンでミミッキュのレベルアップ
pokeBalls[2].addEventListener('click', () => {
    mimikkyu.levelUp();
    updatemimikkyuName();
    pokeBalls[2].classList.add('active');
    setTimeout(() => {
        pokeBalls[2].classList.remove('active');
    }, 300);
});


document.getElementById('pikachu-name').textContent = pokemon[0];
document.getElementById('mokurou-name').textContent = pokemon[1];
document.getElementById('mimikkyu-name').textContent = pokemon[2];


// 経験値要素







// //技のダメージたち
// const thunderbolt = () => {
//     return 20;
// }
// console.log(thunderbolt());

// const quickAttack = () => {
//     return 10;
// }
// console.log(quickAttack());

// const razorLeaf = () => {
//     return 15;
// }
// console.log(razorLeaf());

// const tackle = (lastdamage) => {
//     return lastdamage * 1.2 ; // 1.2倍のダメージを与える
// }
// console.log(tackle(10));

// const shadowClaw = (theirHp) => {
//     if (Math.random () <=0.3){
//         return theirHp;
//      } else {
//         return 0; 
//      }
// }
// console.log(shadowClaw(100));

// const playRough = () => {
//     return 30;
// }
// console.log(playRough());





