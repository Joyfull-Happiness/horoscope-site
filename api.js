const horoscopeData = {
  horoscopes: {
    date: "2023-11-30",
    astroSigns: [
      {
        sign: "Aries",
        dateRange: "March 21 - April 19",
        dailyHoroscope:
          "Today is a day for bold actions. Trust your instincts and take the leap you've been considering.",
        luckyNumbers: [3, 17, 21],
        key: 0,
        icon: "https://openmoji.org/data/color/svg/2648.svg",
      },
      {
        sign: "Taurus",
        dateRange: "April 20 - May 20",
        dailyHoroscope:
          "Patience will be your ally today. Good things come to those who wait, so don't rush into decisions.",
        luckyNumbers: [5, 14, 29],
        key: 1,
        icon: "https://openmoji.org/data/color/svg/2649.svg",
      },
      {
        sign: "Gemini",
        dateRange: "May 21 - June 20",
        dailyHoroscope:
          "Communication is key today. Reach out to an old friend or a family member you haven't spoken to in a while.",
        luckyNumbers: [2, 16, 23],
        key: 2,
        icon: "https://openmoji.org/data/color/svg/264A.svg",
      },
      {
        sign: "Cancer",
        dateRange: "June 21 - July 22",
        dailyHoroscope:
          "Embrace your creative side. Today is a perfect day for starting a new artistic project.",
        luckyNumbers: [7, 19, 25],
        key: 3,
        icon: "https://openmoji.org/data/color/svg/264B.svg",
      },
      {
        sign: "Leo",
        dateRange: "July 23 - August 22",
        dailyHoroscope:
          "Your leadership skills will be in demand today. Take charge in a group situation and guide others to success.",
        luckyNumbers: [1, 8, 22],
        key: 4,
        icon: "https://openmoji.org/data/color/svg/264C.svg",
      },
      {
        sign: "Virgo",
        dateRange: "August 23 - September 22",
        dailyHoroscope:
          "Pay attention to the small details today. Your meticulousness will lead to a significant breakthrough.",
        luckyNumbers: [4, 11, 26],
        key: 5,
        icon: "https://openmoji.org/data/color/svg/264D.svg",
      },
      {
        sign: "Libra",
        dateRange: "September 23 - October 22",
        dailyHoroscope:
          "Seek balance in your life. Take time for yourself and focus on your personal well-being.",
        luckyNumbers: [6, 15, 24],
        key: 6,
        icon: "https://openmoji.org/data/color/svg/264E.svg",
      },
      {
        sign: "Scorpio",
        dateRange: "October 23 - November 21",
        dailyHoroscope:
          "A mystery may unfold today. Trust your intuition and follow where it leads.",
        luckyNumbers: [9, 18, 27],
        key: 7,
        icon: "https://openmoji.org/data/color/svg/264F.svg",
      },
      {
        sign: "Sagittarius",
        dateRange: "November 22 - December 21",
        dailyHoroscope:
          "Adventure calls to you. Embrace new experiences and open yourself to learning.",
        luckyNumbers: [3, 12, 21],
        key: 8,
        icon: "https://openmoji.org/data/color/svg/2650.svg",
      },
      {
        sign: "Capricorn",
        dateRange: "December 22 - January 19",
        dailyHoroscope:
          "Discipline and hard work will be fruitful. Focus on your goals and you'll achieve great things.",
        luckyNumbers: [8, 16, 23],
        key: 9,
        icon: "https://openmoji.org/data/color/svg/2651.svg",
      },
      {
        sign: "Aquarius",
        dateRange: "January 20 - February 18",
        dailyHoroscope:
          "Innovation is your theme today. Think outside the box and explore new ideas.",
        luckyNumbers: [5, 13, 20],
        key: 10,
        icon: "https://openmoji.org/data/color/svg/2652.svg",
      },
      {
        sign: "Pisces",
        dateRange: "February 19 - March 20",
        dailyHoroscope:
          "Your empathy will be a blessing to someone in need. Listen and offer your support.",
        luckyNumbers: [2, 10, 22],
        key: 11,
        icon: "https://openmoji.org/data/color/svg/2653.svg",
      },
    ],
  },
};
// 📝 below is the list of relevant variables necessary to store the relative HTML elements that will be needed in the following functions
let form = document.querySelector("#zodiac-form");
let output = document.querySelector(".suggestion");
let submitBtn = document.getElementById("submit");
let result = document.querySelector(".result");
let resetBtn = document.getElementById("reset");
console.log("submit", submitBtn);

// 📝 Here I'm setting up a variable to hold the dot notation that i will use later in the
// showresults function
// 📝 the userZodiac variable is holding the
let zodiacPath = horoscopeData.horoscopes.astroSigns;

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log("dataObject", dataObject);

  showResult(dataObject); /* the key value pair is stored in the dataObject */
  console.log(dataObject);

  // show it on form submit show the reset button";
  resetBtn.style.display = "block";
}

// compare to the zodiacitem
function showResult(dataObject) {
  for (let zodiacItem of zodiacPath) {
    if (dataObject.sign === zodiacItem.sign) {
      console.log("ZodiacItem:", zodiacItem.sign);
      let paragraphImg = document.querySelector("img");
      paragraphImg.src = zodiacItem.icon;
      let paragraphSign = document.querySelector(".sign");
      paragraphSign.textContent = `Your sign is ${zodiacItem.sign}.`;
      let paragraphDate = document.querySelector(".dateRange");
      paragraphDate.textContent = `The date range for ${zodiacItem.sign} is ${zodiacItem.dateRange}.`;
      let paragraphHoro = document.querySelector(".horoscope");
      paragraphHoro.textContent = `Your horoscope for today is ${zodiacItem.dailyHoroscope}.`;
    }
  }
}

// add event listener (click on form submit connect to the reset button
resetBtn.addEventListener("click", onReset);

function onReset() {
  // this function is reseting the form,
  form.reset();

  suggestion.style.disply = "none";
}
