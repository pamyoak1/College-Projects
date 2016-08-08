function LoadFocus() {
	var email = document.getElementById("focus_this");
	email.focus();
}

function Validation () {
	var email = document.forms["login"]["email_address"].value;
	var pass = document.forms["login"]["password"].value;
	if (email == null || email == "") {
		alert("Email must be filled in.");
		return false;
	} else if (pass == null || pass == "") {
		alert("Password must be filled in.");
		return false;	
	} else {
		CreateCookie("email", email);
		CreateCookie("pass", pass);
	}
	/* just for testing, return false so page doesn't reload */
	return true;
}

function ToUpper(param) {
	var element = document.getElementsByName(param);
	element.item(0).value = element.item(0).value.toUpperCase();
}

function CreateCookie(cname, cvalue) {
	var cookie_string = cname + "=" + cvalue + ";";
	document.cookie = cookie_string;
}

function GetCookie(cname) {
	var name = cname + "=";
	/* split the cookies up */
	var cookie_array = document.cookie.split(';');
	for (var index = 0; index < cookie_array.length; index++) {
		var cookie = cookie_array[index];
		/* get rid of spaces */
		while (cookie.charAt(0) == ' ' || cookie.charAt(0) == '\n') {
			cookie = cookie.substring(1);
		}
		/* return occurence of first letter of cookie name, if it is up next */
		if (cookie.indexOf(name) == 0) {
			return cookie.substring(name.length, cookie.length);
		}
		/* otherwise, move on to next cookie */
	}
	/* return an empty string if we haven't found our cookie */
	return "";
}

function CheckCookieExists(cookie_name) {
	var cookie = GetCookie(cookie_name);
	if (cookie != "") {
		document.getElementById("login_form").style.display = "none";
		document.getElementById("logged_in").innerHTML = "Welcome to Doman technologies, " + cookie + "!";
		return true;
	} else {
		document.getElementById("private_link_one").style.display = "none";
		document.getElementById("private_link_two").style.display = "none";
		document.getElementById("welcome_message").style.display = "none";
		return false;
	}
}

function CheckCookieContents(user_check, user_value) {
	var user = GetCookie(user_check);
	if (user != "") {
		if (user == user_value) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function DeleteCookies() {
	var cookie_array = document.cookie.split(';');
	for (var index = 0; index < cookie_array.length; index++) {
		var cookie = cookie_array[index];
		/* get rid of spaces */
		while (cookie.charAt(0) == ' ') {
			cookie = cookie.substring(1);
		}
		
		document.cookie = cookie + "=;" +
		"expires=Thu, 01 Jan 1970 00:00:01 GMT";

		/* otherwise, move on to next cookie */
	}
}