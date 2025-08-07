/**
 * chatbot.js
 */

$(document).ready(function(){
	//챗봇에게 질문하고 응답받기 - 텍스트 응답
	
	//message 입력하고 전송 버튼 눌렀을 때
	$('#chatForm').on('submit', function(event){
		// submit 기본 동작 중지 - 일처리를 전부 다 하고 submit해야해서
		event.preventDefault(); // 넘겨받은 이벤트에 대해서 기본 동작을 중지해라
		
		if($('#message').val() != ""){ // 질문이 들어오면
			$('#chatBox').append('<div class="msgBox send"><span>' +
								$('#message').val() + '</span></div><br>');
			/* 입력란 비우기 */		
			$('#msgBox').val('');
			
			getResponse(); // 사용자 정의 함수, 서버로부터 전송된 응답을 화면에 출력해주는 함수
		}
	});
	
	// 창닫기 버튼
	$('#closeBtn').on('click', function(){
		window.close();
	});
});

function getResponse(){
	// 서버에게 입력된 메시지 보내서 받은 응답이 있다고 가정하고
	let result = "저는 챗봇입니다. 응답 메시지를 길게 작성합니다. 줄바꿈을 확인하기 위해서 입니다.";
	// chatBox에 받은 메시지 추가
	$('#chatBox').append('<div class="msgBox receive"><span>' +
									result + '</span></div><br>');
	// 마지막에 추가된 메시지가 보이도록 위로 스크롤
	// prop : property 
	// 객체.attr() : 상대적으로 정적인 속성의 값을 반환하거나 세팅
	// 객체.prop() : 동적으로 실시간으로 움직이는 요소에 대한 값을 반환하거나 세팅
	// 둘 다 어떤 객체에 대한 속성의 값을 가져옴
	$('#chatBox').scrollTop($('#chatBox').prop("scrollHeight")); // 화면의 가장 위로 height를 저정 - 가장 밑으로 스크롤 되는 효과
}