# social-reg-app

Angular Project Setup:
1. Download the project from git repository.
2. Extract the zip file
3. Open Visual Studio Code. Browse and open the folder.
4. Click on Terminal(On toolbar) -> New Terminal
5. In terminal below. Type 'cd social-reg-app-main' (It changes the directory to the application)
6. Type 'npm install' command to install all the packages required.
7. Type 'ng serve' command to run the app;ication.
8. Open the browser and enter 'localhost:4200' as the url. The application will open.

Task done: View of all three pages and response from Linkedin is being generated.

Steps to check the response:
1. Click on sign-up with Linkedin. A Linkedin sign-in window will appear.
2. Enter the credentials and click on sign-in.
3. Click on Allow, to give all the permissions.
4. The page will redirect to 'localhost:4200/linkedin' and the url contains a response from Linkedin.
    code=........ (In the url is the response)


Linkedin API testing on POSTMAN Application:

redirectURL: https://www.facebook.com/
URLENCODE(redirect URI): https%3A%2F%2Fwww.facebook.com%2F
clientID: 77q2o6710wg93h
clientsecret: J5OFMj4rCyXay1sd

Valid Link
https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=8369745495&scope=r_liteprofile&client_id=77q2o6710wg93h&redirect_uri=https%3A%2F%2Fwww.facebook.com%2F

What we need from response:
code=AQSRFEEvy_sBs_XCEmCBb-WR2sfNqNymNcI4tjSpgB8QXba6ItSw1wJchNwWuvcYXMqyCZazz0-lX9Igwy4hd6EU6lZZm-C1-57MJArjhM35LsM4HZyRqWHyD4iWSBaJD98wu8qonrQDgMSos5rfUV6xaFYWuWdtWD4717yACjtP_qsB25CTkIJmP9FMmg

To generate Access Token: POST request
https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=AQSRFEEvy_sBs_XCEmCBb-WR2sfNqNymNcI4tjSpgB8QXba6ItSw1wJchNwWuvcYXMqyCZazz0-lX9Igwy4hd6EU6lZZm-C1-57MJArjhM35LsM4HZyRqWHyD4iWSBaJD98wu8qonrQDgMSos5rfUV6xaFYWuWdtWD4717yACjtP_qsB25CTkIJmP9FMmg&redirect_uri=https%3A%2F%2Fwww.facebook.com%2F&client_id=77q2o6710wg93h&client_secret=J5OFMj4rCyXay1sd

To get JSON response GET request
https://api.linkedin.com/v2/me

Used as a header in postman:
key			                value
Authorization          Bearer {access token}
