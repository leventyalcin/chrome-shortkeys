if ( window.location.hostname.match("console.aws.amazon.com$")) {
	window.location.href = window.location.protocol + "//" + window.location.hostname + "/ec2/v2/home#Instances:sort=tag:Name";
}
