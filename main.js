let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Conócenos')
  .pauseFor(300)
  .deleteChars(10)
  .start();

  $('#resetPasswordModal, #loginModal').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  });