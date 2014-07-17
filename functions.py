import configparser
import shared
from BeautifulSoup import BeautifulSoup

def checkSettings():
	config = configparser.ConfigParser()
	config.read('settings.ini')
	
	lyceum = config['DEFAULT']['lyceum']
	classid = config['DEFAULT']['classid']
	student_teacher = config['DEFAULT']['student_teacher']

	if lyceum == 'False' or classid == 'False' or student_teacher == 'False':
		return False
	else:
		return True

def setSettings():
	config = configparser.ConfigParser()
	config.read('settings.ini')
	
	student_teacher = config['DEFAULT']['student_teacher']
	lyceum = config['DEFAULT']['lyceum']
	classid = config['DEFAULT']['classid']

	if checkSettings():
		shared.SETTINGS_SET = True
		shared.LYCEUM_ID = lyceum
		shared.GROUP_ID = classid
		shared.STUDENT_TEACHER = student_teacher
	else:
		shared.SETTINGS_SET = False

def updateSettings():
	config = configparser.ConfigParser()
	config.read('settings.ini')

	config['DEFAULT']['student_teacher'] = str(shared.STUDENT_TEACHER)
	config['DEFAULT']['lyceum'] = str(shared.LYCEUM_ID)
	config['DEFAULT']['classid'] = str(shared.GROUP_ID)

	with open('settings.ini', 'w') as configfile:    # save
	    config.write(configfile)

def fixRosters(rooster_html):
	rooster_html = rooster_html.replace('width:205px;', 'width:100%;')
	rooster_html = rooster_html.replace('width:20px;', 'width:25%;')
	rooster_html = rooster_html.replace('left:20px;', 'left:25%;')
	rooster_html = rooster_html.replace('width:70px;', 'width:25%;')
	rooster_html = rooster_html.replace('left:90px;', 'left:50%;')
	rooster_html = rooster_html.replace('width:50px;', 'width:25%;')
	rooster_html = rooster_html.replace('left:140px;', 'left:75%;')
	rooster_html = rooster_html.replace('width:60px;', 'width:25%;')
	rooster_html = rooster_html.replace('<div class="rostertableheader" style="top:0px; left:200px; height:17px; line-height:17px; width:5px;">i</div>', '')

	rooster_html = rooster_html.replace('<div class="rostertableheader" style="position:absolute; top:18px; left:0px; height:15px; width:25%; line-height:15px;">1</div>',
										'<div class="rostertableheader" style="position:absolute; top:18px; left:0px; height:15px; width:25%; line-height:15px;">08:30 - 09:15</div>')

	rooster_html = rooster_html.replace('<div class="rostertableheader" style="position:absolute; top:33px; left:0px; height:15px; width:25%; line-height:15px;">2</div>',
										'<div class="rostertableheader" style="position:absolute; top:33px; left:0px; height:15px; width:25%; line-height:15px;">09:15 - 10:00</div>')

	rooster_html = rooster_html.replace('<div class="rostertableheader" style="position:absolute; top:53px; left:0px; height:15px; width:25%; line-height:15px;">3</div>',
										'<div class="rostertableheader" style="position:absolute; top:53px; left:0px; height:15px; width:25%; line-height:15px;">10:15 - 11:00</div>')

	rooster_html = rooster_html.replace('<div class="rostertableheader" style="position:absolute; top:68px; left:0px; height:15px; width:25%; line-height:15px;">4</div>',
										'<div class="rostertableheader" style="position:absolute; top:68px; left:0px; height:15px; width:25%; line-height:15px;">11:00 - 11:45</div>')

	rooster_html = rooster_html.replace('<div class="rostertableheader" style="position:absolute; top:83px; left:0px; height:15px; width:25%; line-height:15px;">5</div>',
										'<div class="rostertableheader" style="position:absolute; top:83px; left:0px; height:15px; width:25%; line-height:15px;">11:45 - 12:30</div>')

	rooster_html = rooster_html.replace('<div class="rostertableheader" style="position:absolute; top:98px; left:0px; height:15px; width:25%; line-height:15px;">6</div>',
										'<div class="rostertableheader" style="position:absolute; top:98px; left:0px; height:15px; width:25%; line-height:15px;">12:30 - 13:15</div>')

	rooster_html = rooster_html.replace('<div class="rostertableheader" style="position:absolute; top:113px; left:0px; height:15px; width:25%; line-height:15px;">7</div>',
										'<div class="rostertableheader" style="position:absolute; top:113px; left:0px; height:15px; width:25%; line-height:15px;">13:15 - 14:00</div>')

	rooster_html = rooster_html.replace('<div class="rostertableheader" style="position:absolute; top:133px; left:0px; height:15px; width:25%; line-height:15px;">8</div>',
										'<div class="rostertableheader" style="position:absolute; top:133px; left:0px; height:15px; width:25%; line-height:15px;">14:15 - 15:00</div>')

	rooster_html = rooster_html.replace('<div class="rostertableheader" style="position:absolute; top:148px; left:0px; height:15px; width:25%; line-height:15px;">9</div>',
										'<div class="rostertableheader" style="position:absolute; top:148px; left:0px; height:15px; width:25%; line-height:15px;">15:00 - 15:45</div>')

	rooster_html = rooster_html.replace('<div class="rostertableheader" style="position:absolute; top:163px; left:0px; height:15px; width:25%; line-height:15px;">10</div>',
										'<div class="rostertableheader" style="position:absolute; top:163px; left:0px; height:15px; width:25%; line-height:15px;">15:45 - 16:30</div>')

	rooster_html = rooster_html.replace('<div class="rostertableheader" style="position:absolute; top:178px; left:0px; height:15px; width:25%; line-height:15px;">11</div>',
										'<div class="rostertableheader" style="position:absolute; top:178px; left:0px; height:15px; width:25%; line-height:15px;">16:30 - 17:15</div>')

	return rooster_html