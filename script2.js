
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridTwoMonth',
        views: {
          dayGridTwoMonth: {
            type: 'dayGrid',
            duration: { months: 2 },
            buttonText: '2 months'
          }
        },
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridTwoMonth'
        }
      });
  
      calendar.render();
    });