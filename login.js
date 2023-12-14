// 로그인 창에서 로그인 버튼 누를 시
const login = document.querySelector('.login');
const loginPageId = document.getElementById('loginPageId');
const loginPagePw = document.getElementById('loginPagePw');

login.addEventListener('click', function() {
  var idValue = loginPageId.value;
  var pwValue = loginPagePw.value;
  if(idValue && pwValue) {
    /* 로그인 완료. 인덱스 페이지로 이동. */
    var date = new Date();
    date.setHours(date.getHours() + 72);
    document.cookie = `id = ${idValue}; expires=${date.toUTCString()}`;
    localStorage.setItem("id", idValue);
    sessionStorage.setItem("id", idValue);
    
    console.log(document.cookie, localStorage.getItem("id"), sessionStorage.getItem("id"));
    //window.location.href = "https://gwak-seungju.github.io/LogInPage/"
  }
  else {
    alert("id, pw를 입력해주세요.");
  }
})
