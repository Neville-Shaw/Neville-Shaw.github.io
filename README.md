
.Flocking-Proj {
  width: 20%;
  height: 24vh;
  min-width: 40vh;
  margin: auto;
  margin-top: 500;
  z-index: -2;

  min-height: 200px;
  background-color: rgb(20, 20, 20);
  opacity: 95%;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;

  /* background-color: rgb(255, 255, 255); */
  border-radius: 5px;
  box-shadow: rgb(212, 0, 0);

  transition: width 0.25s ease 0s;
}

.Flocking-Proj:hover {
  width: 700px;
  max-width: 600vh;
  height: 24vh;

  opacity: 99%;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;

  transition: all 0.5s ease 0s;
}

.Fl-Img {
  z-index: 0;
  position: relative;
  width: auto;
  height: 100%;
  border-radius: 5px;
  box-shadow: #333;

  opacity: 100%;
  float: left;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
  margin-left: -0%;
  margin-top: 0;
  transition: all 1s ease 0s;
}

.sourceCode-button {
  font-size: 250%;
  font-family: sans-serif;
  background-color: #27a6f5;
  transition-duration: 0.3s;
  position: absolute;

  width: 300;

  top: 90%;
  right: 50%;

  box-shadow: 0 0.1rem 1rem #27a6f5 !important;

  border-radius: 4px;
  color: rgb(24, 24, 24);

  transition: all 1s ease 0s;

  border: none;
  outline: none;
}
.sourceCode-button:hover {
  background-color: rgb(58, 230, 36);
  font-size: 255%;

  color: rgb(0, 0, 0);
  border-radius: 5px;
  transition: all 0.2s ease 0s;
  box-shadow: 0 0.1rem 1rem rgb(58, 230, 36) !important;
  cursor: pointer;
}

div.Flocking-Proj:hover h2.flocking-Body-text {
  font-size: 120%;
  margin-left: 350px;
  opacity: 1;
  transition: all 0.7s ease 0s;
}
div.Flocking-Proj:hover button.sourceCode-button {
  left: 10;
  opacity: 1;
  transition: all 1s ease 0s;
}

.Fl-Img:hover {
  filter: brightness(1.3);
  transition: filter 1s ease 0s;
}