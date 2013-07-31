
//Root URL for the service

			function getUrl(sUrl) {
                      if (sUrl == "")
                                return sUrl;
                      if (window.location.hostname == "localhost"
                                          || window.location.hostname == "https://sapes1.sapdevcenter.com") {
                                return "proxy" + sUrl;
                      } else {
                                return sUrl;
                      }
           
            }
           // var serviceUrl = getUrl( '/sap/opu/sdata/iwfnd/SAMPLEFLIGHT/');
			 var serviceUrl = 'proxy/https/sapes1.sapdevcenter.com/sap/opu/sdata/iwfnd/SAMPLEFLIGHT/';