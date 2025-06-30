

// --- 仲間リスト管理 ---
const pokemon = [
    `${pikachu.name}  レベル${pikachu.level}`,
    `${mokurou.name}  レベル${mokurou.level}`
];
function mypokemons(newpokemon1, newpokemon2) {
    pokemon.push(newpokemon1);
    if (newpokemon2) pokemon.push(newpokemon2);
    
}
mypokemons(`${mimikkyu.name}  レベル${mimikkyu.level}`);


// --- 表示更新関数 ---
function updatePikachuName() {
    document.getElementById('pikachu-name').innerHTML =
        `${pikachu.name} <br> レベル${pikachu.level} <br> HP${pikachu.hp}`;
}
function updateMokurouName() {
    document.getElementById('mokurou-name').innerHTML =
        `${mokurou.name} <br> レベル${mokurou.level} <br> HP${mokurou.hp}`;
}
function updatemimikkyuName() {
    document.getElementById('mimikkyu-name').innerHTML =
        `${mimikkyu.name} <br> レベル${mimikkyu.level} <br> HP${mimikkyu.hp}`;
}
updatePikachuName();
updateMokurouName();
updatemimikkyuName();

// --- レベルアップ処理 ---
const pokeBalls = document.querySelectorAll('.poke-ball');
pokeBalls[0].addEventListener('click', () => {
    pikachu.levelUp();
    updatePikachuName();
    createSkillButtons(pikachu, "pikachu-skill-btns");
    pokeBalls[0].classList.add('active');
    setTimeout(() => pokeBalls[0].classList.remove('active'), 300);
});
pokeBalls[1].addEventListener('click', () => {
    mokurou.levelUp();
    updateMokurouName();
    createSkillButtons(mokurou, "mokurou-skill-btns");
    pokeBalls[1].classList.add('active');
    setTimeout(() => pokeBalls[1].classList.remove('active'), 300);
});
pokeBalls[2].addEventListener('click', () => {
    mimikkyu.levelUp();
    updatemimikkyuName();
    createSkillButtons(mimikkyu, "mimikkyu-skill-btns");
    pokeBalls[2].classList.add('active');
    setTimeout(() => pokeBalls[2].classList.remove('active'), 300);
});

// --- スキルボタン生成 ---
let selectedSkill = null;
let selectedAttacker = null;
function createSkillButtons(pokemon, btnsId) {
    const btnsDiv = document.getElementById(btnsId);
    btnsDiv.innerHTML = "";
    pokemon.skill.forEach((skill) => {
        const btn = document.createElement("button");
        btn.textContent = skill;
        btn.onclick = (event) => {
            event.stopPropagation();
            selectedAttacker = pokemon;
            selectedSkill = skill;
            alert("攻撃したいポケモンをクリックしてください！");
        };
        btnsDiv.appendChild(btn);
        btnsDiv.appendChild(document.createElement("br"));
    });
}

function showAttackEffect(target) {
    const area = document.getElementById(target.areaId);
    area.classList.add('attack-effect');
    setTimeout(() => {
        area.classList.remove('attack-effect');
    }, 400); // アニメーション時間と合わせる
}

function setFaintedStyle(pokemon) {
    const area = document.getElementById(pokemon.areaId);

    // ピカチュウ: .face と .ear
    if (pokemon.areaId === "pikachu-area") {
        const face = area.querySelector('.face');
        if (face) face.classList.add('fainted');
        area.querySelectorAll('.ear').forEach(ear => ear.classList.add('fainted'));
    }

    // モクロー: .body
    if (pokemon.areaId === "mokurou-area") {
        const body = area.querySelector('.body');
        if (body) body.classList.add('fainted');
    }

    // ミミッキュ: .body と .ear
    if (pokemon.areaId === "mimikkyu-area") {
        const body = area.querySelector('.body');
        if (body) body.classList.add('fainted');
        area.querySelectorAll('.ear').forEach(ear => ear.classList.add('fainted'));
    }

    // 名前とボタンをグレーアウト＆ボタン無効化
    const nameDiv = document.getElementById(`${pokemon.areaId.replace('-area', '')}-name`);
    if (nameDiv) nameDiv.classList.add('fainted-text');

    const btnsDiv = document.getElementById(`${pokemon.areaId.replace('-area', '')}-skill-btns`);
    if (btnsDiv) {
        btnsDiv.classList.add('fainted-text');
        btnsDiv.querySelectorAll('button').forEach(btn => btn.disabled = true);
    }
}
// --- ポケモンエリアクリックで攻撃 ---
function setupTargetClick(target, updateTarget) {
    const area = document.getElementById(target.areaId);
    area.onclick = () => {
        if (selectedSkill && selectedAttacker) {
            if (target === selectedAttacker) {
                alert("自分には攻撃できません！");
                selectedSkill = null;
                selectedAttacker = null;
                return;
            }
            let damage = skills[selectedSkill] ? skills[selectedSkill].damage : 0;
            target.hp -= damage;
            if (target.hp < 0) target.hp = 0;
            updateTarget();
            showAttackEffect(target); // ★ここでエフェクト
            if (target.hp === 0) setFaintedStyle(target);
            setTimeout(() => {
    alert(`${selectedAttacker.name}の${selectedSkill}！\n${target.name}に${damage}ダメージ！`);
    selectedSkill = null;
    selectedAttacker = null;
}, 400);

        }
    };
}

// --- 初期化 ---
createSkillButtons(pikachu, "pikachu-skill-btns");
createSkillButtons(mokurou, "mokurou-skill-btns");
createSkillButtons(mimikkyu, "mimikkyu-skill-btns");

setupTargetClick(pikachu, updatePikachuName);
setupTargetClick(mokurou, updateMokurouName);
setupTargetClick(mimikkyu, updatemimikkyuName);