var sites			= ["www.google.com", "www.facebook.com", "www.youtube.com", "www.amazon.com", "www.wikipedia.org"],
	url				= sites[Math.floor(sites.length*Math.random())],
	traceCommand	= "tracert -d -h 4 -4 " + url,
	WshShell		= new ActiveXObject('WScript.Shell'),
	exec			= WshShell.Exec(traceCommand);

while (exec.Status === 0)
	WScript.Sleep(100);

var traceOutput		= exec.StdOut.ReadAll(),
	ips				= traceOutput.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?=\s)/g);

WshShell.Exec("%COMSPEC% /K echo " + traceOutput + "\n\n" + ips.join(', ') + "; pause");




// https://en.wikipedia.org/wiki/Reserved_IP_addresses
// https://en.wikipedia.org/wiki/Martian_packet
// nullIPs	= ["192.168.0.1", "192.168.0.100", "192.168.1.1", "192.168.1.100", "0.0.0.0"],
