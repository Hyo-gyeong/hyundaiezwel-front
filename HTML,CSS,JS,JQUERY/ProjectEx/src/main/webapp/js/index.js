/**
 *  index.js
 */

$(function(){
	// 윈도우 스크롤 시 메인 메뉴 고정
	$(window).on('scroll', function(){ // 스크롤이 발생하는 내내 실행할 함수
		// scroll을 하면 scroll top위치가 계속 바뀌게 됨
		// scroll bar의 top위치가 headerBox의 높이보다 커지면 메인 메뉴 고정시키고 그림자 표시
		if ($(document).scrollTop() >= $('#headerBox').height()){
			$('#mainMenuBox').addClass('mainMenuFixed mainMenuShadow');
		} else { // 고정된 상태
			$('#mainMenuBox').removeClass('mainMenuFixed mainMenuShadow');
		}
		
	}); // on 끝
	
	$('#moveToTop').on('click', function(){
		// html 요소와 body 요소를 동시에 선택
		// 브라우저마다 스크롤이 작용하는 요소가 html또는 body로 다를 수 있기 때문에
		$('html,body').animate({scrollTop:0}, 500);
	});
});