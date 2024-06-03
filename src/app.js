/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our", "my", "some"];

  let adjectives = ["cool", "anarchist", "awesome", "diabolic"];

  let nouns = ["hacker", "code", "geeks", "tech"];

  let domainNames = [];

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        domainNames.push(`${pronoun}${adjective}${noun}.com`);
      }
    }
  }
  let domainList = domainNames
    .map(domainName => `<li>${domainName}</li>`)
    .join("");
  document.querySelector("ul").innerHTML = domainList;
};
