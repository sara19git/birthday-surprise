const birthdayBtn = document.querySelector('.birthday-btn');
const title = document.querySelector('.birthday-container h2');
const envelopeWrapper = document.querySelector('.envelope-wrapper');
const envelope = document.querySelector('.envelope');


birthdayBtn.addEventListener('click', ()=> {
    birthdayBtn.textContent = 'HAPPY BIRTHDAY!';
    // birthdayBtn.classList.add('hide');
    // title.classList.add('hide');
    gsap.to(birthdayBtn, {
        opacity: 0,
        y: 50,
        duration: 0.5,
    });

    gsap.to(title, {
        opacity: 0,
        y: -50,
        duration: 0.5,
    });
    envelopeWrapper.classList.add('show');

    gsap.fromTo(envelopeWrapper,
        {
            opacity: 0,
            scale: 0.5,
            y: 100,
        },
        {
            opacity: 1,
            scale: 1,
            y:0,
            duration: 0.8,
            ease: "back.out"
        }
    )


})

envelope.addEventListener('click', ()=> {
    // // console.log('envelope clicked')
    envelope.classList.toggle('open');
    // // console.log(envelope.classList);

})

