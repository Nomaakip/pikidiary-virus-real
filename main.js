

        setInterval(() => {
    var inputval = 'https://lh3.googleusercontent.com/L6h0FMJf_U65TiVP94ekVS_DtA9kE6hwnChhhFTFfMMTmZGGjfA4pp5eqUH4s2JUB88BR2UmixSExYO5008fJisIkw=s60';
    var text = inputval;
    var rWidth = Math.random() * window.innerWidth;
    var rHeight = Math.random() * window.innerHeight;
    var x = Math.floor(rHeight);
    var y = Math.floor(rWidth);
    var div = document.createElement('img');
    div.src = text;
    div.style.position = 'absolute';
    div.style.left =  `${y}px`;
    div.style.top = `${x}px`;
    div.style.fontSize = '15px';
    div.style.zIndex = '1001';
    document.body.appendChild(div);
}, 0);

document.body.style.overflow = 'hidden';
