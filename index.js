
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

  const block = document.getElementById('More');
  let moreOpen = false;

  document.getElementById('Contact').lastElementChild.firstElementChild.addEventListener('click', copyEmail);
  block.addEventListener('click', () => {
    if (moreOpen === false) {
      block.previousSibling.innerText = 'It all started from an after school program where I was the only student to show up. Despite the program shutting down only two weeks in, the world of coding had been revealed to me and i knew that this would by my dream career. Aside from web development, my hobbies are coding in C# for the Unity game engine and 3D modeling in Blender Studio. In whatever I do, I try to immerse myself fully into it and learn as much as I can in the process.';
      block.innerText = '...click to see less';
      moreOpen = true;
    }
    else {
      block.previousSibling.innerText = 'It all started from an after school program where I was the only student to show up. Despite the program shutting down only two weeks in, the world of coding had been revealed to me and i knew that this would by my dream career.'
      block.innerText = '...click to see more';
      moreOpen = false;
    }
  });

});
