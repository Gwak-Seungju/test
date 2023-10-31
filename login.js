/* 아이디 이메일 형식인지 검사 */
function CheckEmail(email) {
  var reg_email = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z_.-]+\.[0-9a-zA-Z_-]{2,4}$/;
  return reg_email.test(email);
}

const id = document.querySelector('.id');
const idError = document.querySelector('.idError');

id.addEventListener('keyup', function() {
  var inputValue = id.value;
  if(!CheckEmail(inputValue)) {
    idError.textContent = '이메일 형식이 잘못되었습니다.';
  }
  else {
    idError.textContent = '유효한 이메일입니다.';
  }
});

/* 비밀번호 확인 검사 */
function CheckPassword(password_check) {
  var pw = password.value;
  return pw == password_check;
}

const password = document.querySelector('.pw');
const password_check = document.querySelector('.pw-check');
const pwError = document.querySelector('.pwError');

password_check.addEventListener('keyup', function() {
  var inputValue = password_check.value;
  if(!CheckPassword(inputValue)) {
    pwError.textContent = '비밀번호가 맞지 않습니다.'
  }
  else {
    pwError.textContent = ' ';
  }
})

/* 학번을 통해 학부 자동 입력 */
function CheckStudentNumber(student_number) {
  var cse = student_number.slice(4,7);
  return cse == 136;
}

const major = document.querySelector('.major');
const student_number = document.querySelector('.student-number');

student_number.addEventListener('change', function() {
  var inputValue = student_number.value;
  if(!CheckStudentNumber(inputValue)) {
    major.textContent = '무슨과?';
  }
  else {
    major.textContent = '컴퓨터공학부';
  }
})

/* 휴대폰 번호 양식 자동 변경 */
function ChangeForm(phone_number) {
  var regNum = /[^0-9]/g;
  only_number = phone_number.replace(regNum, "")
  var newForm = `${only_number.slice(0,3)}-${only_number.slice(3,7)}-${only_number.slice(7,11)}`;
  return newForm;
}

const phone_number = document.querySelector('.phone-number');

phone_number.addEventListener('change', function() {
  var inputValue = phone_number.value;
  phone_number.value = ChangeForm(inputValue);
})

/* 회원가입 버튼 누를 시 */
const signup = document.querySelector('.signup');

signup.addEventListener('click', function() {
  var idValue = id.value;
  var pwValue = password.value;
  var pwCheckValue = password_check.value;
  var s_numValue = student_number.value;
  var phone_numValue = phone_number.value;
  if(idValue && pwValue && pwCheckValue && s_numValue && phone_numValue) {
    alert('회원가입이 완료되었습니다!');
    window.location.href = "https://gwak-seungju.github.io/LogInPage/LogInPage.html"
  }
  else {
    alert('모든 칸을 입력해 주시기 바랍니다.');
  }
})

/* 취소 버튼 누를 시 */
const cancel = document.querySelector('.cancel');

cancel.addEventListener('click', function() {
  window.location.href = "https://gwak-seungju.github.io/LogInPage/LogInPage.html"
})

/* 로그인 창에서 로그인 버튼 누를 시 */
const login = document.querySelector('.login');
const loginPageId = document.getElementById('loginPageId');
const loginPagePw = document.getElementById('loginPagePw');

login.addEventListener('click', function() {
  var idValue = loginPageId.value;
  var pwValue = loginPagePw.value;
  if(idValue && pwValue) {
    /* 로그인 완료. 인덱스 페이지로 이동. */
    window.location.href = "https://gwak-seungju.github.io/LogInPage/"
  }
  else {
    alert("id, pw를 입력해주세요.");
  }
})