function stripUrl(url) {
	var index = url.indexOf('#');
	return url.substring(0, index);
}