const copyEmail = () => {
  const email = document.createElement('input');
  email.value = 'justinjackson1198@gmail.com';
  document.body.appendChild(email);
  email.focus();
  email.select();
  document.execCommand('copy');
  email.remove();
  alert('Copied email: "justinjackson1198@gmail.com" to clipboard.');
};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('Contact').lastElementChild.firstElementChild.addEventListener('click', copyEmail());
});
