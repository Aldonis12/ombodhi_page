function setCookie(name, value, days) {
  let expires = "";
  if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
  console.log("Cookie set:", document.cookie);
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

document.addEventListener('DOMContentLoaded', function () {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesBtn = document.getElementById('accept-cookies');
  const cookieName = 'cookies_accepted';

  if (getCookie(cookieName)) {
      console.log("Cookie found, hiding banner.");
      cookieBanner.style.display = 'none';
      document.getElementById('main-content').classList.remove('blur-content');
  } else {
      console.log("No cookie found, showing banner.");
      cookieBanner.style.display = 'block';
      document.getElementById('main-content').classList.add('blur-content');
  }

  acceptCookiesBtn.addEventListener('click', function () {
      setCookie(cookieName, 'true', 365);
      cookieBanner.style.display = 'none';
      document.getElementById('main-content').classList.remove('blur-content');
  });
});
