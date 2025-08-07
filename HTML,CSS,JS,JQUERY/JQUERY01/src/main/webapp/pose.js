/**
 * pose.js
 */

$(function(){
	$('#showBtn').on('click', function(){
		// 서버에서 포즈 인식 진행 후 결과값 반환 받았다고 가정, 캔버스에 얼마나 비례할지를 표현한 값
		let result = {"points" : [{"x":0.42, "y":0.20}, {"x":0.49, "y":0.22}, {"x":0.42, "y":0.27}, {"x":0.30, "y":0.33}, 
											   		    {"x":0.32, "y":0.22}, {"x":0.52, "y":0.25}, {"x":0.65, "y":0.31}, {"x":0.72, "y":0.41}, 
								                        {"x":0.61, "y":0.51}, {"x":0.65, "y":0.69}, {"x":0.81, "y":0.82}, {"x":0.51, "y":0.51}, 
		                                                {"x":0.29, "y":0.51}, {"x":0.35, "y":0.72}, {"x":0.39, "y":0.18}, {"x":0.49, "y":0.18}]};
		
		// canvas에 이미지 출력
		let src = "image/run.jpg";
		drawCanvas(result.points, src); // 이미지 출력, 이미지 위에 텍스트 출력 등을 진행하는 함수								
													
	}); // showbtn click 끝
	
	function drawCanvas(result, src){
		let canvas = document.getElementById('poseCanvas');
		let context = canvas.getContext("2d");
		
		// 이미지 객체 생성 후 canvas에 추가(drawImage 메서드 활용)
		let poseImage = new Image();
		poseImage.src = src;
		poseImage.width = canvas.width;
		poseImage.height = canvas.height;
		
		poseImage.onload = function(){
			context.drawImage(poseImage, 0,0, poseImage.width, poseImage.height); // 이미지의 크기와 캔버스 크기 동일
			
			// 텍스트 출력 (출력 정보별 색상 사용)
 			let colors =  ["red", "blue", "yellow", "yellow",
						  "yellow","green", "green","green", 
						  "skyblue","skyblue","skyblue","white",
						  "white","white","brown","gold"];
			let position = ["코", "목", "오른쪽 어깨", "오른쪽 팔굼치", 
						    "오른쪽 손목", "왼쪽 어깨", "왼쪽 팔굼치", "왼쪽 손목", 
							"오른쪽 엉덩이", "오른쪽 무릎", "오른쪽 발목", "왼쪽 엉덩이", 
		                    "왼쪽 무릎", "왼쪽 발목", "왼쪽 눈", "왼쪽 귀"]; // 이미지 아래 출력시 활용
			let values = "";
			
			// result는 배열이 전달됨. 배열 순회하면서 정해진 위치(result)에 덱스트 출력
			$.each(result, function(i){ // $.each() = 객체를 순회(iterate)할 때 사용하는 jQuery 유틸리티 함수
				if (this.x != 0 || ths.y != 0){ // 이미지에 글자 출력
					context.strokeStyle = colors[i]; // 선색상 결정
					context.strokeRect(this.x*poseImage.width, this.y*poseImage.height, 2,2);
					let text = this.x.toFixed(2) + "," + this.y.toFixed(2);
					context.cont = "10px";
					context.strokeText(text, this.x*poseImage.width, this.y*poseImage.height);
				}
				values += position[i] + "(" + this.x + "," + this.y + ")<br>";
			}); // each끝
			
			$('#resultDivBox').html(values); // 태그가 포함되어있으므로 text대신에 html메소드 사용
		}
	} // drawCanvas 끝
}); // ready끝