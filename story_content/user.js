function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5n0NCWizFQ2":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="bgSongku.mp3";
audio.load();
audio.play();
audio.volume=0.5;

}

