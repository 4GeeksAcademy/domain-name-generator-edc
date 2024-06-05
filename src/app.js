/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "he", "her", "it"];
  let adj = ["great", "big", "minuscule", "important", "global"];
  let noun = ["jogger", "racoon", "teacher", "geeks", "engineer"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        let div = document.createElement(`div`);
        div.innerText = `
        ${pronoun[i]}${adj[a]}${noun[n]}.com
        ${pronoun[i]}${adj[a]}${noun[n]}.org
        ${pronoun[i]}${adj[a]}${noun[n]}.net
        ${pronoun[i]}${adj[a]}${noun[n]}.edu
        ${pronoun[i]}${adj[a]}${noun[n]}.io
        `;
        document.body.appendChild(div);
      }
    }
  }
};
