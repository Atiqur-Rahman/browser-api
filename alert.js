console.log('I am here');
// alert('ma is comming');

const maComming = () => {
    alert('ammu is comming. Open the book');
};

const askPicnic = () => {
    const response = confirm('are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake bkash fee ta send kore de');
    } else {
        console.log('DGM!!! dour e giya Mor');
    }
};

const askName = () => {
    const name = prompt('What is your name?');
    // console.log(name);
    if (name) {
        console.log(name);
    }
};
