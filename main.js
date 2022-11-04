"use strict";
for(let i=0; i!=12;i++)console.log(" ");
let deck = new Map;

let massiveHighCard = ['V','D','K','T'];

deck.set("six", [6, 4]);
deck.set("seven", [7, 4]);
deck.set("eight", [8, 4]);
deck.set("nine", [9, 4]);
deck.set("ten", [10, 4]);

deck.set(massiveHighCard[0], [2, 4]);
deck.set(massiveHighCard[1], [3, 4]);
deck.set(massiveHighCard[2], [4, 4]);
deck.set(massiveHighCard[3], [11, 4]);

const randomCard = (max) =>{
    let arr = Array.from(deck);

    let ran;
    do{
        ran = Math.floor(Math.random() * max);
    }while(arr[ran][1][1] == 0);

    deck.set(arr[ran][0], [arr[ran][1][0], arr[ran][1][1]-1]);
    return [arr[ran][1][0], arr[ran][0]];
}
let arr = Array.from(deck);

let results = new Map;
const N=10;
if(N>12)console.log("too many players");

else{

    for(let i=1;i!=N+1;i++) results.set(i+" Player", [0, []]);

    let res;
    let ranCard1;
    let ranCard2;
    for(let i=1;i!=N+1;i++){
        let playerDeck = [];

        ranCard1 = randomCard(9);
        ranCard2 = randomCard(9);
        res = ranCard1[0] + ranCard2[0];

        playerDeck.push(ranCard1[1], ranCard2[1]);
        while(res<11){
            let r = randomCard(9);
            res += r[0];
            playerDeck.push(r[1]);
        }
        results.set(i + " Player", [res, playerDeck]);
    }

    let array = Array.from(results, ([name, value]) => (value));

    array.sort(function(a, b){return b[0] - a[0]});

    var number = 22;
    let i=0;
    while(number > 21){
        number = array[i][0];
        i++;
    }

    console.log(results);
    for(let i of results){
        //console.log(i[1]);
        if(i[1][0] > 21)console.log(i[0] + " lose");
        else if(i[1][0] == number)console.log(i[0] + " Win");
    }
}
