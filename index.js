(function () {
  var content = document.getElementById("content");
  var html = "";
  var data = {
    date: "15th January, 2021 | 11:30am",
    dailyrates: [
      {
        image: "./Images/US_flag.png",
        buy: 470,
        sell: 475,
      },
      {
        image: "./Images/UK_flag.png",
        buy: 635,
        sell: 642,
      },
      {
        image: "./Images/Euro_flag.png",
        buy: 570,
        sell: 577,
      },
    ],
  };

  var template = Handlebars.compile(
    document.getElementById("dailyrates-template").innerHTML
  );

  content.innerHTML = template(data);
})();
