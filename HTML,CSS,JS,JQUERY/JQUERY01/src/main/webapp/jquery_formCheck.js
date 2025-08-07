/**
 * jquery_formCheck.js
 * jquery 이용 입력 양식 이벤트 및 유효성 정리
 */

$(document).ready(function(){
	$('#id').focus(); // 시작시에 id포커스
	
	// id와 비밀번호 입력란에 포커스 있을 떄 색상 변경
	$(':text, :password').on('focus', function(){
		$(this).css('background', 'rgb(232,232,232)');
	});
	
	//id과 비밀번호 입력란에 포커스 읽을 때 색상 변경
	$(':text, :password').on('blur', function(){
		$(this).css('background', 'white');
	});
	
	// 키보드 이벤트 - keyup
	//휴대폰 번호 입력 첫번째 칸
	$('#hp1').on('keyup', function(){
		// 문자열 배열로 반환됨
		if ($(this).val().length == 3){
			$('#hp2').focus();
		}
	});
	$('#hp2').on('keyup', function(){
		// 문자열 배열로 반환됨
		if ($(this).val().length == 4){
			$('#hp3').focus();
		}
	});
	
	// 습관적으로 누르는 엔터키에 의해 form이 제출되지 못하도록 - 단 모든 입력값에 엔터키를 다 막아버림
	// 엔터키를 눌렀는지 확인해서 submit - 키정보를 인수로 전달받음
	$(document).on('keydown', function(e){ // 이벤트 발생시 발생되는 정보를 받기 위해 매개변수 구성
		// 키의 정보를 넘겨줌
		// 13 ascii = enter키
		if (e.keyCode == 13){
			return false; // enter가 가지고 있는 본연의 기능 없애기
		}
	});
	// id입력후 엔터키를 눌렀을 때 비밀번호 입력으로 포커스 이동
	$('#id').on('keydown', function(e){
		if ($('#id').val() != "" && e.keyCode == 13){
			$('#pwd').focus();
		}
	});
	
	// submit은 form을 기준으로 발생
	$('#newMemberForm').on('submit', function(){
		if ($('#id').val() == ""){
			alert("아이디를 입력하세요");
			$('#id').focus();
			return false;
		}
		
		if ($('#pwd').val() == ""){
			alert("비밀번호를 입력하세요");
			$('#pwd').focus();
			return false;
		}
		// 라디오 버튼 선택하지 않은 경우
		// 여기에는 라디오 버튼이 한개뿐이니까 이렇게 사용
		// input[type="radio"] = :radio
		if (!$('input[type="radio"]').is(':checked')){
			alert("학년을 선택하세요");
			return false;
		}
		
		// 체크박스 선책하지 않은 경우
		if (!$(':checkbox').is(':checked')){
			alert("관심 분야를 입력하세요");
			return false;
		}
		
		// select 선책하지 않은 경우
		if ($('select').val() == ""){
			alert("학과를 선택하세요");
			$('select').focus();
			return false;
		}
	}); // 폼 submit 끝
	
}); // 종료