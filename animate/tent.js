(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1536,
	height: 2048,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"assets/ball.png", id:"ball"},
		{src:"assets/Bitmap1.png", id:"Bitmap1"},
		{src:"assets/Bitmap2.png", id:"Bitmap2"},
		{src:"assets/Bitmap3.png", id:"Bitmap3"},
		{src:"assets/bookclosed.png", id:"bookclosed"},
		{src:"assets/bookopen.png", id:"bookopen"},
		{src:"assets/booksspilled.png", id:"booksspilled"},
		{src:"assets/booksupright.png", id:"booksupright"},
		{src:"assets/boxlidclosed.png", id:"boxlidclosed"},
		{src:"assets/boxlidopen.png", id:"boxlidopen"},
		{src:"assets/catinchest.png", id:"catinchest"},
		{src:"assets/chestlidopen.png", id:"chestlidopen"},
		{src:"assets/clock.png", id:"clock"},
		{src:"assets/crystalball.png", id:"crystalball"},
		{src:"assets/dialogbox.png", id:"dialogbox"},
		{src:"assets/greenbooks.png", id:"greenbooks"},
		{src:"assets/inkandfeather.png", id:"inkandfeather"},
		{src:"assets/inventory.png", id:"inventory"},
		{src:"assets/keys.png", id:"keys"},
		{src:"assets/Layer1.png", id:"Layer1"},
		{src:"assets/Layer10.jpg", id:"Layer10"},
		{src:"assets/Layer11.jpg", id:"Layer11"},
		{src:"assets/Layer12.jpg", id:"Layer12"},
		{src:"assets/Layer13.jpg", id:"Layer13"},
		{src:"assets/Layer14.jpg", id:"Layer14"},
		{src:"assets/Layer15.jpg", id:"Layer15"},
		{src:"assets/Layer16.jpg", id:"Layer16"},
		{src:"assets/Layer17.jpg", id:"Layer17"},
		{src:"assets/Layer18.jpg", id:"Layer18"},
		{src:"assets/Layer19.jpg", id:"Layer19"},
		{src:"assets/Layer2.jpg", id:"Layer2"},
		{src:"assets/Layer20.jpg", id:"Layer20"},
		{src:"assets/Layer21.jpg", id:"Layer21"},
		{src:"assets/Layer22.jpg", id:"Layer22"},
		{src:"assets/Layer23.jpg", id:"Layer23"},
		{src:"assets/Layer24.jpg", id:"Layer24"},
		{src:"assets/Layer25.jpg", id:"Layer25"},
		{src:"assets/Layer26.jpg", id:"Layer26"},
		{src:"assets/Layer27.jpg", id:"Layer27"},
		{src:"assets/Layer28.jpg", id:"Layer28"},
		{src:"assets/Layer29.jpg", id:"Layer29"},
		{src:"assets/Layer3.jpg", id:"Layer3"},
		{src:"assets/Layer30.jpg", id:"Layer30"},
		{src:"assets/Layer31.jpg", id:"Layer31"},
		{src:"assets/Layer32.jpg", id:"Layer32"},
		{src:"assets/Layer33.jpg", id:"Layer33"},
		{src:"assets/Layer34.jpg", id:"Layer34"},
		{src:"assets/Layer35.jpg", id:"Layer35"},
		{src:"assets/Layer36.jpg", id:"Layer36"},
		{src:"assets/Layer37.jpg", id:"Layer37"},
		{src:"assets/Layer38.jpg", id:"Layer38"},
		{src:"assets/Layer39.jpg", id:"Layer39"},
		{src:"assets/Layer4.jpg", id:"Layer4"},
		{src:"assets/Layer40.jpg", id:"Layer40"},
		{src:"assets/Layer5.jpg", id:"Layer5"},
		{src:"assets/Layer6.jpg", id:"Layer6"},
		{src:"assets/Layer7.jpg", id:"Layer7"},
		{src:"assets/Layer8.jpg", id:"Layer8"},
		{src:"assets/Layer9.jpg", id:"Layer9"},
		{src:"assets/magicwand.png", id:"magicwand"},
		{src:"assets/mirror1.png", id:"mirror1"},
		{src:"assets/mirror10.png", id:"mirror10"},
		{src:"assets/mirror11.png", id:"mirror11"},
		{src:"assets/mirror12.png", id:"mirror12"},
		{src:"assets/mirror13.png", id:"mirror13"},
		{src:"assets/mirror14.png", id:"mirror14"},
		{src:"assets/mirror2.png", id:"mirror2"},
		{src:"assets/mirror3.png", id:"mirror3"},
		{src:"assets/mirror4.png", id:"mirror4"},
		{src:"assets/mirror5.png", id:"mirror5"},
		{src:"assets/mirror6.png", id:"mirror6"},
		{src:"assets/mirror7.png", id:"mirror7"},
		{src:"assets/mirror8.png", id:"mirror8"},
		{src:"assets/mirror9.png", id:"mirror9"},
		{src:"assets/movebuttonright.png", id:"movebuttonright"},
		{src:"assets/musicboxhandle1.png", id:"musicboxhandle1"},
		{src:"assets/musicboxhandle2.png", id:"musicboxhandle2"},
		{src:"assets/musicboxhandle3.png", id:"musicboxhandle3"},
		{src:"assets/musicboxhandle4.png", id:"musicboxhandle4"},
		{src:"assets/musicbox.png", id:"musicbox"},
		{src:"assets/pan.png", id:"pan"},
		{src:"assets/passwordnote.png", id:"passwordnote"},
		{src:"assets/picture.png", id:"picture"},
		{src:"assets/purplechestlidclosed.png", id:"purplechestlidclosed"},
		{src:"assets/purplechestlidopen.png", id:"purplechestlidopen"},
		{src:"assets/purplechest.png", id:"purplechest"},
		{src:"assets/redboots.png", id:"redboots"},
		{src:"assets/rug.png", id:"rug"},
		{src:"assets/scissorsclosed.png", id:"scissorsclosed"},
		{src:"assets/scissorsopen.png", id:"scissorsopen"},
		{src:"assets/scrollcut.png", id:"scrollcut"},
		{src:"assets/scrollopen.png", id:"scrollopen"},
		{src:"assets/scrolltied.png", id:"scrolltied"},
		{src:"assets/umbrella.png", id:"umbrella"},
		{src:"assets/yellowchestfront.png", id:"yellowchestfront"},
		{src:"assets/ballwav.mp3", id:"ballwav"},
		{src:"assets/bootswav.mp3", id:"bootswav"},
		{src:"assets/cast_iron_panwav.mp3", id:"cast_iron_panwav"},
		{src:"assets/click_on_anything_with_wandwav.mp3", id:"click_on_anything_with_wandwav"},
		{src:"assets/clockwav.mp3", id:"clockwav"},
		{src:"assets/combo_lockwav.mp3", id:"combo_lockwav"},
		{src:"assets/combo_lock_successwav.mp3", id:"combo_lock_successwav"},
		{src:"assets/featherwav.mp3", id:"featherwav"},
		{src:"assets/greenbookswav.mp3", id:"greenbookswav"},
		{src:"assets/mirror10b.mp3", id:"mirror10b"},
		{src:"assets/mirror11b.mp3", id:"mirror11b"},
		{src:"assets/mirror12b.mp3", id:"mirror12b"},
		{src:"assets/mirror13b.mp3", id:"mirror13b"},
		{src:"assets/mirror14b.mp3", id:"mirror14b"},
		{src:"assets/mirror1b.mp3", id:"mirror1b"},
		{src:"assets/mirror2b.mp3", id:"mirror2b"},
		{src:"assets/mirror3b.mp3", id:"mirror3b"},
		{src:"assets/mirror4b.mp3", id:"mirror4b"},
		{src:"assets/mirror5b.mp3", id:"mirror5b"},
		{src:"assets/mirror6b.mp3", id:"mirror6b"},
		{src:"assets/mirror7b.mp3", id:"mirror7b"},
		{src:"assets/mirror8b.mp3", id:"mirror8b"},
		{src:"assets/mirror9b.mp3", id:"mirror9b"},
		{src:"assets/mirror_135wav.mp3", id:"mirror_135wav"},
		{src:"assets/picture_framewav.mp3", id:"picture_framewav"},
		{src:"assets/pile_of_bookswav.mp3", id:"pile_of_bookswav"},
		{src:"assets/red_book_openwav.mp3", id:"red_book_openwav"},
		{src:"assets/scissors_open_and_closewav.mp3", id:"scissors_open_and_closewav"},
		{src:"assets/umbrellawav.mp3", id:"umbrellawav"},
		{src:"assets/unwrap_scrollwav.mp3", id:"unwrap_scrollwav"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,71);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,250);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,250);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,250);


