
var g_bIE = document.all ? true : false;
var g_nXPos, g_nYPos;

function mousemove_helper(e)
{
	if ( g_bIE ) // if ie
	{
		if( document.body )
		{
			g_nXPos = event.clientX + DivHelper.getViewPort().scrollLeft;
			g_nYPos = event.clientY + DivHelper.getViewPort().scrollTop;
		}
	}
	else
	{
		g_nXPos = e.pageX;
		g_nYPos = e.pageY;
	}
	if (g_nXPos < 0 )
		g_nXPos = 0;

	if (g_nYPos < 0 )
		g_nYPos = 0;
}

function MouseHelper()
{

}

MouseHelper.getPoint = function ( e )
{
	var oPoint = new Point( 0,0 );
	if ( g_bIE ) // if ie
	{
		if( document.body )
		{
			oPoint.x = event.clientX + DivHelper.getViewPort().scrollLeft;
			oPoint.y = event.clientY + DivHelper.getViewPort().scrollTop;
		}
	}
	else
	{
		oPoint.x = e.pageX;
		oPoint.y = e.pageY;
	}
	if (oPoint.x < 0 )
		oPoint.x = 0;

	if (oPoint.y < 0 )
		oPoint.y = 0;

	return oPoint;
};
