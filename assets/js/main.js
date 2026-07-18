document.getElementById('year').textContent=new Date().getFullYear();
function toggleMenu(){document.querySelector('.navlinks').classList.toggle('open')}
async function shareSite(){const data={title:'Bears Fan 09',text:'Check out Bears Fan 09 Gaming!',url:location.href};try{if(navigator.share){await navigator.share(data)}else if(navigator.clipboard){await navigator.clipboard.writeText(location.href);alert('Website link copied!')}}catch(e){}}
function activateTwitch(){if(!['http:','https:'].includes(location.protocol))return;const parent=location.hostname;const player=document.getElementById('twitchPlayer');const chat=document.getElementById('twitchChat');if(player){player.innerHTML='<iframe title="Bearsfn09 Twitch stream" style="width:100%;height:100%;border:0" src="https://player.twitch.tv/?channel=bearsfn09&parent='+encodeURIComponent(parent)+'&autoplay=false" allowfullscreen></iframe>';player.style.padding='0'}if(chat){chat.innerHTML='<iframe title="Bearsfn09 Twitch chat" style="width:100%;height:500px;border:0;border-radius:18px" src="https://www.twitch.tv/embed/bearsfn09/chat?parent='+encodeURIComponent(parent)+'&darkpopout"></iframe>';chat.style.padding='0'}}activateTwitch();
async function updateLiveStatus() {
    const statusElement = document.getElementById("live-status-text");
    if (!statusElement) return;

    try {
   const response = await fetch("https://nay5ddojn6fjk7fxaeupuyudza0rozxp.lambda-url.us-east-2.on.aws/");







(0)


        const data = await response.json();

        if (data.live) {
            statusElement.textContent = "🔴 LIVE STATUS: LIVE NOW!";
            statusElement.style.backgroundColor = "#008000";
        } else {
            statusElement.textContent = "⚫ LIVE STATUS: OFFLINE";
            statusElement.style.backgroundColor = "#b00020";
        }
    } catch (error) {
        console.error(error);
        statusElement.textContent = "⚠️ LIVE STATUS: UNAVAILABLE";
    }
}

updateLiveStatus();
setInterval(updateLiveStatus, 60000);
