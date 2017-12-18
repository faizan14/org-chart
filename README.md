# Project Title

Org-chart. An application to maintain an organization chart. Edit/Delete functionalities are yet to be implemented.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Plugins/Libraries

```
jQuery 3.2.1
angularJS 1.6
bootstrap 3
angular google chart
```

### Installing

The files need to be hosted on a server. The following ways can be used:

```
Apache
1. Install Apache Tomcat. Use the following url https://tomcat.apache.org/tomcat-7.0-doc/setup.html
2. Drop the code folder in TOMCAT_HOME/webapps directory.
3. If Tomcat server is not running, run the tomcat by going to bin directory under TOMCAT HOME and double clicking on startup.bat
4. Go to the browser and access the web application using the url http://localhost:portno [where the port no will be setup in TOMCAT]
```

```
Live Server - using ATOM IDE
1. Install ATOM IDE using the following url https://atom.io/
2. Install a plugin atom-live-server 2.2.0
3. If a file .atom-live-server.json exists in project root it will be loaded and used as options.
4. If the file does not exist create a file name .atom-live-server.json in project root.
5. Add the following values in the file:
		Example: Launch specific browser
			{
				"browser": "safari"
			}

			Example: Start server without browser opened
			{
				"no-browser": true
			}

			Example: Serve this file for every 404 (useful for single-page applications)
			{
				"entry-file": "index.html"
			}

			Example: Serve this directory as root path
			{
				"root": "public"
			}
3. Use Ctrl+Alt+l to start the server. The url will be prompted. Use the url to run your application in yur browser.
```
## Authors

* **Mohammad Faizan Karim** - (https://github.com/faizan14)

