import views

def setRoutes(app):
	app.add_url_rule('/', view_func=views.Home.as_view("home"))
	app.add_url_rule('/settings', view_func=views.Settings.as_view("settings"), methods={"GET", "POST"})
	app.add_url_rule('/settings/part2', view_func=views.Settings_Part2.as_view("settings_part2"), methods={"GET", "POST"})
	app.add_url_rule('/settings/part3', view_func=views.Settings_Part3.as_view("settings_part3"), methods={"GET", "POST"})
	app.add_url_rule('/reset', view_func=views.Reset.as_view("reset"), methods={"GET"})