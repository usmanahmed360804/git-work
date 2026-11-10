// Demo credentials (sirf testing ke liye). Asli project mein server se verify karein.
const DEMO_USER = { email: "admin@example.com", password: "Admin@123" };

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const rememberBox = document.getElementById("remember");
const togglePw = document.getElementById("togglePw");
const formMsg = document.getElementById("formMsg");
const submitBtn = document.getElementById("submitBtn");

// Pichla email yaad rakhna (sirf email, password kabhi save nahi hota)
try {
  const saved = localStorage.getItem("rememberedEmail");
  if (saved) {
    emailInput.value = saved;
    rememberBox.checked = true;
  }
} catch (e) { /* storage available nahi */ }

// Password show / hide
togglePw.addEventListener("click", () => {
  const hidden = passwordInput.type === "password";
  passwordInput.type = hidden ? "text" : "password";
  togglePw.textContent = hidden ? "Chhupayein" : "Dikhayein";
  togglePw.setAttribute("aria-label", hidden ? "Password chhupayein" : "Password dikhayein");
});

function setError(input, message) {
  const field = input.closest(".field");
  field.classList.toggle("invalid", Boolean(message));
  document.getElementById(input.id + "Error").textContent = message || "";
}

function validate() {
  let ok = true;
  const email = emailInput.value.trim();
  const pw = passwordInput.value;

  if (!email) {
    setError(emailInput, "Email likhna zaroori hai.");
    ok = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError(emailInput, "Sahi email address likhein.");
    ok = false;
  } else {
    setError(emailInput, "");
  }

  if (!pw) {
    setError(passwordInput, "Password likhna zaroori hai.");
    ok = false;
  } else if (pw.length < 6) {
    setError(passwordInput, "Password kam az kam 6 characters ka hona chahiye.");
    ok = false;
  } else {
    setError(passwordInput, "");
  }
  return ok;
}

function showMessage(text, type) {
  formMsg.textContent = text;
  formMsg.className = "form-msg " + (type === "ok" ? "ok-msg" : "error-msg");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  showMessage("", "");
  if (!validate()) return;

  submitBtn.disabled = true;
  submitBtn.textContent = "Check ho raha hai...";

  // Server request ki simulation
  setTimeout(() => {
    const email = emailInput.value.trim().toLowerCase();
    const pw = passwordInput.value;

    if (email === DEMO_USER.email && pw === DEMO_USER.password) {
      try {
        if (rememberBox.checked) localStorage.setItem("rememberedEmail", email);
        else localStorage.removeItem("rememberedEmail");
      } catch (err) { /* ignore */ }

      showMessage("Login kamyab! Redirect ho raha hai...", "ok");
      // Yahan apna dashboard page lagayein, e.g. window.location.href = "dashboard.html";
    } else {
      showMessage("Email ya password galat hai. Dobara koshish karein.", "error");
    }
    submitBtn.disabled = false;
    submitBtn.textContent = "Login karein";
  }, 700);
});

// Typing ke dauran error hata dein
[emailInput, passwordInput].forEach((el) =>
  el.addEventListener("input", () => setError(el, ""))
);

document.getElementById("forgot").addEventListener("click", (e) => {
  e.preventDefault();
  showMessage("Password reset ka feature backend ke saath jodna hoga.", "error");
});