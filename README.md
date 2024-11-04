# weather-app

Weather app displays real data using visual crossing's api. When the page is first opened, the user will be asked
if they want to allow the page to use their location. If the user agrees, the weather will be displayed based on
their current location. Otherwise, the default location will be displayed. There is a search bar that allows the
user to search for the weather of any location. This can be done by typing the coordinates, city and state, or zip
code. In the event the location is typed incorrectly, an error message will appear. In the search bar, the user has
the option to type the amount of days in the forecast they desire. If no number is typed, the search will default
to seven days. To view a breakdown of the weather by hour for the next twenty four hours, click the arrow on the
right side of the page. Clicking the arrow again will remove the table from the screen. To view all weather alerts
in the area, click the alert button located at the top right corner of the page.

Live Demo: https://worriorbeast.github.io/weather-app/

Objective:

-  Use the fetch method to get weather data
-  Display the weather data
-  Add a search feature to allow user to see the weather data from desired location

Optional Objectives:

-  Appropriately handle errors whether user or server error
-  Display a loading screen anytime the search bar is submitted and remove loading screen when api returns info

What I Learned:

Before building this weather app, I had no prior experience in using an api and handling errors. To handle
asynchronous code I opted to use async and await because the syntax looked the most readable and clean. Using async
and await was straight forward, but handling errors was confusing at first. I wanted to use the catch method to
catch errors, but that was not working properly because the catch method was not getting error codes. The catch
method is used in case there is a runtime error not for error codes, that is why the catch method was not working
as I had planned. Instead I had to use if statements to display an error message based on the error code.

Originally I had thought the loading screen would be fairly simple to create, even with a simple animation, but I
soon found difficulties. At first I thought I would need one timer that does the up and down movement, but soon
I realized that was not possible. I had to create a timer for start moving the letters individually upwards in
intervals then another timer that moves letters back down in intervals. In order to start the animation another
timer had to be created to start and stop the the loading screen. The first letter has to instantly move upward when
the loading screen appears, so the delay is set zero and the rest have move intervals. I had thought that I could
dynamically change the value of the delay. The value of the delay variable does change, but the delay of the timer
does not. I have to stop the timer with zero second delay then start a new timer with the updated delay.
