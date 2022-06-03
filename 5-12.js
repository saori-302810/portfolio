var unit = 100,
    canvasList, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorList; // 各キャンバスの色情報

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
		canvasList = [];
    colorList = [];
    // canvas1個めの色指定
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#eee']);
    
    // canvas2個めの色指定
    canvasList.push(document.getElementById("waveCanvas2"));
    colorList.push(['#43c0e4']);
    
    // canvas3個めの色指定
    canvasList.push(document.getElementById("waveCanvas3"));
    colorList.push(['#fff']);
// 各キャンバスの初期化
　　for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
        canvas.height = 200;//波の高さ
        canvas.contextCache = canvas.getContext("2d");
    }
    // 共通の更新処理呼び出し
		update();
}

function update() {
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 各キャンバスの描画
        draw(canvas, colorList[canvasIndex]);
    }
    // 共通の描画情報の更新
    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;
    // 自身の再起呼び出し
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
		// 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, color[0], 1, 3, 0);
}

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
		var context = canvas.contextCache;
    context.fillStyle = color;//塗りの色
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
    context.lineTo(0, canvas.height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //波を塗りつぶす
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();

(function () {

    var unit = 100,
        canvasList, // キャンバスの配列
        info = {}, // 全キャンバス共通の描画情報
        colorList; // 各キャンバスの色情報
    
    /**
     * Init function.
     * 
     * Initialize variables and begin the animation.
     */
    function init() {
        info.seconds = 0;
        info.t = 0;
            canvasList = [];
        colorList = [];
        // canvas1個め
        canvasList.push(document.getElementById("sineCanvas"));
        colorList.push(['#10c2cd', '#43c0e4', '#1d82b6']);
        
        // canvas2個め
        canvasList.push(document.getElementById("sineCanvas1"));
        colorList.push(['red', 'green', 'blue']);
        
        // canvas3個め
        canvasList.push(document.getElementById("sineCanvas2"));
        colorList.push(['cyan', 'magenta', 'yellow']);
    
            // 各キャンバスの初期化
            for(var canvasIndex in canvasList) {
            var canvas = canvasList[canvasIndex];
            canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
            canvas.height = 300;
            canvas.contextCache = canvas.getContext("2d");
        }
        // 共通の更新処理呼び出し
            update();
    }
    
    function update() {
            for(var canvasIndex in canvasList) {
            var canvas = canvasList[canvasIndex];
            // 各キャンバスの描画
            draw(canvas, colorList[canvasIndex]);
        }
        // 共通の描画情報の更新
        info.seconds = info.seconds + .014;
        info.t = info.seconds*Math.PI;
        // 自身の再起呼び出し
        setTimeout(update, 35);
    }
    
    /**
     * Draw animation function.
     * 
     * This function draws one frame of the animation, waits 20ms, and then calls
     * itself again.
     */
    function draw(canvas, color) {
            // 対象のcanvasのコンテキストを取得
        var context = canvas.contextCache;
        // キャンバスの描画をクリア
        context.clearRect(0, 0, canvas.width, canvas.height);
    
        //波を描画
        drawWave(canvas, color[0], 0.3, 3, 0);
        drawWave(canvas, color[1], 0.4, 2, 250);
        drawWave(canvas, color[2], 0.2, 1.6, 100);
    };
    
    /**
    * 波を描画
    * drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
    */
    function drawWave(canvas, color, alpha, zoom, delay) {
            var context = canvas.contextCache;
        context.fillStyle = color;
        context.globalAlpha = alpha;
    
        context.beginPath(); //パスの開始
        drawSine(canvas, info.t / 0.5, zoom, delay);
        context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
        context.lineTo(0, canvas.height); //パスをCanvasの左下へ
        context.closePath() //パスを閉じる
        context.fill(); //塗りつぶす
    }
    
    /**
     * Function to draw sine
     * 
     * The sine curve is drawn in 10px segments starting at the origin. 
     * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
     */
    function drawSine(canvas, t, zoom, delay) {
        var xAxis = Math.floor(canvas.height/2);
        var yAxis = 0;
        var context = canvas.contextCache;
        // Set the initial x and y, starting at 0,0 and translating to the origin on
        // the canvas.
        var x = t; //時間を横の位置とする
        var y = Math.sin(x)/zoom;
        context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く
    
        // Loop to draw segments (横幅の分、波を描画)
        for (i = yAxis; i <= canvas.width + 10; i += 10) {
            x = t+(-yAxis+i)/unit/zoom;
            y = Math.sin(x - delay)/3;
            context.lineTo(i, unit*y+xAxis);
        }
    }
    
    init();
    
    })();



//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});
