import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABfmOmyyY4k_OAWQ8fbx3MfpQXSEikty8",
  authDomain: "greenfield-9ed83.firebaseapp.com",
  projectId: "greenfield-9ed83",
  storageBucket: "greenfield-9ed83.appspot.com",
  messagingSenderId: "1071633017522",
  appId: "1:1071633017522:web:4ef218a397dbd491b3f7ab",
  measurementId: "G-DVTVFLPR04",
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
