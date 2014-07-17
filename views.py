import flask, flask.views
import shared, functions
import urllib2
from BeautifulSoup import BeautifulSoup

class Home(flask.views.MethodView):
	def get(self):
		if shared.SETTINGS_SET == True:
			rooster_html = ""
			
			#zet dit terug als school weer is begonnen
			#ict_url = "https://roosters.deltion.nl/roster/view/rosterid/" + shared.LYCEUM_ID + "/" + shared.STUDENT_TEACHER + "/" + shared.GROUP_ID + "/"
			
			ict_url = "http://127.0.0.1/python%20deltion%20roosters/test.html"
			req = urllib2.Request(ict_url, headers={'User-Agent' : "JurienHamaker"}) 
			soup = BeautifulSoup(urllib2.urlopen( req ))

			roosters = soup.body.findAll(id="hd_date")
			scrollerScript = soup.body.find(id="billboard").script
			scrollerScript = flask.Markup(str(scrollerScript)).unescape()

			lyceum = soup.body.find(value=shared.LYCEUM_ID).contents[0]
			group = soup.body.find(value=shared.GROUP_ID).contents[0]

			for rooster in roosters:
				rooster_html += str(rooster)

			rooster_html = functions.fixRosters(rooster_html)

			if shared.STUDENT_TEACHER == 'teacherid':
				position = 'Leraar'
			else:
				position = 'Student'



			return flask.render_template('home.html', roosters=rooster_html, scrollerScript=scrollerScript, position=position, lyceum=lyceum, group=group)

		else:
			return flask.redirect(flask.url_for('settings'))

class Settings(flask.views.MethodView):
	def get(self):
		return flask.render_template('settings/part1.html')

	def post(self):
		teacher_student = flask.request.form['type']
		
		if teacher_student == "Teacher":
			shared.STUDENT_TEACHER = 'teacherid'
		else:
			shared.STUDENT_TEACHER = 'studentgroupid'

		functions.updateSettings()
		return flask.redirect(flask.url_for('settings_part2'))

class Settings_Part2(flask.views.MethodView):
	def get(self):
		if shared.STUDENT_TEACHER == False or shared.STUDENT_TEACHER == None:
			return flask.redirect(flask.url_for('settings'))
			
		options_html = ''

		ict_url = "https://roosters.deltion.nl/roster/view/rosterid/52/"
		req = urllib2.Request(ict_url, headers={'User-Agent' : "JurienHamaker"}) 
		soup = BeautifulSoup(urllib2.urlopen( req ))

		options = soup.body.find(id="rosterid").findAll('option')

		for option in options:
			options_html += str(option)

		options_html = options_html.replace('selected="selected"', '').replace('<option value=""></option>', '')

		return flask.render_template('settings/part2.html', options=options_html)

	def post(self):
		lyceum = flask.request.form['lyceum']
		shared.LYCEUM_ID = lyceum

		functions.updateSettings()
		return flask.redirect(flask.url_for('settings_part3'))

class Settings_Part3(flask.views.MethodView):
	def get(self):
		print shared.LYCEUM_ID
		if shared.STUDENT_TEACHER == False or shared.STUDENT_TEACHER == None or shared.LYCEUM_ID == False or shared.LYCEUM_ID == None:
			return flask.redirect(flask.url_for('settings'))

		options_html = ''

		#zet dit terug als school weer is begonnen.
		#ict_url = "https://roosters.deltion.nl/roster/view/rosterid/" + shared.LYCEUM_ID + "/"

		ict_url = "http://127.0.0.1/python%20deltion%20roosters/test.html"
		req = urllib2.Request(ict_url, headers={'User-Agent' : "JurienHamaker"}) 
		soup = BeautifulSoup(urllib2.urlopen( req ))

		print shared.STUDENT_TEACHER

		options = soup.body.find(id=shared.STUDENT_TEACHER).findAll('option')

		for option in options:
			options_html += str(option)

		options_html = options_html.replace('selected="selected"', '').replace('<option value=""></option>', '')

		return flask.render_template('settings/part3.html', options=options_html, position=shared.STUDENT_TEACHER)

	def post(self):
		group = flask.request.form['group']
		shared.GROUP_ID = group

		functions.updateSettings()
		shared.SETTINGS_SET = True
		return flask.redirect(flask.url_for('home'))

class Reset(flask.views.MethodView):
	def get(self):
		shared.STUDENT_TEACHER = False
		shared.LYCEUM_ID = False
		shared.GROUP_ID = False
		shared.SETTINGS_SET = False

		functions.updateSettings()

		return flask.redirect(flask.url_for('home'))