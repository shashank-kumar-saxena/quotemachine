
var quote=document.getElementById('quote');
var quoteAuthor=document.getElementById('quote-writer');
function click()
{
    if(ran==1)
    {
        var ran=Math.floor(Math.random()*10+1);
        el.setAttribute("class","row main color");
        button.setAttribute("class","color");
        quote.innerHTML="<h2>"+"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed."+"</h2>";
        quoteAuthor.innerHTML="<h6>- Michael Jordan</h6>";
    }
    if(ran==2)
    {
        el.setAttribute("class","row main color2");
        button.setAttribute("class","color2");
        quote.innerHTML="<h2>People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.</h2>";
        quoteAuthor.innerHTML="<h6>- Zig Ziglar</h6>";
    }
    if(ran==3)
    {
        el.setAttribute("class","row main color3");
        button.setAttribute("class","color3");
        quote.innerHTML="<h2>It’s not the years in your life that count. It’s the life in your years.</h2>";
        quoteAuthor.innerHTML="<h6>- Abraham Lincoln</h6>";
    }
    if(ran==4)
    {
        el.setAttribute("class","row main color4");
        button.setAttribute("class","color4");
        quote.innerHTML="<h2>I am not a product of my circumstances. I am a product of my decisions.</h2>";
        quoteAuthor.innerHTML="<h6>- Stephen Covey</h6>";
    }
    if(ran==5)
    {
        el.setAttribute("class","row main color5");
        button.setAttribute("class","color5");
        quote.innerHTML="<h2>The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.</h2>";
        quoteAuthor.innerHTML="<h6>- Jesse Owens</h6>";
    }
    if(ran==6)
    {
        el.setAttribute("class","row main color6");
        button.setAttribute("class","color6");
        quote.innerHTML="<h2>Every child is an artist. The problem is how to remain an artist once he grows up.</h2>";
        quoteAuthor.innerHTML="<h6>- Pablo Picasso</h6>";
    }
    if(ran==7)
    {
        el.setAttribute("class","row main color7");
        button.setAttribute("class","color7");
        quote.innerHTML="<h2>If you do what you’ve always done, you’ll get what you’ve always gotten.</h2>";
        quoteAuthor.innerHTML="<h6>- Tony Robbins</h6>";
    }
    if(ran==8)
    {
        el.setAttribute("class","row main color8");
        button.setAttribute("class","color8");
        quote.innerHTML="<h2>What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.</h2>";
        quoteAuthor.innerHTML="<h6>- Bob Dylan</h6>";
    }
    if(ran==9)
    {
        el.setAttribute("class","row main color9");
        button.setAttribute("class","color9");
        quote.innerHTML="<h2>I have learned over the years that when one’s mind is made up, this diminishes fear.</h2>";
        quoteAuthor.innerHTML="<h6>- Rosa Parks</h6>";
    }
    if(ran==10)
    {
        el.setAttribute("class","row main color10");
        button.setAttribute("class","color10");
        quote.innerHTML="<h2>Believe you can and you’re halfway there.</h2>";
        quoteAuthor.innerHTML="<h6>- Theodore Roosevelt</h6>";
    }
    
}
function twit()
{
    var msg=quote.textContent+quoteAuthor.textContent;
    var link="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+msg;
    window.open(link,"_blink");
}
function tumblr()
{
    var msg=quote.textContent+quoteAuthor.textContent;
    var link="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Gloria%20Steinem&content="+msg+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
    console.log(link);
    window.open(link,"_blink");
}
var button=document.getElementById('Button');
var el=document.getElementById('main');
button.addEventListener('click',click,false);
window.addEventListener('load',click,false);
var twits=document.getElementById("twitter");
twits.addEventListener('click',twit,false);
var tumb=document.getElementById('tumblr');
tumb.addEventListener('click',tumblr,false);
