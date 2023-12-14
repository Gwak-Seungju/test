const getCookieValue = (cookieName) => {
  // 쿠키 문자열 가져오기
  const cookies = document.cookie;

  // 쿠키 문자열을 ; 으로 분리하여 배열로 만듦
  const cookieArray = cookies.split(';');

  // 배열을 순회하며 원하는 쿠키 찾기
  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim(); // 공백 제거

    // 쿠키 이름과 값 분리
    const [name, value] = cookie.split('=');

    // 쿠키 이름이 일치하면 해당 쿠키의 값을 반환
    if (name === cookieName) {
      return value;
    }
  }

  // 일치하는 쿠키가 없으면 null 반환
  return null;
}

// "id" 쿠키의 값을 가져오기
const idValue = getCookieValue('id');
const logout = document.querySelector('.logout-link');

// 저장된 모든 스토리지 초기화
logout.addEventListener('click', () => {
  document.cookie = `id=${idValue}; max-age=${"0"}`;
  localStorage.clear();
  sessionStorage.clear();
})