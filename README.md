AbstractArt


As of v1.1: Requires hosting on a local webserver for AJAX-xmlhttpdrequests to run properly.
	    Append the following to the apache site.conf:

<Directory />
	Option FollowSymLinks
	AllowOverride All
	Require all granted
	Allow from all
</Directory>
