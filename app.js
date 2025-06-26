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





const pikachu = {id: 1 ,
    areaId: "pikachu-area",
    name: "ぴかち" ,
    level: 1 , 
    type: ["denki"], 
    hp: 35,
    attack: 55,
    defense: 40,
    speed: 90, 
    skill: ["でんこうせっか","サンダーボルト"],
    levelUp: function(){
        this.level++;
        this.hp += 10;
        if(this.level === 7){
            this.skill.push("かみなり");
        }
    }
};


const mokurou = {id: 2 ,
    areaId: "mokurou-area",
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
        this.hp += 10;
        if(this.level === 15){
            this.skill.push("草の呼吸");
        }
    }
};


const mimikkyu = {id: 3 ,
    areaId: "mimikkyu-area",
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
        this.hp += 10;
        if(this.level === 25){
            this.skill.push("身代わり");
        }
    }
};


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
    let html = `${pikachu.name} <br> レベル${pikachu.level} <br> HP${pikachu.hp}`;
    // if (pikachu.level > 1) {
    //     html += `<br>${pikachu.skill.join('<br>')}`;
    // }
    document.getElementById('pikachu-name').innerHTML = html;
}
updatePikachuName();

const pokeBalls = document.querySelectorAll('.poke-ball'); // ←これを追加

// ピカチュウのレベルアップ時

pokeBalls[0].addEventListener('click', () => {
    pikachu.levelUp();
    updatePikachuName();
    createSkillButtons(pikachu, "pikachu-skill-btns"); // ←修正
    pokeBalls[0].classList.add('active');
    setTimeout(() => {
        pokeBalls[0].classList.remove('active');
    }, 300);
});

  function updateMokurouName() {
    let html = `${mokurou.name} <br> レベル${mokurou.level} <br> HP${mokurou.hp}`;
    // if (mokurou.level > 1) {
    //     html += `<br>${mokurou.skill.join('<br>')}`;
    // }
    document.getElementById('mokurou-name').innerHTML = html;
}
updateMokurouName();

// もくろーちゃん
pokeBalls[1].addEventListener('click', () => {
    mokurou.levelUp();
    updateMokurouName();
    createSkillButtons(mokurou, "mokurou-skill-btns"); // ←修正
    pokeBalls[1].classList.add('active');
    setTimeout(() => {
        pokeBalls[1].classList.remove('active');
    }, 300);
});


function updatemimikkyuName() {
    let html = `${mimikkyu.name} <br> レベル${mimikkyu.level} <br> HP${mimikkyu.hp} `;
    // if (mimikkyu.level > 1) {
    //     html += `<br>${mimikkyu.skill.join('<br>')}`;
    // }
    document.getElementById('mimikkyu-name').innerHTML = html;
}
updatemimikkyuName();

// ミミッキュ
pokeBalls[2].addEventListener('click', () => {
    mimikkyu.levelUp();
    updatemimikkyuName();
    createSkillButtons(mimikkyu, "mimikkyu-skill-btns"); // ←修正
    pokeBalls[2].classList.add('active');
    setTimeout(() => {
        pokeBalls[2].classList.remove('active');
    }, 300);
});

let selectedSkill = null;
let selectedAttacker = null;

// スキルボタン生成
function createSkillButtons(pokemon, btnsId) {
    const btnsDiv = document.getElementById(btnsId);
    btnsDiv.innerHTML = "";
    pokemon.skill.forEach((skill) => {
        const btn = document.createElement("button");
        btn.textContent = skill;
        btn.onclick = (event) => {
            event.stopPropagation(); // これを追加！
            selectedAttacker = pokemon;
            selectedSkill = skill;
            alert("攻撃したいポケモンをクリックしてください！");
        };
        btnsDiv.appendChild(btn);
    });
}

// ポケモンエリアクリックで攻撃
function setupTargetClick(target, updateTarget) {
    const area = document.getElementById(target.areaId);
    area.onclick = () => {
        // ここでselectedAttackerを書き換えない！
        if (selectedSkill && selectedAttacker) {
            // 自分自身を攻撃しようとした場合は何もしない
            if (target === selectedAttacker) {
                alert("自分には攻撃できません！");
                selectedSkill = null;
                selectedAttacker = null;
                return;
            }
            let damage = 0;
            // スキル名でダメージ決定（例）
            if (selectedSkill === "サンダーボルト") damage = 20;
            if (selectedSkill === "でんこうせっか") damage = 10;
            if (selectedSkill === "かみなり") damage = 30;
            if (selectedSkill === "葉っぱカッター") damage = 15;
            if (selectedSkill === "体当たり") damage = 10;
            if (selectedSkill === "草の呼吸") damage = 25;
            if (selectedSkill === "シャドークロウ") damage = 18;
            if (selectedSkill === "じゃれつく") damage = 22;
            if (selectedSkill === "身代わり") damage = 0;

            target.hp -= damage;
            if (target.hp < 0) target.hp = 0;
            updateTarget();
            alert(`${selectedAttacker.name}の${selectedSkill}！\n${target.name}に${damage}ダメージ！`);
            // リセット
            selectedSkill = null;
            selectedAttacker = null;
        }
    };
}

// 初期化
createSkillButtons(pikachu, "pikachu-skill-btns");
createSkillButtons(mokurou, "mokurou-skill-btns");
createSkillButtons(mimikkyu, "mimikkyu-skill-btns");

setupTargetClick(pikachu, updatePikachuName);
setupTargetClick(mokurou, updateMokurouName);
setupTargetClick(mimikkyu, updatemimikkyuName);



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





