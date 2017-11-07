$('.cookies-container').hide();

function __cookieChecker(){
	var it = window.setInterval(function(){
		if(!__cookiesEnabled()){ window.clearInterval(it);

				$('.cookies-container').fadeIn('slow');
				$('.modal-inner').show();
				$('.modal-close').on('click', function() {
					$('.cookies-container').fadeOut('slow',function() {
						window.location.reload(true);
					});
				});

		}
	}, 1000);
}

function __cookiesEnabled(){
	var cookieEnabled = navigator.cookieEnabled;
		if (typeof navigator.cookieEnabled == "undefined"){ document.cookie = "testcookie"; cookieEnabled = document.cookie.indexOf("testcookie") != -1; }
		return cookieEnabled;
	}

__cookieChecker();