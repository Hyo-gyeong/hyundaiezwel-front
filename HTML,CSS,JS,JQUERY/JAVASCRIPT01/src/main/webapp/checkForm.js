/**
 * join.html 파일의 입력 유효성 검사를 진행하는 자바스크립트 코드
 * <input>입력란에 데이터를 입력했는지의 여부
 * 입력된 데이터의 길이 체크
 * 비밀번호 일치여부
 * 라디오버튼 체크 여부
 * 체크박스 체크 여부
 */

// 태그가 모두 준비되고 나서 유효성 검사
window.onload = function() {
	// sumbit 버튼 클릭시 form 유효성 검사 진행
	// var form_var = document.getElementById("joinForm");
	document.getElementById('joinForm').onsubmit = function(){
		// 1. 설명을 입력하지 않은 경우 경고창 출력 -> 성명 입력칸에 포커스 -> submit 실행 제거 (거짓으로 만들어서 대기시킴)
		var name = document.getElementById('name');
		
		if (name.value == ""){ // 이름을 입력하지 않았을 경우
			alert("성명을 입력하세요.");
			name.focus(); // name 객체가 가지고 있는 focus 메소드 실행
			return false; // submit 방지 (진행 안하는 브라우저도 있지만 가독성을 위해서 추가)
		}
		
		// 2. id에 대한 입력여부, 길이 제한에 대한 유효성 검사
		var id = document.getElementById("id");
		
		if (id.value == ""){ // id 입력하지 않았으면
			alert("id를 입력하세요");
			id.focus();
			return false; // submit이 일어나는걸 방지
		}
		
		// 입력된 id 글자수 확인
		if (id.value.length < 6 || id.value.length > 10){
			alert("id는 6~10자로 입력하세요");
			id.value=""; // 입력된 값 지우기
			id.focus();
			return false;
		}
		
		// 비밀번호와 비밀번호 확인 일치 여부 체크
		var password = document.getElementById("password");
		var passwordCheck = document.getElementById("passwordCheck");
		if (password.value != passwordCheck.value){
			alert("비밀번호 확인이 일치하지 않습니다");
			passwordCheck.value="";
			passwordCheck.focus();
			return false;
		}
		
		// 비밀번호 길이 확인
		if (password.value.length < 10 || password.value.length > 20){
			alert("비밀번호는 10~20자 사이여야 합니다");
			password.value="";
			passwordCheck.value="";
			password.focus();
			return false;
		}
		
		// 비밀번호 포함되어야 하는 문자 확인
		var passwdEng = false;
		var passwdNum = false;
		var passwdSpecial = false;
		for (var i = 0; i < password.value.length; i++){
			// 아스키 코드로 읽어줘야 아스키 값으로 비교 가능
			let letter = password.value.charCodeAt(i);
			if (letter >= 48 && letter <= 57){
				passwdNum = true;
			}
			else if ((letter >= 65 && letter <= 90)
					|| (letter >= 97 && letter <= 122)){
				passwdEng = true;
			} else if (letter >= 33 && letter <= 126){
				passwdSpecial = true;
			}
		}
		
		console.log("passwdNum "+passwdNum + " passwdEng"+passwdEng+ " passwdSpecial"+passwdSpecial);
		if (passwdNum == false || passwdEng == false || passwdSpecial == false){
			alert("비밀번호는 영문자+숫자+특수문자를 조합한 10-20글자여야 합니다.")
			password.value="";
			passwordCheck.value="";
			password.focus();
			return false;
		}
		
		
		// 직업 서택을 하지 않은 경우 (select 태그 -> selectedIndex)
		// 어떤 옵션도 선택하지 않으면 -1
		// option 태그의 idx 값은 0부터 시작 -> 0번 idx 옵션에는 value 속성이 비어있으므로
		// selectedIndex 값이 0이면 재선택 진행
		document.getElementById("job"); // select객체의 참조값을 가져옴. option 아님! id도 없고..
		
		// 방법 1
		if (job.selectedIndex == 0){
			alert("직업을 선택하세요.");
			return false;
		}
		// 방법 2
		if (job.value == ""){
			alert("직업을 선택하세요.");
			return false;
		}
		
		// 라디오 버튼의 name 속성을 사용해서 객체 접근
		// 라디오 그룹에서는 name 속성 값이 동일하므로 name 속성 이용해서 접근하면 배열과 같은 리스트가 반
			// -> 반복문 활용 모든 라디오 버튼 확인
		var chk = false; // 라디오 버튼 체크 여부 저장하는 변수
		for (var i = 0; i < joinForm.emailRcv.length; i++){
			if (joinForm.emailRcv[i].checked == true){
				chk = true; // break 없이 쓸 수 있는 이유는 라디오 버튼 특성상 한 개의 버튼만 선택할 수 있기 때문에
			}
		}
		
		// 그룹내 라디오버튼 검사 했는데 chk가 false 그룹내 어떤 라디오 버튼도 선택되지 않았음
		if (chk == false){
			alert("이메일 수신 여부를 선택하세요");
			return false; // submit 방지
		}
		
		// 체크박스의 유효성 검사
		var agreement1 = document.getElementById('agreement1');
		var agreement2 = document.getElementById('agreement2');
		
		if (agreement1.checked == false || agreement2.checked == false){
			alert("모두 동의해야 합니다");
			return false;
		}
		
	}; // onsubmit의 끝
	
}; // window.onload의 끝