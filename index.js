var hapImg = ["Flowers.jpg","Cities.jpg","Rainbows.jpg"];
var sadImg = ["Oceans.jpg","Animals.jpg","Mountains.jpg"];
var upsImg = ["Beaches.jpg","Plants.jpg","Rains.jpg"]

var hapQu = ["'Love yourself for who you are, and trust me, if you are happy from within, you are the most beautiful person, and your smile is your best asset.' - Ileana D'Cruz
","'Let my soul smile through my heart and my heart smile through my eyes, that I may scatter rich smiles in sad hearts.' - Paramahansa Yogananda","'What you feel inside reflects on your face. So be happy and positive all the time.' - Sridevi"]
var sadQu = ["'You are a human being and are allowed to be imperfect, and you are allowed to be flawed. There is a lot of beauty in your imperfections, in your uniqueness.'  - Ileana D'Cruz","'Nothing always stays the same. You don't stay happy forever. You don't stay sad forever.' - Cat Zingano","'Some days are just bad days, that's all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that's just the way it is!' - Dita Von Teese"]
var upsQu = ["'I've always found the rain very calming.' - Venus Williams","'The past cannot be changed. The future is yet in your power.' - Unknown","'The opposite of anger is not calmness, its empathy.' - Mehmet Oz"]

var btn1 = $("#btnone");
var btn2 = $("#btntwo");
var btn3 = $("#btnthree");
var quotes = $(".quotations")

btn1.on("click", goQu1);
btn2.on("click", goQu2);
btn3.on("click", goQu3);

function goQu1(){
 var random = Math.random()*(hapQu.length - 1);
 var rounded = Math.floor(random);
 var Quote = hapQu[rounded];
 quotes.append(`<p> ${Quote}</p>`);
 var var random = Math.random()*(hapImg.length - 1);
 var rounded = Math.floor(random);
 var Image = hapImg[rounded];
 quotes.append(`<img> ${Image}`);
}

function goQu2(){
 var random = Math.random()*(Quote2.length - 1);
 var rounded = Math.floor(random);
 var Quote = Quote2[rounded];
 quotes.append(`<p> ${Quote}</p>`);
}

function goQu3(){
 var random = Math.random()*(Quote3.length - 1);
 var rounded = Math.floor(random);
 var Quote = Quote3[rounded];
 quotes.append(`<p> ${Quote}</p>`);
}
