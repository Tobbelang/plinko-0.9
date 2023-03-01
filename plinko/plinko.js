var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Events = Matter.Events,
    Composite = Matter.Composite;
    

var engine;
var world;
var particles = [];
var storlekPartikel = 8.6;
var pegs = [];
var sensors = [];
var lines = [];
var spliceParticle = 0;
let betprog = 0;
let updsession_id = 0;
let runsio = 0;
var fps = 1;
var fpstounits = 60/fps;
var returns;
var peg = 0x0001,
sensor = 0x0002;
var kollisioner = [];
//var unikaKollisioner = [];
//var arrOfNum = [];
var peg14 = 0,
peg15 = 0,
peg16 = 0,
peg17 = 0,
peg18 = 0,
peg19 = 0,
peg20 = 0,
peg21 = 0,
peg22 = 0,
peg23 = 0,
peg24 = 0,
peg25 = 0,
peg26 = 0,
peg27 = 0,
peg28 = 0,
peg29 = 0,
peg30 = 0,
peg31 = 0,
peg32 = 0,
peg33 = 0,
peg34 = 0,
peg35 = 0,
peg36 = 0,
peg37 = 0,
peg38 = 0,
peg39 = 0,
peg40 = 0,
peg41 = 0,
peg42 = 0,
peg43 = 0,
peg44 = 0,
peg45 = 0,
peg46 = 0,
peg47 = 0,
peg48 = 0,
peg49 = 0,
peg50 = 0,
peg51 = 0,
peg52 = 0,
peg53 = 0,
peg54 = 0,
peg55 = 0,
peg56 = 0,
peg57 = 0,
peg58 = 0,
peg59 = 0,
peg60 = 0,
peg61 = 0,
peg62 = 0,
peg63 = 0,
peg64 = 0,
peg65 = 0,
peg66 = 0,
peg67 = 0,
peg68 = 0,
peg69 = 0,
peg70 = 0,
peg71 = 0,
peg72 = 0,
peg73 = 0,
peg74 = 0,
peg75 = 0,
peg76 = 0,
peg77 = 0,
peg78 = 0,
peg79 = 0,
peg80 = 0,
peg81 = 0,
peg82 = 0,
peg83 = 0,
peg84 = 0,
peg85 = 0,
peg86 = 0,
peg87 = 0,
peg88 = 0,
peg89 = 0,
peg90 = 0,
peg91 = 0,
peg92 = 0,
peg93 = 0,
peg94 = 0,
peg95 = 0,
peg96 = 0,
peg97 = 0,
peg98 = 0,
peg99 = 0,
peg100 = 0,
peg101 = 0,
peg102 = 0,
peg103 = 0,
peg104 = 0,
peg105 = 0,
peg106 = 0,
peg107 = 0,
peg108 = 0,
peg109 = 0,
peg110 = 0,
peg111 = 0,
peg112 = 0,
peg113 = 0,
peg114 = 0,
peg115 = 0,
peg116 = 0;
function setup() {
    canvas = createCanvas(400, 450);
    canvas.position(windowWidth/2 - 200);
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 0.65;
    Events.on(engine, 'collisionStart', function(event) {
      var kolliderar = event.pairs;
      for (var i = 0; i < kolliderar.length; i++) {
        var objektA = kolliderar[i].bodyA.label;
        var objektB = kolliderar[i].bodyB.label;
        
      if(objektA == 'peg' && objektB == 'particle') {
          kolliderar[i].bodyA.events = true;
          if(kollisioner.includes(kolliderar[i].bodyB.id + ' - ' + kolliderar[i].bodyA.id)){
            continue;
          }
          kollisioner.push(kolliderar[i].bodyB.id + ' - ' + kolliderar[i].bodyA.id);
/*           kollisionerFilter = [...new Set(kollisioner)];
          unikaKollisioner = [...kollisionerFilter];
            for (let e = 0; e < unikaKollisioner.length; e++) {
              if(unikaKollisioner[e] < 100000) {
              unikaKollisioner[e] = unikaKollisioner[e].slice(-2);
            } else {
              unikaKollisioner[e] = unikaKollisioner[e].slice(-3);
            }
              arrOfNum = unikaKollisioner.map(str => {
                return Number(str);
              });
            }
            while (arrOfNum.length-1 >= 30) {
              arrOfNum.shift();
            }
            while(unikaKollisioner.length-1 >= 30) {
              unikaKollisioner.shift();
            } */

            while(kollisioner.length-1 >= 1000) {
              kollisioner.shift();
            } 
          switch(Number(kolliderar[i].bodyA.id)) {
          case 14:
          peg14 +=1;
          document.getElementById("bollAnimation14").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation14").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 15:
          peg15 +=1;
          document.getElementById("bollAnimation15").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation15").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 16:
          peg16 +=1;
          document.getElementById("bollAnimation16").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation16").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 17:
          peg17 +=1;
          document.getElementById("bollAnimation17").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation17").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 18:
          peg18 +=1;
          document.getElementById("bollAnimation18").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation18").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 19:
          peg19 +=1;
          document.getElementById("bollAnimation19").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation19").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 20:
          peg20 +=1;
          document.getElementById("bollAnimation20").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation20").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 21:
          peg21 +=1;
          document.getElementById("bollAnimation21").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation21").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 22:
          peg22 +=1;
          document.getElementById("bollAnimation22").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation22").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 23:
          peg23 +=1;
          document.getElementById("bollAnimation23").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation23").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 24:
          peg24 +=1;
          document.getElementById("bollAnimation24").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation24").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 25:
          peg25 +=1;
          document.getElementById("bollAnimation25").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation25").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 26:
          peg26 +=1;
          document.getElementById("bollAnimation26").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation26").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 27:
          peg27 +=1;
          document.getElementById("bollAnimation27").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation27").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 28:
          peg28 +=1;
          document.getElementById("bollAnimation28").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation28").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 29:
          peg29 +=1;
          document.getElementById("bollAnimation29").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation29").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 30:
          peg30 +=1;
          document.getElementById("bollAnimation30").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation30").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 31:
          peg31 +=1;
          document.getElementById("bollAnimation31").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation31").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 32:
          peg32 +=1;
          document.getElementById("bollAnimation32").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation32").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 33:
          peg33 +=1;
          document.getElementById("bollAnimation33").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation33").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 34:
          peg34 +=1;
          document.getElementById("bollAnimation34").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation34").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 35:
          peg35 +=1;
          document.getElementById("bollAnimation35").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation35").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 36:
          peg36 +=1;
          document.getElementById("bollAnimation36").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation36").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 37:
          peg37 +=1;
          document.getElementById("bollAnimation37").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation37").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 38:
          peg38 +=1;
          document.getElementById("bollAnimation38").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation38").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 39:
          peg39 +=1;
          document.getElementById("bollAnimation39").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation39").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 40:
          peg40 +=1;
          document.getElementById("bollAnimation40").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation40").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 41:
          peg41 +=1;
          document.getElementById("bollAnimation41").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation41").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 42:
          peg42 +=1;
          document.getElementById("bollAnimation42").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation42").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 43:
          peg43 +=1;
          document.getElementById("bollAnimation43").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation43").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 44:
          peg44 +=1;
          document.getElementById("bollAnimation44").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation44").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 45:
          peg45 +=1;
          document.getElementById("bollAnimation45").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation45").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 46:
          peg46 +=1;
          document.getElementById("bollAnimation46").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation46").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 47:
          peg47 +=1;
          document.getElementById("bollAnimation47").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation47").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 48:
          peg48 +=1;
          document.getElementById("bollAnimation48").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation48").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 49:
          peg49 +=1;
          document.getElementById("bollAnimation49").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation49").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 50:
          peg50 +=1;
          document.getElementById("bollAnimation50").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation50").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 51:
          peg51 +=1;
          document.getElementById("bollAnimation51").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation51").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 52:
          peg52 +=1;
          document.getElementById("bollAnimation52").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation52").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 53:
          peg53 +=1;
          document.getElementById("bollAnimation53").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation53").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 54:
          peg54 +=1;
          document.getElementById("bollAnimation54").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation54").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 55:
          peg55 +=1;
          document.getElementById("bollAnimation55").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation55").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 56:
          peg56 +=1;
          document.getElementById("bollAnimation56").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation56").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 57:
          peg57 +=1;
          document.getElementById("bollAnimation57").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation57").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 58:
          peg58 +=1;
          document.getElementById("bollAnimation58").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation58").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 59:
          peg59 +=1;
          document.getElementById("bollAnimation59").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation59").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 60:
          peg60 +=1;
          document.getElementById("bollAnimation60").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation60").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 61:
          peg61 +=1;
          document.getElementById("bollAnimation61").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation61").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 62:
          peg62 +=1;
          document.getElementById("bollAnimation62").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation62").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 63:
          peg63 +=1;
          document.getElementById("bollAnimation63").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation63").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 64:
          peg64 +=1;
          document.getElementById("bollAnimation64").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation64").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 65:
          peg65 +=1;
          document.getElementById("bollAnimation65").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation65").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 66:
          peg66 +=1;
          document.getElementById("bollAnimation66").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation66").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 67:
          peg67 +=1;
          document.getElementById("bollAnimation67").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation67").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 68:
          peg68 +=1;
          document.getElementById("bollAnimation68").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation68").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 69:
          peg69 +=1;
          document.getElementById("bollAnimation69").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation69").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 70:
          peg70 +=1;
          document.getElementById("bollAnimation70").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation70").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 71:
          peg71 +=1;
          document.getElementById("bollAnimation71").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation71").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 72:
          peg72 +=1;
          document.getElementById("bollAnimation72").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation72").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 73:
          peg73 +=1;
          document.getElementById("bollAnimation73").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation73").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 74:
          peg74 +=1;
          document.getElementById("bollAnimation74").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation74").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 75:
          peg75 +=1;
          document.getElementById("bollAnimation75").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation75").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 76:
          peg76 +=1;
          document.getElementById("bollAnimation76").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation76").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 77:
          peg77 +=1;
          document.getElementById("bollAnimation77").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation77").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 78:
          peg78 +=1;
          document.getElementById("bollAnimation78").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation78").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 79:
          peg79 +=1;
          document.getElementById("bollAnimation79").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation79").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 80:
          peg80 +=1;
          document.getElementById("bollAnimation80").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation80").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 81:
          peg81 +=1;
          document.getElementById("bollAnimation81").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation81").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 82:
          peg16 +=1;
          document.getElementById("bollAnimation82").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation82").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 83:
          peg83 +=1;
          document.getElementById("bollAnimation83").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation83").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 84:
          peg84 +=1;
          document.getElementById("bollAnimation84").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation84").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 85:
          peg85 +=1;
          document.getElementById("bollAnimation85").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation85").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 86:
          peg86 +=1;
          document.getElementById("bollAnimation86").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation86").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 87:
          peg87 +=1;
          document.getElementById("bollAnimation87").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation87").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 88:
          peg88 +=1;
          document.getElementById("bollAnimation88").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation88").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 89:
          peg89 +=1;
          document.getElementById("bollAnimation89").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation89").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 90:
          peg90 +=1;
          document.getElementById("bollAnimation90").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation90").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 91:
          peg91 +=1;
          document.getElementById("bollAnimation91").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation91").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 92:
          peg92 +=1;
          document.getElementById("bollAnimation92").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation92").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 93:
          peg93 +=1;
          document.getElementById("bollAnimation93").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation93").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 94:
          peg94 +=1;
          document.getElementById("bollAnimation94").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation94").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 95:
          peg95 +=1;
          document.getElementById("bollAnimation95").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation95").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 96:
          peg96 +=1;
          document.getElementById("bollAnimation96").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation96").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 97:
          peg97 +=1;
          document.getElementById("bollAnimation97").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation97").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 98:
          peg98 +=1;
          document.getElementById("bollAnimation98").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation98").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 99:
          peg99 +=1;
          document.getElementById("bollAnimation99").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation99").style.display = 'none' },150) 
          UpdateHits();
          break;
          case 100:
          peg100 +=1
          document.getElementById("bollAnimation100").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation100").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 101:
          peg101 +=1
          document.getElementById("bollAnimation101").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation101").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 102:
          peg102 +=1
          document.getElementById("bollAnimation102").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation102").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 103:
          peg103 +=1
          document.getElementById("bollAnimation103").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation103").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 104:
          peg104 +=1
          document.getElementById("bollAnimation104").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation104").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 105:
          peg105 +=1
          document.getElementById("bollAnimation105").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation105").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 106:
          peg106 +=1
          document.getElementById("bollAnimation106").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation106").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 107:
          peg107 +=1
          document.getElementById("bollAnimation107").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation107").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 108:
          peg108 +=1
          document.getElementById("bollAnimation108").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation108").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 109:
          peg109 +=1
          document.getElementById("bollAnimation109").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation109").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 110:
          peg110 +=1
          document.getElementById("bollAnimation110").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation110").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 111:
          peg111 +=1
          document.getElementById("bollAnimation111").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation111").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 112:
          peg112 +=1
          document.getElementById("bollAnimation112").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation112").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 113:
          peg113 +=1
          document.getElementById("bollAnimation113").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation113").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 114:
          peg114 +=1
          document.getElementById("bollAnimation114").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation114").style.display = 'none' },150) ;
          UpdateHits();
          break;
          case 115:
          peg115 +=1
          document.getElementById("bollAnimation115").style.display = 'block'; 
          setTimeout(function(){ document.getElementById("bollAnimation115").style.display = 'none' },10) ;
          UpdateHits();
          break;
          }
        } 
}
  });
  Events.on(engine, 'collisionEnd', function(event) {
    var kolliderar = event.pairs;
    for (var i = 0; i < kolliderar.length; i++) {
      var objektA = kolliderar[i].bodyA.label;
      var objektB = kolliderar[i].bodyB.label;
      if(objektA == 'particle' && objektB == 'peg') {
        kolliderar[i].bodyA.events = false;

    }
      if(objektA == 'peg' && objektB == 'particle') {
        kolliderar[i].bodyA.events = false;
      }
  }
});

Events.on(engine, 'collisionStart', function(event) {
  var sensorer = event.pairs;
  for (var i = 0; i < sensorer.length; i++) {
    var objektA = sensorer[i].bodyA.label;
    var objektB = sensorer[i].bodyB.label;

    if(objektA == 'sensor' && objektB == 'particle') {
      runsio++
    Matter.World.remove(world, sensorer[i].bodyB);
    spliceParticle += 1;
    if(updsession_id == session_id || checkbet == 1) {

    switch (sensorer[i].bodyA.id) {
     // case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13:
       
case 1:
  id1 += 1;
  id1 = id1;
  multiplikator = 33;
  pengarvärde = multiplikator * betPer;
  nyttvärde = pengarvärde + pengar[pengar.length-1]
  pengar.push(nyttvärde);

  returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;
  vinstoförlust.push(returns.toFixed(2));
  graphValue -= 1
  check();
  break;
case 2:
  id2 += 1;
  id2 = id2;
  multiplikator = 11;
  pengarvärde = multiplikator * betPer;
  nyttvärde = pengarvärde + pengar[pengar.length-1]
  pengar.push(nyttvärde);

  returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;
  vinstoförlust.push(returns.toFixed(2));
  graphValue -= 1;
  check();
  break;
case 3:
  id3 += 1;
  id3 = id3;
  multiplikator = 4;
  pengarvärde = multiplikator * betPer;
  nyttvärde = pengarvärde + pengar[pengar.length-1];
  pengar.push(nyttvärde);

  returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;
  vinstoförlust.push(returns.toFixed(2));
  graphValue -= 1;
  check();
  break;
case 4:
id4 += 1;
id4 = id4;
multiplikator = 2;
pengarvärde = multiplikator * betPer;
nyttvärde = pengarvärde + pengar[pengar.length-1];
  pengar.push(nyttvärde);
 
returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;
  vinstoförlust.push(returns.toFixed(2));
  graphValue -= 1;
  check();
break;
case 5:
id5 += 1;
id5 = id5;
multiplikator = 1.1;
pengarvärde = multiplikator * betPer;
nyttvärde = pengarvärde + pengar[pengar.length-1];
pengar.push(nyttvärde);  
returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;
vinstoförlust.push(returns.toFixed(2));
graphValue -= 1;
check();
break;
case 6:
id6 += 1;
id6 = id6;
multiplikator = 0.6;
pengarvärde = multiplikator * betPer;
nyttvärde = pengarvärde + pengar[pengar.length-1];
pengar.push(nyttvärde);
returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;
vinstoförlust.push(returns.toFixed(2));
graphValue += 1;
check();
break;
case 7:
id7 += 1;
id7 = id7;
multiplikator = 0.3;
pengarvärde = multiplikator * betPer;
nyttvärde = pengarvärde + pengar[pengar.length-1];
  pengar.push(nyttvärde);
 
returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;
  vinstoförlust.push(returns.toFixed(2));
  graphValue += 1;
  check();
break;
case 8:
id8 += 1;
id8 = id8;
multiplikator = 0.6;
pengarvärde = multiplikator * betPer;
nyttvärde = pengarvärde + pengar[pengar.length-1];
pengar.push(nyttvärde);  
returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;  
vinstoförlust.push(returns.toFixed(2));
graphValue += 1;
check();
break;
case 9:
id9 += 1;
id9 = id9;
multiplikator = 1.1;
pengarvärde = multiplikator * betPer;
nyttvärde = pengarvärde + pengar[pengar.length-1];
  pengar.push(nyttvärde);
 
returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;
  vinstoförlust.push(returns.toFixed(2));
  graphValue -= 1;
  check();
break;
case 10:
id10 += 1;
id10 = id10;
multiplikator = 2;
pengarvärde = multiplikator * betPer;
nyttvärde = pengarvärde + pengar[pengar.length-1];
  pengar.push(nyttvärde);
 
returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;
  vinstoförlust.push(returns.toFixed(2));
  graphValue -= 1;
  check();
break;
case 11:
id11 += 1;
id11 = id11;
multiplikator = 4;
pengarvärde = multiplikator * betPer;
nyttvärde = pengarvärde + pengar[pengar.length-1];
pengar.push(nyttvärde);  
returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;  
vinstoförlust.push(returns.toFixed(2));
graphValue -= 1;
check();
break;
case 12:
id12 += 1;
id12 = id12;
multiplikator = 11;
pengarvärde = multiplikator * betPer;
nyttvärde = pengarvärde + pengar[pengar.length-1];
  pengar.push(nyttvärde);
 
returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;
  vinstoförlust.push(returns.toFixed(2));
  graphValue -= 1;
  check();
break;
case 13:
id13 += 1;
id13 = id13;
multiplikator = 33;
pengarvärde = multiplikator * betPer;
nyttvärde = pengarvärde + pengar[pengar.length-1];
  pengar.push(nyttvärde);
 
returns = (betPer + (pengar[pengar.length-2] - pengar[pengar.length-1])) * -1;
  vinstoförlust.push(returns.toFixed(2));
  graphValue -= 1;
  check();
break;
}

} 
}
}});

    var startVärde = 195;
    var startVärde2 = 182.5;
    var mellanRum = /*22;*/ 25;
    var ned = 29;
    var storlekPeg = 3.5;
    var rad1 = 30;
    var rad2 = rad1 + ned;
    var rad3 = rad2 + ned;
    var rad4 = rad3 + ned;
    var rad5 = rad4 + ned;
    var rad6 = rad5 + ned;
    var rad7 = rad6 + ned;
    var rad8 = rad7 + ned;
    var rad9 = rad8 + ned;
    var rad10 = rad9 + ned;
    var rad11 = rad10 + ned;
    var rad12 = rad11 + ned;
    var lineW = 2;
    var lineH = 5;
    var config = 15;
    var sensorH = 5;
    var placering = 20;
    var confighalf = config/2
    sensors.push(new Sensor(startVärde2+confighalf - mellanRum*6, placering + ned * 12, mellanRum-config, sensorH, '#FF0D0D'));
    sensors.push(new Sensor(startVärde2+confighalf - mellanRum*5, placering + ned * 12, mellanRum-config, sensorH, '#FF4E11'));
    sensors.push(new Sensor(startVärde2+confighalf - mellanRum*4, placering + ned * 12, mellanRum-config, sensorH, '#FF8E15'));
    sensors.push(new Sensor(startVärde2+confighalf - mellanRum*3, placering + ned * 12, mellanRum-config, sensorH, '#FAB733'));
    sensors.push(new Sensor(startVärde2+confighalf - mellanRum*2, placering + ned * 12, mellanRum-config, sensorH, '#ACB334'));
    sensors.push(new Sensor(startVärde2+confighalf - mellanRum*1, placering + ned * 12, mellanRum-config, sensorH, '#69B34C'));
    sensors.push(new Sensor(startVärde2+confighalf, placering + ned * 12, mellanRum-config, sensorH, '#34D400'));
    sensors.push(new Sensor(startVärde2+confighalf + mellanRum*1, placering + ned * 12, mellanRum-config, sensorH, '#69B34C'));
    sensors.push(new Sensor(startVärde2+confighalf + mellanRum*2, placering + ned * 12, mellanRum-config, sensorH, '#ACB334'));
    sensors.push(new Sensor(startVärde2+confighalf + mellanRum*3, placering + ned * 12, mellanRum-config, sensorH, '#FAB733'));
    sensors.push(new Sensor(startVärde2+confighalf + mellanRum*4, placering + ned * 12, mellanRum-config, sensorH, '#FF8E15'));
    sensors.push(new Sensor(startVärde2+confighalf + mellanRum*5, placering + ned * 12, mellanRum-config, sensorH, '#FF4E11'));
    sensors.push(new Sensor(startVärde2+confighalf + mellanRum*6, placering + ned * 12, mellanRum-config, sensorH, '#FF0D0D'));
    //rad1
    pegs.push(new Peg(startVärde - mellanRum, rad1, storlekPeg));
    pegs.push(new Peg(startVärde, rad1, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum, rad1, storlekPeg));
    //rad2
    pegs.push(new Peg(startVärde2 - mellanRum, rad2, storlekPeg));
    pegs.push(new Peg(startVärde2, rad2, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum, rad2, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*2, rad2, storlekPeg));
    //rad3
    pegs.push(new Peg(startVärde - mellanRum*2, rad3, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum, rad3, storlekPeg));
    pegs.push(new Peg(startVärde, rad3, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum, rad3, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*2, rad3, storlekPeg));
    //rad4
    pegs.push(new Peg(startVärde2 - mellanRum*2, rad4, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum, rad4, storlekPeg));
    pegs.push(new Peg(startVärde2, rad4, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum, rad4, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*2, rad4, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*3, rad4, storlekPeg));
    //rad5
    pegs.push(new Peg(startVärde - mellanRum*3, rad5, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum*2, rad5, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum, rad5, storlekPeg));
    pegs.push(new Peg(startVärde, rad5, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum, rad5, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*2, rad5, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*3, rad5, storlekPeg));
    //rad6
    pegs.push(new Peg(startVärde2 - mellanRum*3, rad6, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum*2, rad6, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum, rad6, storlekPeg));
    pegs.push(new Peg(startVärde2, rad6, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum, rad6, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*2, rad6, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*3, rad6, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*4, rad6, storlekPeg));
    //rad7
    pegs.push(new Peg(startVärde - mellanRum*4, rad7, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum*3, rad7, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum*2, rad7, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum, rad7, storlekPeg));
    pegs.push(new Peg(startVärde, rad7, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum, rad7, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*2, rad7, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*3, rad7, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*4, rad7, storlekPeg));
    //rad8
    pegs.push(new Peg(startVärde2 - mellanRum*4, rad8, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum*3, rad8, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum*2, rad8, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum, rad8, storlekPeg));
    pegs.push(new Peg(startVärde2, rad8, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum, rad8, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*2, rad8, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*3, rad8, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*4, rad8, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*5, rad8, storlekPeg));
    //rad9 
    pegs.push(new Peg(startVärde - mellanRum*5, rad9, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum*4, rad9, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum*3, rad9, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum*2, rad9, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum, rad9, storlekPeg));
    pegs.push(new Peg(startVärde, rad9, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum, rad9, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*2, rad9, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*3, rad9, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*4, rad9, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*5, rad9, storlekPeg));
    //rad10
    pegs.push(new Peg(startVärde2 - mellanRum*5, rad10, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum*4, rad10, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum*3, rad10, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum*2, rad10, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum, rad10, storlekPeg));
    pegs.push(new Peg(startVärde2, rad10, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum, rad10, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*2, rad10, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*3, rad10, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*4, rad10, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*5, rad10, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*6, rad10, storlekPeg));
    //rad11
    pegs.push(new Peg(startVärde - mellanRum*6, rad11, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum*5, rad11, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum*4, rad11, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum*3, rad11, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum*2, rad11, storlekPeg));
    pegs.push(new Peg(startVärde - mellanRum, rad11, storlekPeg));
    pegs.push(new Peg(startVärde, rad11, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum, rad11, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*2, rad11, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*3, rad11, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*4, rad11, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*5, rad11, storlekPeg));
    pegs.push(new Peg(startVärde + mellanRum*6, rad11, storlekPeg));
    //rad12
    pegs.push(new Peg(startVärde2 - mellanRum*6, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum*5, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum*4, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum*3, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum*2, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2 - mellanRum, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*2, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*3, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*4, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*5, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*6, rad12, storlekPeg));
    pegs.push(new Peg(startVärde2 + mellanRum*7, rad12, storlekPeg));
    //linjer
 
  }

  function draw() {
    
    background(71, 119, 125);  
    for (var i = 0; i < sensors.length; i++) {
      sensors[i].show();
      }
     fps = 60/fpstounits;
     
    if (frameCount % fps == 0 && start == true) {
    var plinko = new Particle(random(193, 197),0, storlekPartikel);
    particles.push(plinko);
    
    betprog++
    document.getElementById("betprog").innerHTML = betprog;
    if(checkbet == 0) {
      document.getElementById("betbet").innerHTML = "/" + bethistory[bethistory.length-checkbet-1];
    } else {
      document.getElementById("betbet").innerHTML = "/" + bethistory[bethistory.length-checkbet];
    }

        if(betprog == bethistory[bethistory.length-checkbet]) {
      
      updsession_id = session_id
      setTimeout(() => {
        document.getElementById("playpause").style.width = "0px";
        document.getElementById("playpause").style.height = "0px";
        document.getElementById("playpause").style.borderTop = "7.5px solid transparent";
        document.getElementById("playpause").style.borderBottom = "7.5px solid transparent";
        document.getElementById("playpause").style.borderLeft = "10px solid green";
        document.getElementById("playpause").style.borderRadius = "0.5px";
        document.getElementById("playpause").style.left = "left: 270px";
        document.getElementById("playpause").style.top = "50%";
        document.getElementById("playpause").style.transform = "translate(0,-50%)";
        document.getElementById("betprog").innerHTML = "";
        document.getElementById("betbet").innerHTML = "";
        betprog = 0;
        
        play = false
        start = false;
      }, "100")
    } 
  

    run();
    done();
    }
    /*for (var i = 0; i < particles.length; i++) {
        particles[i].create();
        if(spliceParticle >= 1) {
          return (particles.splice(i, 1),
              i--,
              spliceParticle--);
            }
    }*/
    for (var i = 0; i < particles.length; i++) {
      particles[i].create();
      
      if(spliceParticle >= 1) {
        var particlesUpdate = new Array(particles.length - 1);
        spliceParticle--;
        for(var o = 1; o < particles.length; o++) {
          particlesUpdate[o - 1] = particles[o];
        }
          particles = particlesUpdate;
        }
}

    for (var i = 0; i < pegs.length; i++) {
      pegs[i].create();
  }
  for (var i = 0; i < lines.length; i++) {
    lines[i].show();
}
    Engine.update(engine);
  }
