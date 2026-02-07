// 🔹 Firebase SDK'ları
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔹 Firebase Ayarların (SENİN PROJEN)
const firebaseConfig = {
  apiKey: "AIzaSyDtooyW8XEhkw0WhqqTLnPp7OuKjRLvH64",
  authDomain: "eyup-aygar-egitim.firebaseapp.com",
  projectId: "eyup-aygar-egitim",
  storageBucket: "eyup-aygar-egitim.firebasestorage.app",
  messagingSenderId: "838780383490",
  appId: "1:838780383490:web:8969dd15480fcfa129121b"
};

// 🔹 Firebase başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 SADECE OKUL MAILİ KONTROLÜ
function isSchoolMail(email) {
  return email.endsWith("@eyupaygar.meb.k12.tr");
}

// 🔹 KAYIT OL
window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  error.innerText = "";

  if (!isSchoolMail(email)) {
    error.innerText = "Sadece Eyüp Aygar okul maili ile kayıt olunabilir.";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Kayıt başarılı!");
    })
    .catch((err) => {
      error.innerText = err.message;
    });
};

// 🔹 GİRİŞ YAP
window.login = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const error = document.getElementById("error");

  error.innerText = "";

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Giriş başarılı!");
    })
    .catch((err) => {
      error.innerText = err.message;
    });
};
