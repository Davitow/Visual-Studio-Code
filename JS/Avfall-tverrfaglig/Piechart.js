var alderValues = ["Under 15 år", "Under 30 år", "Under 45 år", "Under 60 år", "60 år eller mer"];
var prosentValues = [8.3, 66.7, 0, 25, 0];
var barColors = [
  "rgb(0, 98, 255)",
  "rgb(220, 3, 3)",
  "rgb(208, 182, 14)",
  "rgb(20, 134, 14)",
  "rgb(89, 4, 125)"
];

// Sjekk om Chart er tilgjengelig før du oppretter diagrammet
console.log(Chart);

new Chart("myChart", {
  type: "pie",  // Angi type som "pie" for sektordiagram
  data: {
    labels: alderValues,
    datasets: [{
        backgroundColor: barColors,
        data: prosentValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Hvor gammel er du?"
    }
  }
});