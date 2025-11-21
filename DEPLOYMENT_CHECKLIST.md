# 🎯 Deployment Quick Reference Card

> **Fill this out as you go through deployment - Keep it handy!**

---

## 📋 Your Credentials & URLs

### MongoDB Atlas
```
Cluster Name: Cluster0
Database User: resumeuser
Database Password: ___________________________
MongoDB URI: mongodb+srv://resumeuser:PASSWORD@cluster0._____.mongodb.net
```

### API Keys
```
JWT Secret: _______________________________________
OpenAI API Key: sk-proj-_______________________
ImageKit Public Key: public____________________
ImageKit Private Key: private__________________
ImageKit URL Endpoint: https://ik.imagekit.io/________
```

### Deployment URLs
```
Backend URL (Render): https://________________________.onrender.com
Frontend URL (Netlify): https://________________________.netlify.app
```

---

## ✅ Deployment Checklist

### Part 1: MongoDB Setup
- [ ] Created MongoDB Atlas account
- [ ] Created free cluster (M0)
- [ ] Created database user
- [ ] Saved password
- [ ] Added network access (0.0.0.0/0)
- [ ] Copied connection string
- [ ] Removed query parameters from URI

### Part 2: API Keys
- [ ] Generated JWT secret
- [ ] Got OpenAI API key
- [ ] Got ImageKit public key
- [ ] Got ImageKit private key
- [ ] Got ImageKit URL endpoint

### Part 3: Backend (Render)
- [ ] Created Render account
- [ ] Connected GitHub repo
- [ ] Created Web Service
- [ ] Set root directory: `server`
- [ ] Set build command: `npm install`
- [ ] Set start command: `npm start`
- [ ] Added MONGODB_URI
- [ ] Added JWT_SECRET
- [ ] Added OPENAI_API_KEY
- [ ] Added OPENAI_MODEL
- [ ] Added IMAGEKIT_PUBLIC_KEY
- [ ] Added IMAGEKIT_PRIVATE_KEY
- [ ] Added IMAGEKIT_URL_ENDPOINT
- [ ] Deployment successful
- [ ] Logs show "Database connected successfully"
- [ ] Backend URL tested - shows "Server is live..."

### Part 4: Frontend (Netlify)
- [ ] Created Netlify account
- [ ] Connected GitHub repo
- [ ] Set base directory: `client`
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `client/dist`
- [ ] Added VITE_BASE_URL environment variable
- [ ] Deployment successful
- [ ] Frontend URL opens

### Part 5: Testing
- [ ] Backend URL works
- [ ] Frontend URL works
- [ ] Sign up works
- [ ] Login works
- [ ] Create resume works
- [ ] AI enhance works
- [ ] Image upload works

---

## 🚨 Important Notes

### MongoDB URI Format
```
✅ CORRECT: mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net
❌ WRONG: mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/?appName=Cluster0
❌ WRONG: mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/dbname
```

### Netlify Environment Variable
```
✅ CORRECT: https://your-backend.onrender.com
❌ WRONG: https://your-backend.onrender.com/
❌ WRONG: http://localhost:3000
```

### Special Characters in Password
If your MongoDB password has special characters, URL encode them:
```
@ → %40
# → %23
$ → %24
% → %25
& → %26
```

---

## 🔄 Quick Commands

### Push Code to GitHub
```bash
cd "d:\coding school\resume-builder"
git add .
git commit -m "Your message"
git push origin main
```

### Test Backend Locally
```bash
cd "d:\coding school\resume-builder\server"
npm start
```

### Test Frontend Locally
```bash
cd "d:\coding school\resume-builder\client"
npm run dev
```

### Build Frontend Locally
```bash
cd "d:\coding school\resume-builder\client"
npm run build
```

---

## 📞 Support Links

- MongoDB Atlas: https://cloud.mongodb.com/
- Render Dashboard: https://dashboard.render.com/
- Netlify Dashboard: https://app.netlify.com/
- OpenAI Platform: https://platform.openai.com/
- ImageKit Dashboard: https://imagekit.io/dashboard/

---

## 🎉 Deployment Complete!

**Your Live URLs:**
- Frontend: ___________________________________
- Backend: ___________________________________

**Share your resume builder with the world!** 🚀
