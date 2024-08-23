    GitHubCalendar(".calendar", "parveenbarak");
  
    // or enable responsive functionality:
    GitHubCalendar(".calendar", "parveenbarak", { responsive: true });
  
    // Use a proxy
    GitHubCalendar(".calendar", "parveenbarak", {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${parveenbarak}`)
       }
    }).then(r => r.text())