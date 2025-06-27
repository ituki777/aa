

// --- ポケモン定義 ---
const pikachu = {
    id: 1,
    areaId: "pikachu-area",
    name: "ぴかち",
    level: 1,
    type: ["denki"],
    hp: 35,
    attack: 55,
    defense: 40,
    speed: 90,
    skill: [skillList.pikachu[0], skillList.pikachu[1]],
    levelUp: function () {
        this.level++;
        this.hp += 10;
        if (this.level === 7) this.skill.push(skillList.pikachu[2]);
        if (this.level === 13) this.skill.push(skillList.pikachu[3]);
    }
};
const mokurou = {
    id: 2,
    areaId: "mokurou-area",
    name: "もくろーちゃん",
    level: 1,
    type: ["kusa"],
    hp: 40,
    attack: 50,
    defense: 35,
    speed: 65,
    skill: [skillList.mokurou[0], skillList.mokurou[1]],
    levelUp: function () {
        this.level++;
        this.hp += 10;
        if (this.level === 15) this.skill.push(skillList.mokurou[2]);
        if (this.level === 20) this.skill.push(skillList.mokurou[3]); 
    }
};
const mimikkyu = {
    id: 3,
    areaId: "mimikkyu-area",
    name: "みみっきゅ",
    level: 1,
    type: ["ghost"],
    hp: 55,
    attack: 90,
    defense: 80,
    speed: 96,
    skill: [skillList.mimikkyu[0], skillList.mimikkyu[1]],
    levelUp: function () {
        this.level++;
        this.hp += 10;
        if (this.level === 25) this.skill.push(skillList.mimikkyu[2]);
        if (this.level === 30) this.skill.push(skillList.mimikkyu[3]);
    }
};