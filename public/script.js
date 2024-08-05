// script.js

document.addEventListener('DOMContentLoaded', function () {
  // 네비게이션 바의 활성 링크 강조
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll('nav a');
  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i++) {
      if (menuItem[i].href === currentLocation) {
          menuItem[i].className = "active";
      }
  }
});

// 팝업 메시지
function showPopup(message) {
  alert(message);
}
