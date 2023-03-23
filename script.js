const meta = document.createElement('meta');
meta.setAttribute('charset', "UTF-8");

const title = document.createElement('title');
title.innerHTML = 'JS page';

const viewport = document.createElement('meta');
viewport.setAttribute('name', 'viewport');
viewport.setAttribute('content','width=device-width, initial-scale=1.0')

document.head.append(title);
document.head.prepend(meta);
document.head.append(viewport);


const style = document.createElement('style');
style.innerHTML = `
    *{
        margin:0;
        padding:0;
    }

    body { 
        padding-top: 100px; 
    }

    .titleBlock {
        width:450px;
        margin:0 auto;
    }

    .titleBlock__title {
        font-size: 36px;
        font-family: 'Arvo', serif;
        font-weight: 400;
        text-align: center;
        margin-bottom: 10px;
    }

    .titleBlock__text {
        font-family: 'Open Sans', 'Times New Roman', sans-serif;
        color: #9FA3A7;
        font-size: 14px;
        text-align: center;
    }

    .block {
        margin: 55px auto;
        width:800px;
        height: 480px;
        display: flex;
    }

    .block__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 80px 95px;
    }

    .block__item:nth-child(2){
        background-color: #8F75BE;
    }

    .block__item:nth-child(1){
        border: 1px solid #E8E9ED;
    }

    .block__suptitle {
        font-family: 'Montserrat', 'Times New Roman',  sans-serif;
        text-transform: uppercase;
        color: #9FA3A7;
        letter-spacing: 2.4px;
        font-size: 12px;
    }

    .block__suptitle--orange {
        color: #FFC80A;
        
    }

    .block__title {
        margin: 25px 0px 30px 0px;
        color: #212121;
        font-family: 'Arvo',  sans-serif;
        font-size: 36px;
    }

    .block__title--white {
        color: #fff;
    }

    .block__text {
        color: #9FA3A7;
        font-size: 12px;
        font-family: 'Open Sans', 'Times New Roman', sans-serif;
    }

    .block__text--white {
        color: #fff;
    }

    .block__btn {
        margin-top:62px;
        text-decoration: none;
        width: 140px;
        height: 45px;
        display: flex; 
        align-items: center;
        justify-content: center;
        border: 2px solid #FFC80A;
        border-radius: 30px;
        color: #212121;
        font-family: 'Montserrat', 'Times New Roman',  sans-serif;
        font-size: 12px;
        letter-spacing: 1.4px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: 0.2s;
    }

    .block__btn--whiteText {
        color: #fff;
    }

    .block__btn:hover {
        border: 2px solid #212121;
        color: #FFC80A
    }

`;

document.head.append(style);

const titleBlock = document.createElement('div');
titleBlock.classList.add('titleBlock');
titleBlock.innerHTML = `
    <h1 class = "titleBlock__title">Choose Your Option</h1>
    <span class = "titleBlock__text">But I must explain to you how all this mistaken idea of denouncing</span>
`;

document.body.append(titleBlock);

const elements1 = {
    suptitle: 'freelancer',
    title: 'Initially designed to',
    text: 'But I must explain to you how all this mistaken idea of denouncing ',
    button: 'START HERE', 
}

const elements2 = {
    suptitle: 'studio',
    title: 'Initially designed to',
    text: 'But I must explain to you how all this mistaken idea of denouncing ',
    button: 'START HERE', 
}


const block = document.createElement('div');
block.className = 'block';
titleBlock.after(block);

const blockItem1 = document.createElement('div');
blockItem1.className = 'block__item';
blockItem1.innerHTML = `
    <span class = 'block__suptitle'>${elements1.suptitle}</span>
    <span class = 'block__title'>${elements1.title}</span>
    <span class = 'block__text'>${elements1.text} </span>
    <a class = 'block__btn' href = "#" >${elements1.button}</a>
`;

const blockItem2 = document.createElement('div');
blockItem2.className = 'block__item';
blockItem2.innerHTML = `
    <span class = 'block__suptitle block__suptitle--orange'>${elements2.suptitle}</span>   
    <span class = 'block__title block__title--white'>${elements2.title}</span>
    <span class = 'block__text block__text--white'>${elements2.text} </span>
    <a class = 'block__btn block__btn--whiteText' href = "#" >${elements2.button}</a>
`;

block.append(blockItem1);
block.append(blockItem2);
