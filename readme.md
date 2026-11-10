# Login Page

Ek simple, responsive login page — sirf HTML, CSS aur JavaScript se bana hua.

## Files

| File         | Kaam                                              |
|--------------|---------------------------------------------------|
| `index.html` | Page ka structure (form, fields, buttons)         |
| `style.css`  | Design, layout aur mobile responsiveness          |
| `script.js`  | Validation, password show/hide, demo login logic  |
| `README.md`  | Yeh file                                          |

## Kaise chalayein




1. Sari files ek hi folder mein rakhein.
2. `index.html` ko browser mein double-click karke kholein.

## Demo login

- Email: `admin@example.com`
- Password: `Admin@123`

## Features

- Email aur password validation (khali field, galat email, chhota password)
- Password dikhane / chhupane ka button
- "Mujhe yaad rakhein" — sirf email save hota hai, password nahi
- Mobile par bhi sahi dikhta hai
- Keyboard focus aur screen reader ke liye labels

## Zaroori note

Yeh sirf **front-end** hai. Demo credentials `script.js` mein likhe hain, jo
asli project mein **kabhi nahi karna chahiye**. Production ke liye login ko
server (Node.js, PHP, Django, etc.) se verify karwayein aur password hamesha
HTTPS par bhejein.

## Aage kya karein

- `script.js` mein `// Yahan apna dashboard page lagayein` wali line mein
  redirect ka link dein.
- Rang badalne ke liye `style.css` ke upar wale `:root` variables edit karein.