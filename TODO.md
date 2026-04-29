# TODO: Add Auth, Profile, Blog, Weather UI (API Placeholders - User will add API calls)

## Phase 1: Setup & Deps

- [ ] Install UI deps: `npm i react-hook-form react-hot-toast lucide-react @headlessui/react @heroicons/react date-fns`
- [ ] Create `src/context/AuthContext.jsx` (mock auth with localStorage)
- [ ] Update `App.jsx`: Wrap with AuthProvider

## Phase 2: Auth Pages & Routes

- [ ] `src/routes/index.jsx`: Add /login, /register, /forgot-password, /change-password
- [ ] `src/components/auth/Login.jsx` (form + mock Google)
- [ ] `src/components/auth/Register.jsx`
- [ ] `src/components/auth/ForgotPassword.jsx`
- [ ] `src/components/auth/ChangePassword.jsx`

## Phase 3: Profile & Header Update

- [ ] `src/components/Profile/Profile.jsx` (mock edit)
- [ ] `src/components/Header/Header.jsx`: Auth nav/dropdown

## Phase 4: Blog Features

- [ ] Routes: /blog, /blog/new, /blog/:id
- [ ] `src/components/Blog/BlogList.jsx` (mock data)
- [ ] `src/components/Blog/BlogForm.jsx`
- [ ] `src/components/Blog/BlogPost.jsx`

## Phase 5: Weather

- [ ] `src/components/Weather/WeatherCard.jsx` (mock Binh Thuan data)
- [ ] Integrate into /du-doan

## Phase 6: Utils & Final

- [ ] ProtectedRoute HOC
- [ ] Protect profile/blog create
- [ ] Toasts, spinners
- [ ] SCSS updates
- [ ] Test responsiveness

**Start with Phase 1 after deps install.**
