function getParams(){
	var url = "content/errorqr.png"
	var amount = getQueryStringValue('a');
	var ref = getQueryStringValue('r');
	if (amount && ref){
		var chl = "BCD%0A002%0A1%0ASCT%0A%0AOC%20Taborschool%20Maria-Aalter%0ABE75104346164351%0A" + amount + "%0A%0A" + ref + "%0A%0A";
		var url = "https://chart.googleapis.com/chart?chs=250x250&cht=qr&choe=UTF-8&chld=M&chl=" + chl;	
		document.getElementById("amount").innerText  = " €" + amount;
		document.getElementById("ref").innerText  = " " + ref;
	}
	document.getElementById("qr").src = url;
	
 			};

var getQueryStringValue = function(parameter) {
    	var currentPageURL = window.location.search.substring(1);
    	var queryString = currentPageURL.split('&');
    	var getParameter;
    	var i;
    	for (i = 0; i < queryString.length; i++) {
       		 getParameter = queryString[i].split('=');
        		if (getParameter[0] === parameter) {
            			return getParameter[1] === undefined ? true : decodeURIComponent(getParameter[1]);
        		}
						 }
};
