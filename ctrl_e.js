if (/^(((us(-gov)?|ap|ca|cn|eu|sa)-(central|(north|south)?(east|west)?)-\d)|phd)?\.console\.aws\.amazon\.com$/g.test(window.location.hostname)) {
	window.location.href = window.location.protocol + "//" + window.location.hostname + "/ec2/v2/home#Instances:sort=tag:Name";
}
