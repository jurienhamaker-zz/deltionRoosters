var g_sShownToolTipDivId = "";
var g_arrHideDelay = new Array();

function ctrl_tooltip_show( sDivId, sTooltipDivId, nDeltaX, nDeltaY)
{
	clearTimeout( g_arrHideDelay[ sTooltipDivId ] );
	
	var oDivToolTip = document.getElementById( sTooltipDivId );
	var oDiv = document.getElementById( sDivId );
	
	// maak oDivToolTip eerst onzichtbaar
	oDivToolTip.style.visibility = 'hidden'; 
	// plaats (onzichtbare) oDivToolTip, zodat hoogte bekend is voor plaatsing hieronder
	oDivToolTip.style.display    = 'block' ; 
	
	 
     // de rostertooltipdouble wordt relatief gepositioneerd t.o.v oDiv. Die moet dus Top 0 houden.
	var nTopY = 0;
	if( oDivToolTip.className != "rostertooltipdouble") 
	{
		nTopY  = Math.round( ( oDiv.offsetHeight - oDivToolTip.offsetHeight) / 2 ) + oDiv.offsetTop;
	}
	var nLeftX = Math.round( ( oDiv.offsetWidth - oDivToolTip.offsetWidth ) / 2 ) + oDiv.offsetLeft;
	
	// tooltip verschijnt op nDeltaX van links
	if ( nDeltaX != 0 )
		nLeftX = nDeltaX;
	// tooltip verschijnt op nDeltaY van boven
	if( nDeltaY != 0 ) 
		nTopY = nDeltaY;
	
	oDivToolTip.style.top  = nTopY  + "px";
	oDivToolTip.style.left = nLeftX + "px";		 
	
	// maak oDivToolTip nu ook weer echt zichtbaar
	document.getElementById( sTooltipDivId ).style.visibility = 'visible'; 	
}

function ctrl_tooltip_hide( sTooltipDivId, nDelay )
{
	g_arrHideDelay[sTooltipDivId] = setTimeout("document.getElementById('"+ sTooltipDivId +"').style.display = 'none'", nDelay );
}