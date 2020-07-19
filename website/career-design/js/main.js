$(function(){
    //#nav-toggleをクリックした時の設定
    $(".nav-toggle").on("click",function(){

    //ナビゲーションを開閉
    $("nav ul").slideToggle();

    //#nav-toggleにクラス名[open]を追加・削除
    $(this).toggleClass("open");
    });
});


$(window).on("scroll", function(){
    //100pxスクロールしたら.gotopを表示
	if ($(this).scrollTop() > 100) {
		$(".gotop").fadeIn(1000);
	} else {
		$(".gotop").fadeOut();
	}
});
$(window).on("scroll", function() {
    //100pxスクロールしたらheaderに.header-scrollを追加
	if ($(this).scrollTop() > 100) {
		$("header").addClass("header-scroll");
        $(".logo-white").addClass("display-none");
        $(".logo-black-2").addClass("display-block");
        $(".top-color-black").addClass("font-color-black");
	}
});
$(window).on("scroll", function() {
    //ページの一番上に戻ったらheaderから.header-scrollを削除
	if ($(this).scrollTop() < 100) {
		$("header").removeClass("header-scroll");
        $(".logo-white").removeClass("display-none");
        $(".logo-black-2").removeClass("display-block");
        $(".top-color-black").removeClass("font-color-black");
	}
});
