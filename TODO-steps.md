# TODO-Steps for UI Implementation (following existing architecture)

## Approved Task: Create UIs for Auth (Login/Register/Forgot/Change Pass, Google), Profile edit, Blog create form.

**Current Progress: 0/20 steps**

### Step 1: Update routes/index.jsx (add new routes)

- [ ] Add routes for /login, /register, /forgot-password, /change-password, /profile, /blog/new under MainLayout.

### Step 2: Create auth dir & Login.jsx

- [ ] src/components/auth/Login.jsx (form + Google btn, react-hook-form, toast)

### Step 3: Create Register.jsx

- [ ] src/components/auth/Register.jsx

### Step 4: Create ForgotPassword.jsx

- [ ] src/components/auth/ForgotPassword.jsx

### Step 5: Create ChangePassword.jsx

- [ ] src/components/auth/ChangePassword.jsx

### Step 6: Update Header.jsx (auth/nav links)

- [ ] Add links to new pages in Header nav.

### Step 7: Create Profile/Profile.jsx

- [ ] src/components/Profile/Profile.jsx (edit form)

### Step 8: Create Blog/BlogForm.jsx

- [ ] src/components/Blog/BlogForm.jsx

### Step 9-15: SCSS for new components (in src/styles/components/)

- [ ] \_auth.scss, \_profile.scss, \_blog.scss (forms, buttons)

### Step 16: Integrate toasts/spinners (react-hot-toast)

- [ ] Add in forms.

### Step 17: Test responsiveness

- [ ] npm run dev, check mobile.

### Step 18: Mock data/forms submit

- [ ] Console/localStorage mocks.

### Step 19: Update original TODO.md

- [ ] Mark phases complete.

### Step 20: Completion

- [ ] attempt_completion

**Next: Execute Step 1 (read Header, MainLayout for style match, then edit routes).**