(lib.bookclosed = function() {
	this.initialize(img.bookclosed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,201);


(lib.bookopen = function() {
	this.initialize(img.bookopen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,200);


(lib.booksspilled = function() {
	this.initialize(img.booksspilled);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1071,259);


(lib.booksupright = function() {
	this.initialize(img.booksupright);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,411);


(lib.boxlidclosed = function() {
	this.initialize(img.boxlidclosed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,201);


(lib.boxlidopen = function() {
	this.initialize(img.boxlidopen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,486,213);


(lib.catinchest = function() {
	this.initialize(img.catinchest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,106);


(lib.chestlidopen = function() {
	this.initialize(img.chestlidopen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,616,239);


(lib.clock = function() {
	this.initialize(img.clock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,230);


(lib.crystalball = function() {
	this.initialize(img.crystalball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,212);


(lib.dialogbox = function() {
	this.initialize(img.dialogbox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,833,300);


(lib.greenbooks = function() {
	this.initialize(img.greenbooks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,173);


(lib.inkandfeather = function() {
	this.initialize(img.inkandfeather);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,336);


(lib.inventory = function() {
	this.initialize(img.inventory);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,203);


(lib.keys = function() {
	this.initialize(img.keys);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,160);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,333);


(lib.Layer10 = function() {
	this.initialize(img.Layer10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,333);


(lib.Layer11 = function() {
	this.initialize(img.Layer11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,334);


(lib.Layer12 = function() {
	this.initialize(img.Layer12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib.Layer13 = function() {
	this.initialize(img.Layer13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,334);


(lib.Layer14 = function() {
	this.initialize(img.Layer14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib.Layer15 = function() {
	this.initialize(img.Layer15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib.Layer16 = function() {
	this.initialize(img.Layer16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,334);


(lib.Layer17 = function() {
	this.initialize(img.Layer17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib.Layer18 = function() {
	this.initialize(img.Layer18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib.Layer19 = function() {
	this.initialize(img.Layer19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,334);


(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,333);


(lib.Layer20 = function() {
	this.initialize(img.Layer20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,334);


(lib.Layer21 = function() {
	this.initialize(img.Layer21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,334);


(lib.Layer22 = function() {
	this.initialize(img.Layer22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib.Layer23 = function() {
	this.initialize(img.Layer23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,334);


(lib.Layer24 = function() {
	this.initialize(img.Layer24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib.Layer25 = function() {
	this.initialize(img.Layer25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib.Layer26 = function() {
	this.initialize(img.Layer26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,334);


(lib.Layer27 = function() {
	this.initialize(img.Layer27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib.Layer28 = function() {
	this.initialize(img.Layer28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,334);


(lib.Layer29 = function() {
	this.initialize(img.Layer29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,334);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,333);


(lib.Layer30 = function() {
	this.initialize(img.Layer30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,334);


(lib.Layer31 = function() {
	this.initialize(img.Layer31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,26);


(lib.Layer32 = function() {
	this.initialize(img.Layer32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,26);


(lib.Layer33 = function() {
	this.initialize(img.Layer33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,26);


(lib.Layer34 = function() {
	this.initialize(img.Layer34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,26);


(lib.Layer35 = function() {
	this.initialize(img.Layer35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,26);


(lib.Layer36 = function() {
	this.initialize(img.Layer36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,26);


(lib.Layer37 = function() {
	this.initialize(img.Layer37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,26);


(lib.Layer38 = function() {
	this.initialize(img.Layer38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,26);


(lib.Layer39 = function() {
	this.initialize(img.Layer39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,26);


(lib.Layer4 = function() {
	this.initialize(img.Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,333);


(lib.Layer40 = function() {
	this.initialize(img.Layer40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,26);


(lib.Layer5 = function() {
	this.initialize(img.Layer5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,333);


(lib.Layer6 = function() {
	this.initialize(img.Layer6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,333);


(lib.Layer7 = function() {
	this.initialize(img.Layer7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,333);


(lib.Layer8 = function() {
	this.initialize(img.Layer8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,333);


(lib.Layer9 = function() {
	this.initialize(img.Layer9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,333);


(lib.magicwand = function() {
	this.initialize(img.magicwand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,471,66);


(lib.mirror1 = function() {
	this.initialize(img.mirror1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,113);


(lib.mirror10 = function() {
	this.initialize(img.mirror10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,72);


(lib.mirror11 = function() {
	this.initialize(img.mirror11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,218);


(lib.mirror12 = function() {
	this.initialize(img.mirror12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,201);


(lib.mirror13 = function() {
	this.initialize(img.mirror13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,144);


(lib.mirror14 = function() {
	this.initialize(img.mirror14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,152);


(lib.mirror2 = function() {
	this.initialize(img.mirror2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,182);


(lib.mirror3 = function() {
	this.initialize(img.mirror3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,207);


(lib.mirror4 = function() {
	this.initialize(img.mirror4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,275);


(lib.mirror5 = function() {
	this.initialize(img.mirror5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,264);


(lib.mirror6 = function() {
	this.initialize(img.mirror6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,137);


(lib.mirror7 = function() {
	this.initialize(img.mirror7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,107);


(lib.mirror8 = function() {
	this.initialize(img.mirror8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,102);


(lib.mirror9 = function() {
	this.initialize(img.mirror9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,355);


(lib.movebuttonright = function() {
	this.initialize(img.movebuttonright);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,183);


(lib.musicboxhandle1 = function() {
	this.initialize(img.musicboxhandle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,34);


(lib.musicboxhandle2 = function() {
	this.initialize(img.musicboxhandle2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,40);


(lib.musicboxhandle3 = function() {
	this.initialize(img.musicboxhandle3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,17);


(lib.musicboxhandle4 = function() {
	this.initialize(img.musicboxhandle4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,30);


(lib.musicbox = function() {
	this.initialize(img.musicbox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,136);


(lib.pan = function() {
	this.initialize(img.pan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,272);


(lib.passwordnote = function() {
	this.initialize(img.passwordnote);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,241);


(lib.picture = function() {
	this.initialize(img.picture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,368);


(lib.purplechestlidclosed = function() {
	this.initialize(img.purplechestlidclosed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,477,302);


(lib.purplechestlidopen = function() {
	this.initialize(img.purplechestlidopen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,494,172);


(lib.purplechest = function() {
	this.initialize(img.purplechest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,479,289);


(lib.redboots = function() {
	this.initialize(img.redboots);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,586);


(lib.rug = function() {
	this.initialize(img.rug);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2232,219);


(lib.scissorsclosed = function() {
	this.initialize(img.scissorsclosed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,243);


(lib.scissorsopen = function() {
	this.initialize(img.scissorsopen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,270);


(lib.scrollcut = function() {
	this.initialize(img.scrollcut);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,166);


(lib.scrollopen = function() {
	this.initialize(img.scrollopen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,292);


(lib.scrolltied = function() {
	this.initialize(img.scrolltied);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,148);


(lib.umbrella = function() {
	this.initialize(img.umbrella);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,556);


(lib.yellowchestfront = function() {
	this.initialize(img.yellowchestfront);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,426,191);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.inkandfeather();
	this.instance.setTransform(-59,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-168,118,336);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.setTransform(-39.5,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-35.5,79,71);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.setTransform(-39.5,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-35.5,79,71);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dialogbox();
	this.instance.setTransform(-416,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-416,-150,833,300);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dialogbox();
	this.instance.setTransform(-416,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-416,-150,833,300);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.picture();
	this.instance.setTransform(-135,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-184,270,368);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.clock();
	this.instance.setTransform(-88.5,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-115,177,230);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pan();
	this.instance.setTransform(-95,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-136,190,272);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.keys();
	this.instance.setTransform(-70,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-80,140,160);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bookclosed();
	this.instance.setTransform(-81.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-100.5,163,201);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scrollopen();
	this.instance.setTransform(-115.5,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,-146,231,292);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.purplechest();
	this.instance.setTransform(-238.3,-135.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 5
	this.instance_1 = new lib.purplechestlidopen();
	this.instance_1.setTransform(-268.5,-156.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Layer 4
	this.instance_2 = new lib.purplechestlidclosed();
	this.instance_2.setTransform(-239.5,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.5,-149,480.2,302.5);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.musicbox();
	this.instance.setTransform(-110,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-68,220,136);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.musicbox();
	this.instance.setTransform(-110,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-68,220,136);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.musicboxhandle1();
	this.instance.setTransform(-31,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-17,62,34);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.musicboxhandle1();
	this.instance.setTransform(-31,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-17,62,34);


(lib.scrollbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.movebuttonright();
	this.instance.setTransform(-193.1,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.1,-77.5,192,183);


(lib.combolock_number = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{One:0,Two:2,Three:4,Four:6,Five:8,Six:10,Seven:12,Eight:14,Nine:16});

	// timeline functions:
	this.frame_0 = function() {
		playSound("combo_lockwav");
	}
	this.frame_2 = function() {
		playSound("combo_lockwav");
	}
	this.frame_4 = function() {
		playSound("combo_lockwav");
	}
	this.frame_6 = function() {
		playSound("combo_lockwav");
	}
	this.frame_8 = function() {
		playSound("combo_lockwav");
	}
	this.frame_10 = function() {
		playSound("combo_lockwav");
	}
	this.frame_12 = function() {
		playSound("combo_lockwav");
	}
	this.frame_14 = function() {
		playSound("combo_lockwav");
	}
	this.frame_16 = function() {
		playSound("combo_lockwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(2).call(this.frame_6).wait(2).call(this.frame_8).wait(2).call(this.frame_10).wait(2).call(this.frame_12).wait(2).call(this.frame_14).wait(2).call(this.frame_16).wait(2));

	// Layer 7
	this.text = new cjs.Text("1", "60px 'Boogaloo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 34;
	this.text.setTransform(-2.9,-36.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({text:"2"},0).wait(2).to({text:"3"},0).wait(2).to({text:"4"},0).wait(2).to({text:"5"},0).wait(2).to({text:"6"},0).wait(2).to({text:"7"},0).wait(2).to({text:"8"},0).wait(2).to({text:"9"},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-38.2,38,78.9);


(lib.yellowchest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Off:0,On:2});

	// Layer 1
	this.instance = new lib.yellowchestfront();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 3
	this.instance_1 = new lib.catinchest();
	this.instance_1.setTransform(89.6,-78.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	// Layer 2
	this.instance_2 = new lib.chestlidopen();
	this.instance_2.setTransform(-4.6,-206);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,426,191);


(lib.umbrella_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("umbrellawav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.instance = new lib.umbrella();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({skewY:180,x:408},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,408,556);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,152);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,144);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,201);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,218);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,355);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,72);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,102);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95,107);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,137);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,264);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,275);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,207);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,182);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mirror1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,113);


(lib.scroll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("unwrap_scrollwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.instance = new lib.scrolltied();

	this.instance_1 = new lib.scrollcut();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251,148);


(lib.scissors = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_0 = function() {
		playSound("scissors_open_and_closewav");
	}
	this.frame_2 = function() {
		playSound("scissors_open_and_closewav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.instance = new lib.scissorsclosed();

	this.instance_1 = new lib.scissorsopen();
	this.instance_1.setTransform(118.3,-15.6,1,1,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,243);


(lib.rug_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// Layer 1
	this.instance = new lib.rug();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2232,219);


(lib.redboots_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("bootswav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.instance = new lib.redboots();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({skewY:180,x:465.8},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,432,586);


(lib.passwordnote_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// Layer 1
	this.instance = new lib.passwordnote();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.greenbooks_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_0 = function() {
		playSound("greenbookswav");
	}
	this.frame_2 = function() {
		playSound("greenbookswav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.instance = new lib.greenbooks();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({skewX:171.5,skewY:-8.5,x:14.7,y:198.2},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356,173);


(lib.crystalball_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// Layer 1
	this.instance = new lib.crystalball();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.boxlid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("combo_lock_successwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.instance = new lib.boxlidclosed();
	this.instance.setTransform(13.3,9.5);

	this.instance_1 = new lib.boxlidopen();
	this.instance_1.setTransform(106.5,-89.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.3,9.5,612,201);


(lib.books = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_0 = function() {
		playSound("pile_of_bookswav");
	}
	this.frame_2 = function() {
		playSound("pile_of_bookswav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2));

	// Layer 2
	this.instance = new lib.booksspilled();
	this.instance.setTransform(0,411);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

	// Layer 1
	this.instance_1 = new lib.booksupright();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,309,411);


(lib.wand_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.magicwand();
	this.instance.setTransform(-240.5,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.5,-34,471,66);


(lib.wand_cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("click_on_anything_with_wandwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.instance = new lib.magicwand();
	this.instance.setTransform(11.5,-21,0.999,0.999,27.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.keys_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.keys();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,160);


(lib.keys_cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// Layer 1
	this.instance = new lib.keys();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.backgroundslicedandscaledpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background sliced and scaled.psd
	this.instance = new lib.Layer40();
	this.instance.setTransform(2993,998);

	this.instance_1 = new lib.Layer39();
	this.instance_1.setTransform(2661,998);

	this.instance_2 = new lib.Layer38();
	this.instance_2.setTransform(2328,998);

	this.instance_3 = new lib.Layer37();
	this.instance_3.setTransform(1995,998);

	this.instance_4 = new lib.Layer36();
	this.instance_4.setTransform(1663,998);

	this.instance_5 = new lib.Layer35();
	this.instance_5.setTransform(1330,998);

	this.instance_6 = new lib.Layer34();
	this.instance_6.setTransform(997,998);

	this.instance_7 = new lib.Layer33();
	this.instance_7.setTransform(665,998);

	this.instance_8 = new lib.Layer32();
	this.instance_8.setTransform(332,998);

	this.instance_9 = new lib.Layer31();
	this.instance_9.setTransform(0,998);

	this.instance_10 = new lib.Layer30();
	this.instance_10.setTransform(2993,665);

	this.instance_11 = new lib.Layer29();
	this.instance_11.setTransform(2661,665);

	this.instance_12 = new lib.Layer28();
	this.instance_12.setTransform(2328,665);

	this.instance_13 = new lib.Layer27();
	this.instance_13.setTransform(1995,665);

	this.instance_14 = new lib.Layer26();
	this.instance_14.setTransform(1663,665);

	this.instance_15 = new lib.Layer25();
	this.instance_15.setTransform(1330,665);

	this.instance_16 = new lib.Layer24();
	this.instance_16.setTransform(997,665);

	this.instance_17 = new lib.Layer23();
	this.instance_17.setTransform(665,665);

	this.instance_18 = new lib.Layer22();
	this.instance_18.setTransform(332,665);

	this.instance_19 = new lib.Layer21();
	this.instance_19.setTransform(0,665);

	this.instance_20 = new lib.Layer20();
	this.instance_20.setTransform(2993,332);

	this.instance_21 = new lib.Layer19();
	this.instance_21.setTransform(2661,332);

	this.instance_22 = new lib.Layer18();
	this.instance_22.setTransform(2328,332);

	this.instance_23 = new lib.Layer17();
	this.instance_23.setTransform(1995,332);

	this.instance_24 = new lib.Layer16();
	this.instance_24.setTransform(1663,332);

	this.instance_25 = new lib.Layer15();
	this.instance_25.setTransform(1330,332);

	this.instance_26 = new lib.Layer14();
	this.instance_26.setTransform(997,332);

	this.instance_27 = new lib.Layer13();
	this.instance_27.setTransform(665,332);

	this.instance_28 = new lib.Layer12();
	this.instance_28.setTransform(332,332);

	this.instance_29 = new lib.Layer11();
	this.instance_29.setTransform(0,332);

	this.instance_30 = new lib.Layer10();
	this.instance_30.setTransform(2993,0);

	this.instance_31 = new lib.Layer9();
	this.instance_31.setTransform(2661,0);

	this.instance_32 = new lib.Layer8();
	this.instance_32.setTransform(2328,0);

	this.instance_33 = new lib.Layer7();
	this.instance_33.setTransform(1995,0);

	this.instance_34 = new lib.Layer6();
	this.instance_34.setTransform(1663,0);

	this.instance_35 = new lib.Layer5();
	this.instance_35.setTransform(1330,0);

	this.instance_36 = new lib.Layer4();
	this.instance_36.setTransform(997,0);

	this.instance_37 = new lib.Layer3();
	this.instance_37.setTransform(665,0);

	this.instance_38 = new lib.Layer2();
	this.instance_38.setTransform(332,0);

	this.instance_39 = new lib.Layer1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3175,1024);


(lib.messageContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.messageText = new cjs.Text("SOFIA: The music box made 3 sounds. I think we need to make the same sounds using something in the room. Turn up the volume, and play the music box again! ", "55px 'Boogaloo'");
	this.messageText.name = "messageText";
	this.messageText.lineHeight = 49;
	this.messageText.lineWidth = 769;
	this.messageText.setTransform(-384.3,-140.9);
	this.messageText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.messageText).wait(10).to({_off:false},0).wait(5));

	// Layer 2
	this.instance = new lib.Tween18("synched",0);
	this.instance.setTransform(-0.9,-5.4,1,0.003);
	this.instance._off = true;

	this.instance_1 = new lib.Tween19("synched",0);
	this.instance_1.setTransform(-0.9,-5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({regX:0.5,scaleY:0.04,x:-0.4},0).wait(1).to({scaleY:0.17},0).wait(1).to({scaleY:0.51},0).wait(1).to({scaleY:0.94},0).wait(1).to({scaleY:0.88},0).wait(1).to({scaleY:0.86},0).wait(1).to({scaleY:0.88},0).wait(1).to({scaleY:0.91},0).wait(1).to({regX:0,scaleY:0.95,x:-0.9},0).wait(1).to({regX:0.5,scaleY:0.98,x:-0.4},0).wait(1).to({scaleY:0.99},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.scrollnote = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// Layer 1
	this.instance = new lib.Tween12("synched",0);
	this.instance.setTransform(0.5,38.3,0.113,0.101,-92.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({scaleX:1.52,scaleY:1.55,rotation:0},9).to({scaleX:1.2,scaleY:1.05,y:38.2},8).to({scaleX:1.11,scaleY:0.98,y:38.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.purplechest_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2,Open:30});

	// Layer 1
	this.instance = new lib.Tween11("synched",0);
	this.instance.setTransform(240.1,151.2,1,1,0,0,0,0.6,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:0,regY:0,x:239.5,y:48.6,mode:"single"},0).to({x:240.8,y:21},13).to({x:239.5,y:48.6},14).to({startPosition:1},1).to({startPosition:1},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480.2,302.5);


(lib.picture_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("picture_framewav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(14));

	// Layer 1
	this.instance = new lib.picture();

	this.instance_1 = new lib.Tween17("synched",0);
	this.instance_1.setTransform(135,184);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({rotation:41.9},0).wait(1).to({rotation:102.4},0).wait(1).to({rotation:235.5},0).wait(1).to({rotation:310.6},0).wait(1).to({rotation:344.5},0).wait(1).to({rotation:358.4},0).wait(1).to({rotation:356.8},0).wait(1).to({rotation:353.1},0).wait(1).to({rotation:352.9},0).wait(1).to({rotation:355},0).wait(1).to({rotation:357.6},0).wait(1).to({rotation:359.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270,368);


(lib.pan_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("cast_iron_panwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(58));

	// Layer 1
	this.instance = new lib.pan();

	this.instance_1 = new lib.Tween15("synched",0);
	this.instance_1.setTransform(95,0,1,1,0,0,0,0,-136);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({rotation:-45},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:34.2},9,cjs.Ease.get(1)).to({regY:-135.9,scaleX:1,scaleY:1,rotation:-34.9,x:95.1,y:0.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:9.8},9,cjs.Ease.get(0.1)).to({regX:0.1,rotation:-11.4,x:95},8,cjs.Ease.get(0.5)).to({regX:-0.1,rotation:5.2,y:0.2},10,cjs.Ease.get(0.5)).to({regX:0,regY:-136,scaleX:1,scaleY:1,rotation:0,y:0},6,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,272);


(lib.musicbox_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2,Hidden:190});

	// timeline functions:
	this.frame_95 = function() {
		playSound("mirror_135wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(97));

	// Layer 2
	this.instance = new lib.musicboxhandle1();
	this.instance.setTransform(-137.9,0);

	this.instance_1 = new lib.Tween23("synched",0);
	this.instance_1.setTransform(-106.9,17);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween24("synched",0);
	this.instance_2.setTransform(-106.9,-14);
	this.instance_2._off = true;

	this.instance_3 = new lib.musicboxhandle2();
	this.instance_3.setTransform(-145.9,0);

	this.instance_4 = new lib.musicboxhandle3();
	this.instance_4.setTransform(-166.2,0);

	this.instance_5 = new lib.musicboxhandle4();
	this.instance_5.setTransform(-144.2,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},42).to({state:[{t:this.instance_2}]},50).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},25).to({state:[{t:this.instance_5}]},26).to({state:[]},44).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true,y:-14},42,cjs.Ease.get(0.29)).wait(148));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},42,cjs.Ease.get(0.29)).to({x:-110.8,y:19.4},50,cjs.Ease.get(0.29)).to({_off:true,x:-145.9,y:0},1).wait(97));

	// Layer 1
	this.instance_6 = new lib.musicbox();
	this.instance_6.setTransform(-113,-70);

	this.instance_7 = new lib.Tween25("synched",0);
	this.instance_7.setTransform(-3,-2);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween26("synched",0);
	this.instance_8.setTransform(-3,-33);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},42).to({state:[{t:this.instance_8}]},50).to({state:[{t:this.instance_6}]},1).to({state:[]},95).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({_off:true,y:-33},42,cjs.Ease.get(0.29)).wait(148));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},42,cjs.Ease.get(0.29)).to({y:-2.6},50,cjs.Ease.get(0.29)).to({_off:true,x:-113,y:-70},1).wait(97));

	// Layer 4
	this.instance_9 = new lib.Bitmap1();
	this.instance_9.setTransform(-228.2,-99);

	this.instance_10 = new lib.Bitmap2();
	this.instance_10.setTransform(-228.2,-99);

	this.instance_11 = new lib.Bitmap3();
	this.instance_11.setTransform(-228.2,-99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},95).to({state:[{t:this.instance_10}]},25).to({state:[{t:this.instance_11}]},26).to({state:[]},44).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.9,-70,245,136);


(lib.mirror14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror14b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol14();
	this.instance.setTransform(42,76,1,1,0,0,0,42,76);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol14();
	this.instance_1.setTransform(42,76,1,1,0,0,0,42,76);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,152);


(lib.mirror13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror13b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol13();
	this.instance.setTransform(83,72,1,1,0,0,0,83,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(83,72,1,1,0,0,0,83,72);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,144);


(lib.mirror12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror12b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol12();
	this.instance.setTransform(58.5,100.5,1,1,0,0,0,58.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(58.5,100.5,1,1,0,0,0,58.5,100.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,0,255,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,201);


(lib.mirror11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror11b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol11();
	this.instance.setTransform(106,109,1,1,0,0,0,106,109);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(106,109,1,1,0,0,0,106,109);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,218);


(lib.mirror10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror10b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol9();
	this.instance.setTransform(111.5,36,1,1,0,0,0,111.5,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(111.5,36,1,1,0,0,0,111.5,36);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,153,255,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,72);


(lib.mirror9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror9b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol10();
	this.instance.setTransform(74,177.5,1,1,0,0,0,74,177.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol10();
	this.instance_1.setTransform(74,177.5,1,1,0,0,0,74,177.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,153,255,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,355);


(lib.mirror8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror8b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol8();
	this.instance.setTransform(53.5,51,1,1,0,0,0,53.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(53.5,51,1,1,0,0,0,53.5,51);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,102,255,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,102);


(lib.mirror7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror7b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol7();
	this.instance.setTransform(47.5,53.5,1,1,0,0,0,47.5,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(47.5,53.5,1,1,0,0,0,47.5,53.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95,107);


(lib.mirror6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror6b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol6();
	this.instance.setTransform(57,68.5,1,1,0,0,0,57,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(57,68.5,1,1,0,0,0,57,68.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,137);


(lib.mirror5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror5b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol5();
	this.instance.setTransform(49,132,1,1,0,0,0,49,132);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(49,132,1,1,0,0,0,49,132);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,102,255,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,264);


(lib.mirror4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror4b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol4();
	this.instance.setTransform(39,137.5,1,1,0,0,0,39,137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(39,137.5,1,1,0,0,0,39,137.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,275);


(lib.mirror3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror3b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol3();
	this.instance.setTransform(79,103.5,1,1,0,0,0,79,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(79,103.5,1,1,0,0,0,79,103.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,207);


(lib.mirror2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror2b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol2();
	this.instance.setTransform(93,91,1,1,0,0,0,93,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(93,91,1,1,0,0,0,93,91);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,255,0,1)",0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,182);


(lib.mirror1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("mirror1b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1 copy
	this.instance = new lib.Symbol1();
	this.instance.setTransform(120.5,56.5,1,1,0,0,0,120.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(120.5,56.5,1,1,0,0,0,120.5,56.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,113);


(lib.keys_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// Layer 1
	this.instance = new lib.Tween14("synched",0);
	this.instance.setTransform(-3.6,32);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:13.6},5).to({y:29},12).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("AuOO7Ql6mMAAovQAAouF6mLQF6mMIUAAQIVAAF6GMQF6GLAAIuQAAIvl6GMQl6GLoVAAQoUAAl6mLg");
	this.shape.setTransform(12.1,38);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.inkandfeather_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("featherwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(7));

	// Layer 1
	this.instance = new lib.inkandfeather();

	this.instance_1 = new lib.Tween22("synched",0);
	this.instance_1.setTransform(0,336,1,1,0,0,0,-59,168);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regY:168.1,rotation:-6.9,y:336.1},2).to({rotation:0.8},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118,336);


(lib.clock_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("clockwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(40));

	// Layer 1
	this.instance = new lib.clock();

	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.setTransform(88.5,230,1,1,0,0,0,0,115);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:1.11,scaleY:0.74},2).to({scaleX:1.16,scaleY:0.85,y:221.6},1).to({scaleX:0.77,scaleY:1.08,y:182.2},2).to({scaleX:0.96,scaleY:0.81,y:100.7},2,cjs.Ease.get(1)).to({scaleY:0.86,y:108.3},2,cjs.Ease.get(1)).to({scaleY:0.84,y:107.3},2).to({scaleY:0.86,y:108.3},4).to({rotation:-6.2},3).to({rotation:1.5},2).to({rotation:-2.5},2).to({regY:114.9,rotation:1.3},2).to({regY:115,rotation:-3.5},2).to({regX:0.1,rotation:1,x:88.6},2).to({rotation:-3.2,x:88.5},2).to({rotation:0,x:88.6},2).to({regX:0,scaleX:0.77,scaleY:1.08,x:88.5,y:182.2},2).to({scaleX:1.16,scaleY:0.85,y:221.6},2,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:230},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,230);


(lib.book = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,Visible:2,"Open":19});

	// timeline functions:
	this.frame_19 = function() {
		playSound("red_book_openwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(3));

	// Layer 2
	this.instance = new lib.bookopen();
	this.instance.setTransform(-65.5,-208.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(3));

	// Layer 1
	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.setTransform(81.5,100.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:-105.1},16).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ball_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Off":0,"On":2});

	// timeline functions:
	this.frame_2 = function() {
		playSound("ballwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(88));

	// Layer 1
	this.instance = new lib.ball();

	this.instance_1 = new lib.Tween20("synched",0);
	this.instance_1.setTransform(39.5,35.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween21("synched",0);
	this.instance_2.setTransform(-37.3,659.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:0,x:0,y:0}}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance,p:{rotation:-179,x:-104.4,y:704.6}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({x:39.2,y:38.1},0).wait(1).to({x:38.5,y:43.4},0).wait(1).to({x:37.5,y:51.9},0).wait(1).to({x:36,y:64},0).wait(1).to({x:34,y:80.2},0).wait(1).to({x:31.4,y:101.3},0).wait(1).to({x:28.1,y:128.1},0).wait(1).to({x:23.9,y:161.9},0).wait(1).to({x:18.8,y:204},0).wait(1).to({x:12.3,y:256.1},0).wait(1).to({x:4.5,y:320},0).wait(1).to({x:-4.9,y:395.9},0).wait(1).to({x:-15.1,y:479.2},0).wait(1).to({x:-24.7,y:557.1},0).wait(1).to({x:-31.8,y:614.9},0).wait(1).to({x:-35.9,y:647.7},0).wait(1).to({x:-37.3,y:659},0).wait(1).to({x:-36.4,y:651.7},0).wait(1).to({x:-35.8,y:647.2},0).wait(1).to({x:-35.9,y:647.6},0).wait(1).to({x:-36.4,y:651.9},0).to({_off:true},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({rotation:-2.2,x:-38.6,y:659.3},0).wait(1).to({rotation:-4.5,x:-40,y:659.4},0).wait(1).to({rotation:-6.9,x:-41.4,y:659.6},0).wait(1).to({rotation:-9.3,x:-42.8,y:659.7},0).wait(1).to({rotation:-11.7,x:-44.2,y:659.8},0).wait(1).to({rotation:-14.2,x:-45.7,y:659.9},0).wait(1).to({rotation:-16.8,x:-47.2,y:660.1},0).wait(1).to({rotation:-19.4,x:-48.8,y:660.2},0).wait(1).to({rotation:-22.1,x:-50.4,y:660.3},0).wait(1).to({rotation:-24.8,x:-52,y:660.5},0).wait(1).to({rotation:-27.6,x:-53.6,y:660.6},0).wait(1).to({rotation:-30.4,x:-55.3,y:660.8},0).wait(1).to({rotation:-33.3,x:-57,y:660.9},0).wait(1).to({rotation:-36.3,x:-58.8,y:661.1},0).wait(1).to({rotation:-39.4,x:-60.6,y:661.2},0).wait(1).to({rotation:-42.5,x:-62.5,y:661.4},0).wait(1).to({rotation:-45.8,x:-64.4,y:661.6},0).wait(1).to({rotation:-49.1,x:-66.4,y:661.7},0).wait(1).to({rotation:-52.5,x:-68.4,y:661.9},0).wait(1).to({rotation:-56.1,x:-70.5,y:662.1},0).wait(1).to({rotation:-59.8,x:-72.7,y:662.3},0).wait(1).to({rotation:-63.6,x:-75,y:662.5},0).wait(1).to({rotation:-67.6,x:-77.4,y:662.7},0).wait(1).to({rotation:-71.9,x:-79.9,y:662.9},0).wait(1).to({rotation:-76.3,x:-82.5,y:663.1},0).wait(1).to({rotation:-81.1,x:-85.3,y:663.4},0).wait(1).to({rotation:-86.2,x:-88.3,y:663.6},0).wait(1).to({rotation:-91.8,x:-91.7,y:663.9},0).wait(1).to({rotation:-98.1,x:-95.4,y:664.2},0).wait(1).to({rotation:-105.5,x:-99.8,y:664.6},0).wait(1).to({rotation:-113.1,x:-104.3,y:665},0).wait(1).to({rotation:-120.1,x:-108.4,y:665.4},0).wait(1).to({rotation:-126.5,x:-112.2,y:665.7},0).wait(1).to({rotation:-132.2,x:-115.6,y:666},0).wait(1).to({rotation:-137.4,x:-118.7,y:666.3},0).wait(1).to({rotation:-142,x:-121.4,y:666.5},0).wait(1).to({rotation:-146.1,x:-123.9,y:666.7},0).wait(1).to({rotation:-149.8,x:-126,y:666.9},0).wait(1).to({rotation:-153.1,x:-128,y:667.1},0).wait(1).to({rotation:-156.1,x:-129.7,y:667.2},0).wait(1).to({rotation:-158.7,x:-131.3,y:667.4},0).wait(1).to({rotation:-161.1,x:-132.7,y:667.5},0).wait(1).to({rotation:-163.2,x:-134,y:667.6},0).wait(1).to({rotation:-165.1,x:-135.1,y:667.7},0).wait(1).to({rotation:-166.8,x:-136.1,y:667.8},0).wait(1).to({rotation:-168.4,x:-137,y:667.9},0).wait(1).to({rotation:-169.8,x:-137.9},0).wait(1).to({rotation:-171,x:-138.6,y:668},0).wait(1).to({rotation:-172.2,x:-139.3,y:668.1},0).wait(1).to({rotation:-173.2,x:-139.9},0).wait(1).to({rotation:-174.1,x:-140.4,y:668.2},0).wait(1).to({rotation:-174.8,x:-140.9},0).wait(1).to({rotation:-175.6,x:-141.3},0).wait(1).to({rotation:-176.2,x:-141.7,y:668.3},0).wait(1).to({rotation:-176.7,x:-142},0).wait(1).to({rotation:-177.2,x:-142.3},0).wait(1).to({rotation:-177.6,x:-142.5},0).wait(1).to({rotation:-178,x:-142.7,y:668.4},0).wait(1).to({rotation:-178.3,x:-142.9},0).wait(1).to({rotation:-178.5,x:-143},0).wait(1).to({rotation:-178.7,x:-143.1},0).wait(1).to({rotation:-178.8,x:-143.2},0).wait(1).to({rotation:-178.9,x:-143.3},0).wait(1).to({rotation:-179},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,71);


(lib.inventory_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// keys
	this.keys_icon = new lib.keys_icon();
	this.keys_icon.setTransform(-132,0,0.699,0.699,0,0,0,70,80);

	this.timeline.addTween(cjs.Tween.get(this.keys_icon).wait(1));

	// wand
	this.wand_icon = new lib.wand_icon();
	this.wand_icon.setTransform(-132,0,0.451,0.559,40.5);

	this.timeline.addTween(cjs.Tween.get(this.wand_icon).wait(1));

	// Layer 1
	this.instance = new lib.inventory();
	this.instance.setTransform(-228,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228,-98.5,200,203);


(lib.stageContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// combolock 3
	this.combolock_number_3 = new lib.combolock_number();
	this.combolock_number_3.setTransform(270,262.8,0.625,0.625,0,0,0,-1,3.5);

	this.timeline.addTween(cjs.Tween.get(this.combolock_number_3).wait(1));

	// combolock 2
	this.combolock_number_2 = new lib.combolock_number();
	this.combolock_number_2.setTransform(228.6,254.5,0.625,0.625,0,0,0,-1,3.5);

	this.timeline.addTween(cjs.Tween.get(this.combolock_number_2).wait(1));

	// combolock 1
	this.combolock_number_1 = new lib.combolock_number();
	this.combolock_number_1.setTransform(184.1,246.1,0.625,0.625,0,0,0,-1,3.5);

	this.timeline.addTween(cjs.Tween.get(this.combolock_number_1).wait(1));

	// keys cursor
	this.keys_cursor = new lib.keys_cursor();
	this.keys_cursor.setTransform(293.1,-221.1,0.5,0.5,0,0,0,70,80);

	this.timeline.addTween(cjs.Tween.get(this.keys_cursor).wait(1));

	// wand cursor
	this.wand_cursor = new lib.wand_cursor();
	this.wand_cursor.setTransform(310.5,-258.4,0.2,0.2,0,0,0,-5,-1);

	this.timeline.addTween(cjs.Tween.get(this.wand_cursor).wait(1));

	// note2
	this.note2 = new lib.passwordnote_1();
	this.note2.setTransform(2117.5,469,0.635,0.635,0,0,0,90.5,120.5);

	this.timeline.addTween(cjs.Tween.get(this.note2).wait(1));

	// note
	this.note = new lib.scrollnote();
	this.note.setTransform(1184.7,712.1,0.625,0.625,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.note).wait(1));

	// book
	this.book = new lib.book();
	this.book.setTransform(2040.2,698.4,0.652,0.652,0,0,0,81.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.book).wait(1));

	// keys
	this.keys_pickup = new lib.keys_1();
	this.keys_pickup.setTransform(200.2,111.5,0.652,0.652);

	this.timeline.addTween(cjs.Tween.get(this.keys_pickup).wait(1));

	// box
	this.box = new lib.boxlid();
	this.box.setTransform(114.1,210.9,0.652,0.652,0,0,0,306,100.5);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	// clock
	this.clock = new lib.clock_1();
	this.clock.setTransform(49.9,516.9,0.652,0.652,0,0,0,88.5,115);

	this.timeline.addTween(cjs.Tween.get(this.clock).wait(1));

	// green books
	this.greenbooks = new lib.greenbooks_1();
	this.greenbooks.setTransform(256.3,527.7,0.652,0.652,0,0,0,178.1,86.5);

	this.timeline.addTween(cjs.Tween.get(this.greenbooks).wait(1));

	// umbrella
	this.umbrella = new lib.umbrella_1();
	this.umbrella.setTransform(144.1,793.9,0.652,0.652,0,0,0,204,278);

	this.timeline.addTween(cjs.Tween.get(this.umbrella).wait(1));

	// red boots
	this.boots = new lib.redboots_1();
	this.boots.setTransform(239.9,799.7,0.652,0.652,0,0,0,216,292.9);

	this.timeline.addTween(cjs.Tween.get(this.boots).wait(1));

	// pan
	this.pan = new lib.pan_1();
	this.pan.setTransform(743.7,232.7,0.652,0.652,0,0,0,95,136);

	this.timeline.addTween(cjs.Tween.get(this.pan).wait(1));

	// scissors
	this.scissors = new lib.scissors();
	this.scissors.setTransform(526.6,706.8,0.344,0.344,43.7,0,0,105.5,121.7);

	this.timeline.addTween(cjs.Tween.get(this.scissors).wait(1));

	// books
	this.books = new lib.books();
	this.books.setTransform(959.2,670.4,0.652,0.652,0,0,0,154.5,205.5);

	this.timeline.addTween(cjs.Tween.get(this.books).wait(1));

	// music box
	this.musicbox = new lib.musicbox_1();
	this.musicbox.setTransform(1184.4,524.1,0.635,0.635);

	this.timeline.addTween(cjs.Tween.get(this.musicbox).wait(1));

	// purple chest
	this.purplechest = new lib.purplechest_1();
	this.purplechest.setTransform(1185.3,696.5,0.652,0.652,0,0,0,239.5,151.5);

	this.timeline.addTween(cjs.Tween.get(this.purplechest).wait(1));

	// scroll
	this.scroll = new lib.scroll();
	this.scroll.setTransform(1184.9,730.8,0.652,0.652,0,0,0,125.5,74);

	this.timeline.addTween(cjs.Tween.get(this.scroll).wait(1));

	// crystal ball
	this.crystalball = new lib.crystalball_1();
	this.crystalball.setTransform(1604.1,451.1,0.652,0.652,0,0,0,83,106);

	this.timeline.addTween(cjs.Tween.get(this.crystalball).wait(1));

	// mirror1
	this.mirror1 = new lib.mirror1_1();
	this.mirror1.setTransform(1304.9,152.6,0.652,0.652);

	this.timeline.addTween(cjs.Tween.get(this.mirror1).wait(1));

	// mirror2
	this.mirror2 = new lib.mirror2_1();
	this.mirror2.setTransform(1381.8,294,0.652,0.652,0,0,0,93,91);

	this.timeline.addTween(cjs.Tween.get(this.mirror2).wait(1));

	// mirror3
	this.mirror3 = new lib.mirror3_1();
	this.mirror3.setTransform(1385.8,431.2,0.652,0.652,0,0,0,79,103.5);

	this.timeline.addTween(cjs.Tween.get(this.mirror3).wait(1));

	// mirror4
	this.mirror4 = new lib.mirror4_1();
	this.mirror4.setTransform(1497.3,223.3,0.652,0.652,0,0,0,39.1,137.5);

	this.timeline.addTween(cjs.Tween.get(this.mirror4).wait(1));

	// mirror5
	this.mirror5 = new lib.mirror5_1();
	this.mirror5.setTransform(1493.3,411.3,0.652,0.652,0,0,0,49,132);

	this.timeline.addTween(cjs.Tween.get(this.mirror5).wait(1));

	// mirror6
	this.mirror6 = new lib.mirror6_1();
	this.mirror6.setTransform(1578,179.6,0.652,0.652,0,0,0,57,68.5);

	this.timeline.addTween(cjs.Tween.get(this.mirror6).wait(1));

	// mirror7
	this.mirror7 = new lib.mirror7_1();
	this.mirror7.setTransform(1651.4,182.9,0.652,0.652,0,0,0,47.5,53.6);

	this.timeline.addTween(cjs.Tween.get(this.mirror7).wait(1));

	// mirror8
	this.mirror8 = new lib.mirror8_1();
	this.mirror8.setTransform(1722.5,179.3,0.652,0.652,0,0,0,53.6,51);

	this.timeline.addTween(cjs.Tween.get(this.mirror8).wait(1));

	// mirror9
	this.mirror9 = new lib.mirror9_1();
	this.mirror9.setTransform(1813.4,262.4,0.652,0.652,0,0,0,74,177.5);

	this.timeline.addTween(cjs.Tween.get(this.mirror9).wait(1));

	// mirror10
	this.mirror10 = new lib.mirror10_1();
	this.mirror10.setTransform(1620.1,456.9,0.652,0.652,0,0,0,111.5,36);

	this.timeline.addTween(cjs.Tween.get(this.mirror10).wait(1));

	// mirror11
	this.mirror11 = new lib.mirror11_1();
	this.mirror11.setTransform(1800.3,453,0.652,0.652,0,0,0,106,109);

	this.timeline.addTween(cjs.Tween.get(this.mirror11).wait(1));

	// mirror12
	this.mirror12 = new lib.mirror12_1();
	this.mirror12.setTransform(1912.8,220.7,0.652,0.652,0,0,0,58.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.mirror12).wait(1));

	// mirror13
	this.mirror13 = new lib.mirror13_1();
	this.mirror13.setTransform(1918.9,339,0.652,0.652,0,0,0,83,72);

	this.timeline.addTween(cjs.Tween.get(this.mirror13).wait(1));

	// mirror14
	this.mirror14 = new lib.mirror14_1();
	this.mirror14.setTransform(2203.9,617.3,0.652,0.652,0,0,0,480.5,326);

	this.timeline.addTween(cjs.Tween.get(this.mirror14).wait(1));

	// picture
	this.picture = new lib.picture_1();
	this.picture.setTransform(2102.1,332.5,0.652,0.652,0,0,0,135,184);

	this.timeline.addTween(cjs.Tween.get(this.picture).wait(1));

	// yellow chest
	this.yellowchest = new lib.yellowchest();
	this.yellowchest.setTransform(1997.2,717.3,0.652,0.652,0,0,0,213,95.5);

	this.timeline.addTween(cjs.Tween.get(this.yellowchest).wait(1));

	// ink and feather
	this.feather = new lib.inkandfeather_1();
	this.feather.setTransform(2888.8,439.3,0.652,0.652,0,0,0,59,168);

	this.timeline.addTween(cjs.Tween.get(this.feather).wait(1));

	// ball
	this.ball = new lib.ball_1();
	this.ball.setTransform(2831.8,527,0.652,0.652,0,0,0,39.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// rug
	this.rug = new lib.rug_1();
	this.rug.setTransform(1606.1,952.6,0.652,0.652,0,0,0,1116,109.5);

	this.timeline.addTween(cjs.Tween.get(this.rug).wait(1));

	// background
	this.background = new lib.backgroundslicedandscaledpsd();
	this.background.setTransform(1587.5,512,1,1,0,0,0,1587.5,512);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.7,0,3251.7,1024);


// stage content:
(lib.tent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// inventoryContainer
	this.inventoryContainer = new lib.inventory_1();
	this.inventoryContainer.setTransform(1445,1822.4,1,1,0,0,0,-0.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.inventoryContainer).wait(1));

	// buttons
	this.righty = new lib.scrollbutton();
	this.righty.setTransform(1434.8,1028.9,1,1,0,0,0,-2.2,-0.2);

	this.lefty = new lib.scrollbutton();
	this.lefty.setTransform(1.1,1007.4,1,1,0,0,180,-2.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lefty},{t:this.righty}]}).wait(1));

	// messageContainer
	this.messageContainer = new lib.messageContainer();
	this.messageContainer.setTransform(265.4,1824.2);

	this.timeline.addTween(cjs.Tween.get(this.messageContainer).wait(1));

	// stageContainer
	this.stageContainer = new lib.stageContainer();
	this.stageContainer.setTransform(0.1,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.stageContainer).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(614.7,501.8,6503.4,2570.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;