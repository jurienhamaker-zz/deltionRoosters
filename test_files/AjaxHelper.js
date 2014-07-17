function AjaxHelper()
{
	var instance = ( function()
	{
		return {
			// public interface
			update: function ( sDivId, sUrl, jsonParams )
			{
				var sCompleteUrl = this.getCompleteUrl( sUrl, jsonParams );

				jx.load( sCompleteUrl, function(data){
					document.getElementById( sDivId ).innerHTML = data;
					},'text');
			}
			,
			getCompleteUrl: function ( sUrl, jsonParams )
			{
				var sCompleteUrl = sUrl;
				for ( var sId in jsonParams )
				{
					var vtValue = jsonParams[sId];
					if ( vtValue == null )
						continue;
					sCompleteUrl = sCompleteUrl + sId + '/' + vtValue + '/';
				}
				// sCompleteUrl = sCompleteUrl + 'nocache/' + (new Date()).getTime() + '/';
				return sCompleteUrl;
			},
			getImgData: function( chartId ) {
				var chartContainer = document.getElementById( chartId );
				var chartArea = chartContainer.getElementsByTagName('svg')[0].parentNode;
				var svg = chartArea.innerHTML;
				var doc = chartContainer.ownerDocument;
				var canvas = doc.createElement('canvas');
				canvas.setAttribute('width', chartArea.offsetWidth);
				canvas.setAttribute('height', chartArea.offsetHeight);

				canvas.setAttribute(
					'style',
					'position: absolute; ' +
					'top: ' + (-chartArea.offsetHeight * 2) + 'px;' +
					'left: ' + (-chartArea.offsetWidth * 2) + 'px;');
				doc.body.appendChild(canvas);
				canvg(canvas, svg);
				var imgData = canvas.toDataURL("image/png");
				canvas.parentNode.removeChild(canvas);
				return imgData;
			},
			sendImgData: function( chartId, sUrl ) {
				var ajax = jx.getHTTPObject();
				ajax.open("POST", sUrl, false /* async */);
				ajax.setRequestHeader('Content-Type', 'application/upload');
				ajax.send( AjaxHelper().getImgData( chartId ) );

				return true;
			}
		};
	} )();

	AjaxHelper = function ()
	{
		// re-define the function for subsequent calls
		return instance;
	};

	return AjaxHelper();
}