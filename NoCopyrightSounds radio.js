
var WshShell = new ActiveXObject('WScript.Shell'); // WScript.CreateObject('WScript.Shell');

WshShell.Run('%USERPROFILE%/Binaries/livestreamer-v1.12.2/livestreamer.exe twitch.tv/nocopyrightsounds audio', 0);
// --volume <integer> sets the level of audio output (between 0 and 1024)
