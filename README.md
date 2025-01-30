# Google Calendar to Google Sheets
 This script for Google Apps Script grabs past events from the last 7 days from your Google Calendar and stores them in a Google Sheet.

**Notes**
- I have the script set to run daily, but it looks back 7 days in case I forget to log something.
- The script uses event color to determine if an event has been logged or not. Currently it updates logged events to the color green ("2"), but you can modify the script tp change logged events to whichever color you like by modifying the color numbers on lines 27 and 40.

## Installation

1. **Make a copy of the sheets template** _(optional, but recommended)_

   - Open the Google Sheets template for this use case here: https://docs.google.com/spreadsheets/d/1h57GAkYzV-Vx7sfu7T-A2JVBHwTZUgsfwughKWxqjT4/edit
   - Then click _file > Make a copy_

   ![image](https://github.com/user-attachments/assets/a8dfc654-6b99-45bd-82d3-409e4f8230c6)

2. **Open Google Apps Script**

- In your spreadsheet, click _Extensions > Apps Script_

![image](https://github.com/user-attachments/assets/0ad66232-036f-4b7a-8068-3e55dff73a0c)

3. **Paste the script in Apps Script and update**

- Copy the entire script here: https://github.com/c-will-t/Google-Calendar-to-Google-Sheets/blob/Simple/logEventsFromCalendar.js
- Remove any existing code in the _Code.gs_ file in your new Apps Script project, and paste the script inside.
- Next, update your Spreadsheet ID, Sheet Name, and Calendar ID on lines 3, 4, and 5. Be sure each is wrapped in quotes or apostrophes.

![image](https://github.com/user-attachments/assets/befa6acb-60f2-43ce-9e2b-6501fdad88f6)

- **Spreadsheet ID:** Your Spreadsheet ID is the value after "/d/" in the URL of your spreadsheet. Example: docs.google.com/spreadsheets/d/**your_spreadsheet_id**/edit
- **Sheet Name:** This is the name of the tab in your spreadhseet where you would like the events to be stored. In the template, the name is "Sheet1"
- **Calendar ID:** This is the ID of the Google calendar you want to log. You can find it by going to your Google Calendar and looking under _My calendars_ on the left side. Hover over the calendar you want to use and click the three dots

 ![image](https://github.com/user-attachments/assets/6965351e-fdcd-4740-801e-d63eb74c90cc) 
 
 Then click _Settings and sharing_. From there, scroll down to the _Integrate calendar_ section and you should see your calendar ID. Copy the entire string.
 
 ![image](https://github.com/user-attachments/assets/328580da-6066-4493-b4c2-dca9d20245ab)

4. **Test**
   - Save and name your project in Google Apps script.
   - Run the script. You will likely need to go through a few permissions screens on the first run.
  
5. **Create a trigger (optional)**
- You can trigger the script to run periodically from Apps Script by going to _Triggers > Add Trigger_. Remember, the script only looks back 7 days, so I recommend setting the trigger to run within a 7 day window (I set mine to daily), or modify the lookback window of the script.
