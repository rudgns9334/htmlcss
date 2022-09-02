// 로그인
function login() {
    // 사용자 정보를 입력받는다.
    var userid = prompt("아이디입력", "ssafy");
    if (userid.length == 0) {
      alert("아이디 입력!!!");
      return;
    }
    var userpass = prompt("비밀번호입력", "1234");
    if (userpass.length == 0) {
      alert("비밀번호 입력!!!");
      return;
    }
    if (userid == "ssafy" && userpass == "1234") {
      alert("로그인 성공!!!");
      // id가 profile_img인 element의 src 속성의 값을 img/profile.png로 설정.
      document.getElementById("profile_img").src = "img/profile.png";
      document.getElementById("header_nav_confirm_off").style.display = "none";
      document.getElementById("header_nav_confirm_on").style.display = "block";
    } else {
      alert("아이디 또는 비밀번호 확인!!!");
    }
  }
  
  // 로그아웃
  function logout() {
    /* document.getElementById("profile_img").src = "img/profile.png";
      document.getElementById("header_nav_confirmon").style.display = "none";
      document.getElementById("header_nav_confirmoff").style.display = "block"; */
    // id가 profile_img인 element의 src 속성의 값을 img/noimg.png로 설정.
    document.querySelector("#profile_img").setAttribute("src", "img/noimg.png");
    document.querySelector("#header_nav_confirm_on").setAttribute("style", "display: none");
    document.querySelector("#header_nav_confirm_off").setAttribute("style", "display: block");
  }

//투표하기
function poll() {
    var votes = document.getElementsByName("vote_answer");
    var sel_menu = "";
  
    for (var i = 0; i < votes.length; i++) {
      if (votes[i].checked == true) {
        sel_menu = votes[i].value;
        break;
      }
    }
    alert(sel_menu + "를 선택했습니다.");
  }

  function pollMake(){
    // 새로운 창을 띄우는 것은 지양
    // 보안적 이슈가 있음
    window.open("pollmake.html","투표 생성",  "width=420,height=300,top=300,left=400");
    //             경로 , 제목, 옵션
  }

  // 답변 항목 추가
function addAnswer() {
    var listDiv = document.getElementById("poll_answer_list");
  
    var divEl = document.createElement("div"); // <div></div>
    divEl.setAttribute("class", "poll_answer_item"); // <div class="poll_answer_item"></div>
    var inputEl = document.createElement("input"); // <input/>
    inputEl.setAttribute("type", "text"); // <input type="text"/>
    inputEl.setAttribute("name", "answer"); // <input type="text" name="answer"/>
    var buttonEl = document.createElement("button");
    buttonEl.setAttribute("type", "button");
    buttonEl.setAttribute("class", "button");
    // 버튼에 click 이벤트 리스너 등록.
    buttonEl.addEventListener("click", function (e) {
      var parent = this.parentNode;
      listDiv.removeChild(parent);
    });
    buttonEl.appendChild(document.createTextNode("삭제"));
  
    divEl.appendChild(inputEl);
    divEl.appendChild(buttonEl);
    listDiv.appendChild(divEl);
  }

  // 투표 생성
function makePoll() {
    if (!document.querySelector("#question").value) {
      alert("질문 내용 입력!!!");
      return;
    }
  
    var answers = document.getElementsByName("answer");
    for (var i = 0; i < answers.length; i++) {
      if (!answers[i].value) {
        alert("답변 항목 입력!!!");
        return;
      }
    }
  
    alert("투표를 생성합니다.");
    self.close();
  }
  
  

  let cnt = 0;

  function allSlide(str){
    if(str === 'on'){
        slideDown(seoul);
        slideDown(daejeon);
        slideDown(gumi);
        slideDown(gwangju);
    }
    else if(str === 'off'){
        document.querySelector(".store_display_on").setAttribute("style", "display: block");
        document.querySelector(".store_display_off").setAttribute("style", "display: none");
        document.querySelector("#seoul").setAttribute("style", "display: none");
        document.querySelector("#daejeon").setAttribute("style", "display: none");
        document.querySelector("#gumi").setAttribute("style", "display: none");
        document.querySelector("#gwangju").setAttribute("style", "display: none");
        cnt = 0;
    }
  }

  function slideDown(area){
    document.querySelector(`#${area.id}`).setAttribute("style", "display: block");
    cnt += 1;
    console.log(cnt);
    if(cnt === 4){
        document.querySelector(".store_display_on").setAttribute("style", "display: none");
        document.querySelector(".store_display_off").setAttribute("style", "display: block");
    }
  }