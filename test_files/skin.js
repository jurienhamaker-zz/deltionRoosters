
	var skin_array_1A = new Array(g_sPubMap+"public/images/roosters/", "bg_roster_0", ".png", 11, 11, 11, 11);
	
	function set_skin_1A(id_div_parent)
	{
	  //window.alert("let op...");
		put_skin("test123", skin_array_1A);
		//document.getElementById("test123").innerHTML = "hoi<hr>haai";
	}
	
	function put_skin(id_div_parent, skin_array)
	{ 
		//           (0          , 1        , 2      , 3   , 4   , 5   , 6   );
		// skin_array(img_pad    , img_pre  , img_ext, br_l, br_r, hg_b, hg_o);
		//bijv.:Array("roosters/", "sk_tl_0", ".png" , 31  , 29  , 31  , 23  );
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
		
		var div_parent = document.getElementById(id_div_parent);
		
		if(!div_parent) 
		{ 
			window.alert("parent div: \""+id_div_parent+"\" (voor skin) bestaat niet!"); 
		}
		else 
		{ 
			var br_tot = div_parent.offsetWidth; 
			var hg_tot = div_parent.offsetHeight;
			pointHblok
			var oPoint = DivHelper.getPoint( div_parent );
			var x0_div_parent = oPoint.x; 
			var y0_div_parent = oPoint.y;
			var br_mid = br_tot - skin_array[3] - skin_array[4] ;
			var hg_mid = hg_tot - skin_array[5] - skin_array[6] ;
			var img_start = skin_array[0]+skin_array[1];
			var img_ext   = skin_array[2];
			
			div_parent.style.backgroundColor="";
			
			//window.alert("parent div: \""+id_div_parent+"\"\nbreedte: "+br_tot+"\nhoogte: "+hg_tot+"\nbreedte midden:"+br_mid+"\nhoogte midden:"+hg_mid); 
			
			var html = "";
			html += "<div id='"+id_div_parent+"_skin' ";
			html += " style='";
			html += "  position:absolute; ";
			html += "  left:"+oPoint.x+"px; ";
			html += "  top: "+oPoint.y+"px; ";
			html += "  margin:0; ";
			html += "  padding:0; ";
			//html += "  overflow:hidden; ";
			html += "  visibility:visible; ";
			html += "  width: "+br_tot+"px; ";
			html += "  height:"+hg_tot+"px; ";
			//html += "  z-index:"+(div_parent.style.zIndex-1)+"; ";
			//html += "  background-color:lime; ";
			html += "'>\n";
			
				//bovenste rij
				html += "<div";
				//html += " onmousedown='move_help_div(\""+id+"\")' ";
				//html += " onmouseover='this.style.cursor=\"pointer\"' " ;
				html += " style='";
				html += "  float:left; ";
				html += "  height:"     +skin_array[5]+"px; ";
				html += "  line-height:"+skin_array[5]+"px; "; //special voor Internet Explorer
				html += "  width:"      +skin_array[3]+"px; ";
				html += "  background-image: url("+img_start+"1"+img_ext+"); ";
				html += "'>&nbsp;\n"; //special voor Internet Explorer
				html += "</div>\n";
				
				html += "<div";
				html += " style='margins:0px;";
				html += "  background-image: url("+img_start+"2"+img_ext+"); ";
				html += "  float:left; ";
				html += "  height:"     +skin_array[5]+"px; ";
				html += "  line-height:"+skin_array[5]+"px; ";
				html += "  width:" +br_mid+"px; ";
				html += "'>\n"; 
				html += "</div>\n";	
				
				html += "<div";
				//html += " onmouseover='this.style.cursor=\"pointer\"' " ;
				//html += " onclick='document.getElementById(\""+id+"\").style.display=\"none\"' " ;
				html += " style='margins:0px;";
				html += "  float:left; ";
				html += "  height:"     +skin_array[5]+"px; ";
				html += "  line-height:"+skin_array[5]+"px; ";
				html += "  width:"      +skin_array[4]+"px; ";
				html += "  background-image: url("+img_start+"3"+img_ext+"); ";
				html += " '";
				html += ">&nbsp;\n";
				html += "</div>\n";
				
				html += "<div style='clear:both;'></div>\n";
				
				//middelste rij	
				html += "<div";
				html += " style='";
				html += "  float:left; ";
				html += "  height:"     +hg_mid       +"px; ";
				html += "  line-height:"+hg_mid       +"px; ";
				html += "  width:"      +skin_array[3]+"px; ";
				html += "  background-image: url("+img_start+"4"+img_ext+"); ";
				html += " '";
				html += ">&nbsp;\n";
				html += "</div>\n";
				
				html += "<div";
				html += " style='";
				html += "  float:left; ";
				//html += "  position:relative; ";
				html += "  height:"     +hg_mid+"px; ";
				html += "  line-height:"+hg_mid+"px; ";
				html += "  width:"      +br_mid+"px; ";
				//html += "  margin-left : -10px; ";
				//html += "  margin-right: -10px; ";
				//html += "  overflow:auto; ";
				//html += "  background-color: red; ";
				html += "  background-image: url("+img_start+"5"+img_ext+"); ";
				html += " '";
				html += ">&nbsp;\n";
				html += "</div>\n";
				
				html += "<div";
				html += " style='";
				html += "  float:left; ";
				html += "  height:"     +hg_mid       +"px; ";
				html += "  line-height:"+hg_mid       +"px; ";
				html += "  width:"      +skin_array[4]+"px; ";
				html += "  background-image: url("+img_start+"6"+img_ext+"); ";
				html += " '";
				html += ">&nbsp;\n";
				html += "</div>\n";
			
				html += "<div style='clear:both;'></div>\n";
				
				//onderste rij
				html += "<div";
				html += " style='";
				html += "  float:left; ";
				html += "  height:"     +skin_array[6]+"px; ";
				html += "  line-height:"+skin_array[6]+"px; ";
				html += "  width:"      +skin_array[3]+"px; ";
				html += "  background-image: url("+img_start+"7"+img_ext+"); ";
				html += " '";
				html += ">&nbsp;\n";
				html += "</div>\n";
				
				html += "<div";
				html += " style='";
				html += "  float:left; ";
				html += "  height:"     +skin_array[6]+"px; ";
				html += "  line-height:"+skin_array[6]+"px; ";
				html += "  width:"      +br_mid       +"px; ";
				html += "  background-image: url("+img_start+"8"+img_ext+"); ";
				html += " '";
				html += ">&nbsp;\n";
				html += "</div>\n";
			
				html += "<div";
				html += " style='";
				html += "  float:left; ";
				html += "  height:"     +skin_array[6]+"px; ";
				html += "  line-height:"+skin_array[6]+"px; ";
				html += "  width:"      +skin_array[4]+"px; ";
				html += "  background-image: url("+img_start+"9"+img_ext+"); ";
				html += " '";
				html += ">&nbsp;\n";
				html += "</div>\n";
			
				//html += "<div style='color:white;'>iuhgfgilehr"+div_parent.innerHTML+"</div>\n";
			
			html += "</div>\n";
			
			html += "<div id='"+id_div_parent+"_content' ";
			html += " style='";
			html += "  position:absolute; ";
			html += "  left:"+oPoint.x+"px; ";
			html += "  top: "+oPoint.y+"px; ";
			//html += "  margin :10px 10px 10px 10px; ";
			//html += "  padding:30px; ";
			html += "  margin :"+div_parent.style.margin +"; ";
			html += "  padding:"+div_parent.style.padding+"; ";
			html += "  visibility:visible; ";
			html += "  width: "+(br_tot-2*15)+"px; ";
			html += "  height:"+(hg_tot-2*15)+"px; ";
			//html += "  background-color: yellow; ";
			//html += "  z-index:"+(div_parent.style.zIndex-1)+"; ";
			html += "'>\n";
			var S = "br_tot="+br_tot+", paddingLeft=\""+div_parent.style.paddingLeft+"\"\nnw br="+(br_tot-2*div_parent.style.padding);
			//html += S;//div_parent.innerHTML;
			html += div_parent.innerHTML;
			html += "</div>\n";
			
			div_parent.innerHTML = html;			
		}
	}
	