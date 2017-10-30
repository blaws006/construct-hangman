//Intial Word function
function Word(word) {
    this.word = word;
};
//Prototype Method
Word.prototype.printWord = function () {
    console.log(this.word);
};
//New word object
var redskins = new Word("redskins");
var cowboys = new Word("cowboys");
var giants = new Word("giants");
var eagles = new Word("eagles");
var seahawks = new Word("seahawks");
var fourtyniners = new Word("fourtyniners");
var cardinals = new Word("cardinals");
var rams = new Word("rams");
var packers = new Word("packers");
var lions = new Word("lions");
var vikings = new Word("vikings");
var bears = new Word("bears");
var panthers = new Word("panthers");
var saints = new Word("saints");
var bucs = new Word("bucs");
var falcons = new Word("falcons");
var patriots = new Word("patriots");
var dolphins = new Word("dolphins");
var jets = new Word("jest");
var bills = new Word("bills");
var chiefs = new Word("chiefs");
var raiders = new Word("raiders");
var chargers = new Word("chargers");
var broncos = new Word("broncos");
var ravens = new Word("ravens");
var steelers = new Word("steelers");
var bengals = new Word("bengals");
var browns = new Word("browns");
var jaguars = new Word("jaguars");
var titans = new Word("titans");
var colts = new Word("colts");
var texans = new Word("texans");
//Here's how we run the new object method
// another.printWord();
//Exporting the new object
module.exports = {
    redskins:redskins, 
    cowboys: cowboys, 
    giants: giants, 
    eagles: eagles, 
    seahawks: seahawks, 
    fourtyniners: fourtyniners,
     cardinals: cardinals, 
     rams: rams,
      packers: packers, 
      lions: lions, 
      vikings: vikings, 
      bears: bears, 
      panthers: panthers, 
      saints: saints, 
      bucs: bucs, 
      falcons: falcons,
       patriots:  patriots, 
       dolphins: dolphins, 
       jets: jets, 
       bills: bills, 
       chiefs: chiefs, 
       raiders: raiders, 
       chargers: chargers, 
       broncos: broncos, 
       ravens: ravens, 
       steelers: steelers, 
       bengals: bengals, 
       browns: browns, 
       jaguars: jaguars, 
       titans: titans, 
       colts: colts, 
       texans: texans 
    };