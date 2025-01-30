function logEventsFromCalendar() {
    //Set sheeet and Calendar ID
    var ssID = 'YOUR_SPREADSHEET_ID' //TODO: Replace with your spreadsheet ID
    var sheetName = 'YOUR_SHEET_NAME' //TODO: Replace with your sheet name
    var calID = 'YOUR_CALENDAR_ID' //TODO: Replace with your calendar ID

    //grab today's date twice to transform to yesterday and 7 days ago
    var today1 = new Date();
    var today2 = new Date();
    //Subtract one day from today's date, reformat as date object
    var calcYesterday = today1.setDate(today1.getDate() - 1);
    var yesterday = new Date(calcYesterday);
    //Subtract seven days from today's date, reformat as date object
    var calc7D = today2.setDate(today2.getDate() - 7);
    var last7D = new Date(calc7D);
    //Grab hours calendar
    var cal = CalendarApp.getCalendarById(calID);
    //Get events in Date range
    var events = cal.getEvents(last7D, yesterday);
    //Get Hours tab of spreadsheet
    var sheet = SpreadsheetApp.openById(ssID).getSheetByName(sheetName);
  
     for (let i = 0; i < events.length; i++){
      if (events[i].getColor() != "2") {
        var startTime = events[i].getStartTime();
        var endTime = events[i].getEndTime();
        var eventName = events[i].getTitle()
        var description = events[i].getDescription();
        var creationDate = events[i].getDateCreated();
        var startRow = sheet.getLastRow()+1;
        var startColumn = 1
        var valuesToLog = [[startTime,eventName,startTime,endTime,description,,creationDate]]
        sheet.getRange(startRow,startColumn,1,7).setValues(valuesToLog);
        sheet.getRange(startRow, 6, 1, 1).setFormula("=D"+startRow+"-C"+startRow);
        events[i].setColor('2');
      }
    }
   
  }