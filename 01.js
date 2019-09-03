const cafe = {
    name: "なんとかカフェ",
    spot: "東京",

    menus: ["ブルーマウンテン", "カフェモカ", "グアテマラ"],

};
console.log("------------------------------------");
console.log("いらっしゃいませ");
console.log(`${cafe.name}${cafe.spot}店にようこそ!`);
for(let i = 0; i < cafe.menus.length; i++) {
    console.log(`${cafe.menus[i]}`);
}
console.log("どれにしますか？");