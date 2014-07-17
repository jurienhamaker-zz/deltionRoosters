
var g_sPadSkins = g_sPubMap + "public/images/registratie/skins/";
var drag_X0 = 0;
var drag_Y0 = 0;

document.onmousemove = actie_mm_help;
document.onmouseup = muisup_help;

var dragitem_sleep3 = false;	
	
function actie_mm_help(e)
{
	mousemove_helper(e);
	if(dragitem_sleep3) { sleep3(); }
}

function muisup_help() 
{
	dragitem_sleep3 = false;
}

function move_help_div(id_div)
{
	dragitem3 = document.getElementById(id_div);
	dragitem_sleep3 = true;
	drag_X0 = 0; //dragitem3.offsetLeft;
	drag_Y0 = 0; //dragitem3.offsetTop;
}

function sleep3()
{		
	dragitem3.style.left = (g_nXPos - drag_X0 - 20)+"px";
	dragitem3.style.top  = (g_nYPos - drag_Y0 - 10)+"px";
}

function showhelp(id_help, br, hg)
{
	show_popup(id_help, "help", br, hg, undefined )
}

function showwarning( szContent, br, hg)
{
	show_popup(1000, "warning", br, hg, szContent )
}

function show_popup(id, popup_type, br, hg, szWarning )
{
	/*
	sk_tl_01.png : 31 x 31 
	sk_tl_02.png :  1 x 31 
	sk_tl_03.png : 29 x 31 
	sk_tl_04.png : 31 x  1 
	sk_tl_05.png :  1 x  1 
	sk_tl_06.png : 29 x  1 
	sk_tl_07.png : 31 x 23 
	sk_tl_08.png :  1 x 23 
	sk_tl_09.png : 29 x 23 
	margin-top voor titeltext = 11px
	*/
	
	var afb_nm = ""; //naam (zonder nummer) van skin-afbeeldingen
	var afb_xt = ""; //extentie (met punt) van skin-afbeeldingen
	var hd_htm = "";
	var bd_htm = "";
	var divid = "div_"+popup_type+"_"+id; //was div_help_
	
	if (popup_type == "help")
	{
		hd_htm = 'header';
		 
		afb_nm = g_sPadSkins+"toelichting/sk_tl_"; 
		afb_xt = ".png"; 
	}
	
	if (popup_type == "warning")
	{
		hd_htm = 'Warning';
		bd_htm = szWarning; 
		afb_nm = g_sPadSkins+"warning/sk_wn_"; 
		afb_xt = ".png"; 
	}
	
	

	//afmetingen van afb boven, rechts, onder, links
	var afm = new Array(31, 29, 23, 31);
	var mrg = new Array(11,  0,  0,  0);
	var br_tot = br;
	var br_mid = br_tot - afm[1] - afm[3];
	var hg_tot = hg;
	var hg_mid = hg_tot - afm[0] - afm[2];
	var win_br = 0, win_hg = 0;

	if( g_bIE )
	{
		win_br = document.body.offsetWidth;
  	win_hg = document.body.offsetHeight;
	}
	else
	{
		win_br = window.innerWidth;
	  win_hg = window.innerHeight;
	}
	
	if(document.getElementById(divid)) 
	{ 
		//window.alert("bestaat"); 
		document.getElementById(divid).style.display="inline";
		//document.getElementById(divid).style.visibility="visible";
	}
	else 
	{ 
		//window.alert("bestaat niet"); 
		var html = "";
		html += "<div id='"+divid+"' ";
		html += " style='";
		html += "  position:absolute; ";
		html += "  z-index:5; ";
		html += "  visibility:visible; ";
		//html += "  background-color:lime; ";
		html += "  width: "+br_tot+"px; ";
		html += "  height:"+hg_tot+"px; ";
		html += "  top:   "+Math.round(((win_hg - hg_tot)/2))+"px; ";
		html += "  left:  "+Math.round(((win_br - br_tot)/2))+"px; ";
		html += "'>";
			//bovenste rij
			html += "<div";
			html += " onmousedown='move_help_div(\""+divid+"\")' ";
			html += " onmouseover='this.style.cursor=\"pointer\"' " ;
			html += " style='";
			html += "  float:left; ";
			html += "  height:"+(afm[0])+"px; ";
			html += "  line-height:"+(afm[0])+"px; "; //special voor Internet Explorer
			html += "  width:" +afm[3]+"px; ";
			html += "  background-image: url("+afb_nm+"01"+afb_xt+"); ";
			html += "'>&nbsp;";//special voor Internet Explorer
			html += "</div>";
			
			html += "<div";
			html += " style='margins:0px;";
			html += "  background-image: url("+afb_nm+"02"+afb_xt+"); ";
			html += "  float:left; ";
			html += "  height:"+afm[0]+"px; ";
			html += "  width:"+br_mid+"px; ";
			html += "'>"; 
				html += "<div id='hd_htm_"+divid+"' ";
				html += " style='margins:0px;";
				html += "  padding-top:"+mrg[0]+"px; ";
				html += "  height:"+(afm[0]-mrg[0])+"px; ";
				html += "  line-height:"+(afm[0]-mrg[0])+"px; ";//special voor Internet Explorer
				html += "  font-size:11px; ";
				html += "  font-family:verdana; ";
				html += "  text-align:center; ";
				html += "  color:white; ";
				//html += "  white-space:nowrap; ";
				html += " '";
				html += ">";
				html += hd_htm;	
				html += "</div>";
			html += "</div>";	
			
			html += "<div";
			html += " onmouseover='this.style.cursor=\"pointer\"' " ;
			html += " onclick='document.getElementById(\""+divid+"\").style.display=\"none\"' " ;
			html += " style='margins:0px;";
			html += "  float:right; ";
			html += "  height:"+afm[0]+"px; ";
			html += "  line-height:"+afm[0]+"px; ";
			html += "  width:" +afm[1]+"px; ";
			html += "  background-image: url("+afb_nm+"03"+afb_xt+"); ";
			html += " '";
			html += ">&nbsp;";
			html += "</div>";
			
			html += "<div style='clear:both;'></div>";
			
			//middelste rij	
			html += "<div";
			html += " style='";
			html += "  float:left; ";
			html += "  height:"+hg_mid+"px; ";
			html += "  width:" +afm[3]+"px; ";
			html += "  background-image: url("+afb_nm+"04"+afb_xt+"); ";
			html += " '";
			html += ">";
			html += "</div>";
			
			html += "<div";
			html += " style='";
			html += "  float:left; ";
			html += "  position:relative; ";
			html += "  height:"+hg_mid+"px; ";
			//html += "  width:"+br_mid+"px; ";
			html += "  width:"+(br_mid+20)+"px; ";
			html += "  margin-left: -10px; ";
			html += "  margin-right: -10px; ";
			html += "  overflow:auto; ";
			html += "  background-image: url("+afb_nm+"05"+afb_xt+"); ";
			html += " '";
			html += ">";
				html += "<div id='bd_htm_"+divid+"' ";
				html += " style='";
				//html += "  height:"+(hg_mid+10)+"px; ";
				
				
				html += "  padding-top:10px; ";
				html += "  font-size:10px; ";
				html += "  font-family:verdana; ";
				html += "  text-align:left; ";
				html += "  color:navy; ";
				html += " '";
				html += ">";
				html += bd_htm;	
				html += "</div>";
			html += "</div>";
			
			html += "<div";
			html += " style='";
			html += "  float:right; ";
			html += "  height:"+hg_mid+"px; ";
			html += "  width:"+afm[1]+"px; ";
			html += "  background-image: url("+afb_nm+"06"+afb_xt+"); ";
			html += " '";
			html += ">";
			html += "</div>";
		
			html += "<div style='clear:both;'></div>";
			
			//onderste rij
			html += "<div";
			html += " style='";
			html += "  float:left; ";
			html += "  height:"+afm[2]+"px; ";
			html += "  line-height:"+afm[2]+"px; ";
			html += "  width:" +afm[3]+"px; ";
			html += "  background-image: url("+afb_nm+"07"+afb_xt+"); ";
			html += " '";
			html += ">&nbsp;";
			html += "</div>";
			
			html += "<div";
			html += " style='";
			html += "  float:left; ";
			html += "  height:"+afm[2]+"px; ";
			html += "  line-height:"+afm[2]+"px; ";
			html += "  width:"+br_mid+"px; ";
			html += "  background-image: url("+afb_nm+"08"+afb_xt+"); ";
			html += " '";
			html += ">&nbsp;";
			html += "</div>";
		
			html += "<div";
			html += " style='";
			html += "  float:right; ";
			html += "  height:"+afm[2]+"px; ";
			html += "  line-height:"+afm[2]+"px; ";
			html += "  width:" +afm[1]+"px; ";
			html += "  background-image: url("+afb_nm+"09"+afb_xt+"); ";
			html += " '";
			html += ">&nbsp;";
			html += "</div>";
		html += "</div>";
		
		document.getElementById("body_help_div").innerHTML = html;
					
		if (popup_type == "help")
		{
			jx.load( AjaxHelper().getCompleteUrl(
						g_sPubMap + 'helpbeheer/ajax/',
						{ helpid : id }
					),					
					function( jsonHelp )
					{
						document.getElementById( 'hd_htm_' + divid ).innerHTML = jsonHelp.header;
						document.getElementById( 'bd_htm_' + divid ).innerHTML = jsonHelp.content;
					},
					'json'
			);	
		}
	}
}