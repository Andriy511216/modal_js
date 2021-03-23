const modal = $.modal({
    title: 'My modal',
    closable: true,
    content: `
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
    delectus quod officiis soluta vel velit eligendi a itaque
    temporibus, rerum aperiam fugit? </p>`,
    width: '600px',
    footerButtons: [
        {
            text: 'OK',
            type: 'primary',
            handler() {
                console.log('btn clicked');
                modal.close();
            },
        },
        {
            text: 'Cancel',
            type: 'danger',
            handler() {
                console.log('btn danger clicked');
                modal.close();
            },
        },
    ],
});

const modalShowBtn = document.querySelector('.modal__show-btn');
modalShowBtn.addEventListener('click', modal.open);
