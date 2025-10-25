const randomJokeGenerator = {
  apiUrl: "https://api.chucknorris.io/jokes/random",
  jokesArr: [],
  jokeSpan: document.getElementById("joke"),

  init: function () {
    console.log("App start");
    this.addListener();
    this.getNextJoke();
  },

  getNextJoke: async function () {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    this.jokesArr.push(data);
    this.updateUIWithJoke(data);
  },

  updateUIWithJoke: function (data) {
    const jokeStr = data.value;
    console.log(jokeStr);
    this.jokeSpan.innerHTML = jokeStr;
  },

  addListener: function () {
    document.getElementById("next-joke").addEventListener("click", (event) => {
      console.log("click");
      this.getNextJoke();
    });
  },
};

randomJokeGenerator.init();
