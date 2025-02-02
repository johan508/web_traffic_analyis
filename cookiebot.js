  <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="64f3e6e5-b9ff-4796-956f-4f2516337bbb" type="text/javascript" async></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag() { dataLayer.push(arguments); }
		  gtag('consent', 'default', {
		    'ad_user_data': 'denied',
		    'ad_personalization': 'denied',
		    'ad_storage': 'denied',
		    'analytics_storage': 'denied',
		    'wait_for_update': 500,
		  });
		  gtag('js', new Date());
		  gtag('config', 'Google tag ID');

		    grantButton.addEventListener("click", function() {
		    localStorage.setItem("consentGranted", "true");
		    function gtag() { dataLayer.push(arguments); }
		
		    gtag('consent', 'update', {
		      ad_user_data: 'granted',
		      ad_personalization: 'granted',
		      ad_storage: 'granted',
		      analytics_storage: 'granted'
		    });
		  });
		
		  // Load gtag.js script.
		  var gtagScript = document.createElement('script');
		  gtagScript.async = true;
		  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=Google tag ID';
		
		  var firstScript = document.getElementsByTagName('script')[0];
		  firstScript.parentNode.insertBefore(gtagScript,firstScript);
		</script>
