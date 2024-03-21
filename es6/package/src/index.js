// import { nanoid } from "../node_modules/nanoid/nanoid.js";

import { nanoid } from "nanoid"; // with bundler
import "./index.scss";
import laughing from './assets/laughing.jpg';

const user = {
  id: nanoid(),
  name: "joe",
};

const laughImg = document.getElementById('image');
laughImg.src = laughing;