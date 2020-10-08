# social-reg-app

redirectURL: https://www.facebook.com/
URLENCODE(redirect URI): https%3A%2F%2Fwww.facebook.com%2F
clientID: 77q2o6710wg93h
clientsecret: J5OFMj4rCyXay1sd

??GET https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77q2o6710wg93h&redirect_uri=https%3A%2F%2Fwww.facebook.com%2F&state=8369745495&scope=r_liteprofile%20r_emailaddress%20w_member_social 


Valid Link
https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=8369745495&scope=r_liteprofile&client_id=77q2o6710wg93h&redirect_uri=https%3A%2F%2Fwww.facebook.com%2F

What we need from response:
code=AQSRFEEvy_sBs_XCEmCBb-WR2sfNqNymNcI4tjSpgB8QXba6ItSw1wJchNwWuvcYXMqyCZazz0-lX9Igwy4hd6EU6lZZm-C1-57MJArjhM35LsM4HZyRqWHyD4iWSBaJD98wu8qonrQDgMSos5rfUV6xaFYWuWdtWD4717yACjtP_qsB25CTkIJmP9FMmg

To generate Token: POST request
https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=AQSRFEEvy_sBs_XCEmCBb-WR2sfNqNymNcI4tjSpgB8QXba6ItSw1wJchNwWuvcYXMqyCZazz0-lX9Igwy4hd6EU6lZZm-C1-57MJArjhM35LsM4HZyRqWHyD4iWSBaJD98wu8qonrQDgMSos5rfUV6xaFYWuWdtWD4717yACjtP_qsB25CTkIJmP9FMmg&redirect_uri=https%3A%2F%2Fwww.facebook.com%2F&client_id=77q2o6710wg93h&client_secret=J5OFMj4rCyXay1sd

To get JSON response GET request
https://api.linkedin.com/v2/me

Used as a header in postman:
key			  value
Authorization          Bearer {access token}
