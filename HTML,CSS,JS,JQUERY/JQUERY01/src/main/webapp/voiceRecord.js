/**
 * voiceRecord.js
 */

// 자바스크립트 코드
window.onload = function(){
	let record = document.getElementById("recordBtn");
	let stop = document.getElementById("stopBtn");
	let soundClips = document.getElementById("sound-clips");
	
	if (navigator.mediaDevices){ // 브라우저에 media device라는 인터페이스가 있는지 확인
		var constraints = {
			audio:true // 마이크 사용하겠다!
			// video: false // 카메라는 안 쓰겠다!
		}
		
		let chunks = []; // 녹음데이터 저장하기 위한 변수
		// navigator : 웹 브라우저에서 제공하는 기본 객체, 사용자의 브라우저 정보, 장치 정보 등을 가져올 수 있음
		// mediaDevices : navigator 안에 있는 객체. 카메라, 마이스, 공유 화면 등 현재 연결된 미디어 입력장치로의 접근 방법 제공하는 인터페이스
		// .getUserMedia(constraints) : 사용자에게 카메라나 마이크를 사용할 수 있는 권한을 요청하는 함수
		navigator.mediaDevices.getUserMedia(constraints) //"마이크를 쓸 수 있게 해주세요" 라고 브라우저에 요청
			// getUserMedia()는 Promise(약속) 를 반환. 사용자가 마이크 접근을 허락하면 이 약속이 "성공" 상태로 바뀌고, then() 안에 있는 함수가 실행
			.then((stream) => { // 브라우저가 마이크를 열어주면, 그 마이크로부터 들어오는 오디오 데이터(스트림)를 stream이라는 이름으로 넘겨줍니다.
				// 녹음을 위한 객체 생성 MediaRecorder 클래스 사용해서 녹음객체 생성, stream 객체 생성자에 전달해야함
				const mediaRecorder = new MediaRecorder(stream);
				
				// 녹음 버튼을 클릭했을 때
				record.onclick = () => {
					mediaRecorder.start(); // 녹음 시작
					record.style.background = "red";
					record.style.color = "black";
				} // 녹음버튼 종료
				
				// mediaRecorder 유효한 녹음데이터가 있으면 발생하는 이벤트
				// 녹음이 시작디어 유효한 상태이면 chunks에 녹음데이터 저장
				mediaRecorder.ondataavailable = e => { // 마이크를 통해서 전달되는 녹음 데이터는 이벤트 객체의 data속성에 담겨 전달됨
					chunks.push(e.data)
				} // 유효한 이벤트 chunks에 저장끝. chunck에 담기는 데이터는 아직 사용할 수 없는 상태. mp3, 코덱 설정해줘야함
								
				// 정지 버튼을 클릭했을 때
				stop.onclick = () => {
					mediaRecorder.stop(); // 녹음 정지
					record.style.background = ""; // 원래 상태로 되돌림
					record.style.color = "";
				} // 정지버튼 종료
				
				
				// stop이벤트 발생시 처리 내용
				// 1. audio 담을 컨테이너 객체 생성
				// 2. audio 객체 생성 속성 설정
				// 3. audio 객체와 컨테이너 객체 연결
				// 4. sound-clip에 컨테이너 연결
				// 5. 녹음된 데이터를 audio양식으로 설정 -> 2진수를 mp3로 변환
				// 6. 녹음 내용을 파일로 저장 -> 다운로드
				
				// 녹음이 정지되면 onstop이라는 이벤트가 발생하고 이벤트 객체들이 e로 들어옴
				mediaRecorder.onstop = e => {
					// 1. audio 담을 컨테이너 객체 생성
					const clipContainer = document.createElement('article'); // article 태그 생성
					// 2. audio 객체 생성 속성 설정
					const audio = document.createElement('audio'); // audio 태그 생성
					audio.setAttribute('controls', ''); // 필수 값이므로 안줄거면 "" 빈문자열 넣기
					// 3. audio 객체와 컨테이너 객체 연결
					clipContainer.appendChild(audio);
					// sound-clip 태그내에 이전에 포함된 자식 노그 있으면 제거
					if (soundClips.hasChildNodes()){
						soundClips.removeChild(soundClips.childNodes[0]);
					}
					soundClips.appendChild(clipContainer);
					
					// 5. 녹음된 데이터를 audio양식으로 설정 -> 2진수를 mp3로 변환
					// blob 형식의 데이터를 mp3타입으로 설정 -> 새로운 객체 사용
					// 저장위치 통로 chunks 활용
					const blob = new Blob(chunks, {
						'type':'audio/mp3 codcs=opus'
					})
					chunks = []; //초기화하지 않으면 녹음내용이 누적됨
					
					// 6. 녹음 내용을 파일로 저장 -> 다운로드
					const audioURL = URL.createObjectURL(blob);
					audio.src = audioURL;
					
					const clipName = "voiceRecord"; // 다운로드시 사용할 파일 이름
					const a = document.createElement('a');
					clipContainer.appendChild(a);
					a.href = audio.src;
					// alert(audio.src);
					// a태그는 download 속성이 있고 파일명을 주면 클릭이벤트 발생시 해당 파일명으로 다운로드를 진행함
					a.download = clipName;
					a.click(); // a태그에 클릭 이벤트 발생시 자동으로 다운로드
				} // mediaRecorder.onstop()끝
				
			})
			.catch(err => { // 외부 장치를 사용할 땐 예외처리 필수
				console.log('오류 발생 : ' + err);
			}) // catch 끝
	} else {
		
	}
}