/**
 * subMenu.js
 */

$(function(){
	// 메인메뉴박스의 전체보기를 클릭했을 때 모든 메뉴 항목 보이게 구성
	$('#showAllMenu').on('click', function(){
		if ($(this).text() == '전체보기 ▼'){
			// 서브메뉴 박스 보이기
			// 메뉴 닫기로 변경
			$('#subMenuBox').css('visibility', 'visible');
			$(this).text('메뉴닫기 ▲').css('color', 'blue');
		} else { // 메뉴가 열린 상태
			// 서브메뉴박스 감주기
			// 메뉴 텍스트 전체보기로 변경
			$('#subMenuBox').css('visibility', 'hidden');
			$(this).text('전체보기 ▼').css('color', 'black');
		}
	});
});