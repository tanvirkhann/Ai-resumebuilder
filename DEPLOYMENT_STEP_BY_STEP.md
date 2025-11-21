# 🚀 Resume Builder - Complete Deployment Guide (Step-by-Step)

> **Fresh deployment from scratch - Follow exactly in order!**

---

## 📋 Pre-Deployment Checklist

Before starting, make sure you have:

- [ ] GitHub account with code pushed
- [ ] Render account (free tier) - https://render.com/
- [ ] MongoDB Atlas account (free tier) - https://mongodb.com/cloud/atlas
- [ ] OpenAI API key - https://platform.openai.com/api-keys
- [ ] ImageKit account - https://imagekit.io/

---

## 🗄️ PART 1: MongoDB Atlas Setup (5 minutes)

### Step 1.1: Create MongoDB Cluster

1. Go to https://cloud.mongodb.com/
2. **Sign up** or **Log in**
3. Click **"Build a Database"**
4. Select **"M0 FREE"** tier
5. Choose **Cloud Provider:** AWS
6. Choose **Region:** Closest to you (e.g., Mumbai, Singapore)
7. **Cluster Name:** `Cluster0` (default is fine)
8. Click **"Create Cluster"** (wait 3-5 minutes)

### Step 1.2: Create Database User

1. Left sidebar → **"Database Access"**
2. Click **"Add New Database User"**
3. **Authentication Method:** Password
4. **Username:** `resumeuser` (or any name)
5. **Password:** Click **"Autogenerate Secure Password"** → **Copy it!** 
   - Example: `I2AyK5DKGcI88XIC`
   - **SAVE THIS PASSWORD!** You'll need it later
6. **Database User Privileges:** Select **"Read and write to any database"**
7. Click **"Add User"**

### Step 1.3: Allow Network Access

1. Left sidebar → **"Network Access"**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"**
4. IP Address will be: `0.0.0.0/0`
5. Click **"Confirm"**

### Step 1.4: Get Connection String

1. Go back to **"Database"** (left sidebar)
2. Your cluster should be ready now
3. Click **"Connect"** button
4. Select **"Drivers"**
5. Driver: **Node.js**, Version: **5.5 or later**
6. **Copy the connection string:**
   ```
   mongodb+srv://resumeuser:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
7. **Replace `<password>`** with your actual password from Step 1.2
8. **Remove everything after `.net`** (remove `/?retryWrites=true&w=majority`)

**Final MongoDB URI should look like:**
```
mongodb+srv://resumeuser:I2AyK5DKGcI88XIC@cluster0.vpjzvwy.mongodb.net
```

✅ **Save this URI!** You'll need it for backend deployment.

---

## 🔑 PART 2: Get API Keys (10 minutes)

### Step 2.1: OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. **Sign up** or **Log in**
3. Click **"Create new secret key"**
4. Name: `Resume Builder`
5. Click **"Create secret key"**
6. **Copy the key** (starts with `sk-proj-...`)
7. **SAVE IT!** You won't see it again

Example: `sk-proj-abc123xyz456...`

### Step 2.2: ImageKit Credentials

1. Go to https://imagekit.io/
2. **Sign up** or **Log in**
3. Go to **Developer Options** (left sidebar)
4. Copy these 3 values:
   - **Public Key:** `public_abc123...`
   - **Private Key:** `private_xyz789...`
   - **URL Endpoint:** `https://ik.imagekit.io/your_id`

### Step 2.3: JWT Secret

Generate a random secret key. Open terminal and run:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Or use any random string (minimum 32 characters).

Example: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6`

---

## 🖥️ PART 3: Backend Deployment on Render (10 minutes)

### Step 3.1: Create Web Service

1. Go to https://dashboard.render.com/
2. **Sign up** or **Log in** (use GitHub login for easy integration)
3. Click **"New +"** (top right)
4. Select **"Web Service"**

### Step 3.2: Connect GitHub Repository

1. Click **"Connect account"** (if first time)
2. Authorize Render to access GitHub
3. Find your repository: `tanvirkhann/ai-resumebuilder`
4. Click **"Connect"**

### Step 3.3: Configure Web Service

Fill in these details **EXACTLY:**

| Field | Value |
|-------|-------|
| **Name** | `resume-builder-backend` |
| **Region** | Singapore (or closest to you) |
| **Branch** | `main` |
| **Root Directory** | `server` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | `Free` |

### Step 3.4: Add Environment Variables

Scroll down to **"Environment Variables"** section.

Click **"Add Environment Variable"** and add these **ONE BY ONE:**

#### Variable 1:
```
Key: MONGODB_URI
Value: mongodb+srv://resumeuser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net
```
(Use your actual MongoDB URI from Part 1)

#### Variable 2:
```
Key: JWT_SECRET
Value: your_random_secret_from_step_2.3
```

#### Variable 3:
```
Key: OPENAI_API_KEY
Value: sk-proj-your_openai_key_from_step_2.1
```

#### Variable 4:
```
Key: OPENAI_MODEL
Value: gpt-4o-mini
```

#### Variable 5:
```
Key: IMAGEKIT_PUBLIC_KEY
Value: public_your_public_key_from_step_2.2
```

#### Variable 6:
```
Key: IMAGEKIT_PRIVATE_KEY
Value: private_your_private_key_from_step_2.2
```

#### Variable 7:
```
Key: IMAGEKIT_URL_ENDPOINT
Value: https://ik.imagekit.io/your_id
```

### Step 3.5: Deploy Backend

1. Click **"Create Web Service"** (bottom of page)
2. Wait for deployment (5-10 minutes)
3. Watch the logs - you should see:
   ```
   Database connected successfully
   Server is running on port 3000
   ```

### Step 3.6: Copy Backend URL

1. Once deployed, you'll see your service URL at the top
2. **Copy this URL!** Example:
   ```
   https://resume-builder-backend-abc123.onrender.com
   ```

✅ **Test it:** Open the URL in browser - you should see `Server is live...`

---

## 🌐 PART 4: Frontend Deployment on Netlify (5 minutes)

> **Why Netlify?** Easier than Render for static sites, better free tier, faster deployments.

### Step 4.1: Go to Netlify

1. Go to https://app.netlify.com/
2. **Sign up** or **Log in** (use GitHub login)

### Step 4.2: Import Project

1. Click **"Add new site"** (top right)
2. Select **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Authorize Netlify (if first time)
5. Search and select: `tanvirkhann/ai-resumebuilder`

### Step 4.3: Configure Build Settings

Fill in these details **EXACTLY:**

| Field | Value |
|-------|-------|
| **Base directory** | `client` |
| **Build command** | `npm run build` |
| **Publish directory** | `client/dist` |

### Step 4.4: Add Environment Variable

**BEFORE clicking Deploy:**

1. Click **"Add environment variables"** (or "Show advanced")
2. Click **"New variable"**
3. Add:
   ```
   Key: VITE_BASE_URL
   Value: https://resume-builder-backend-abc123.onrender.com
   ```
   (Use your actual backend URL from Step 3.6)

**IMPORTANT:** No trailing slash `/` at the end!

### Step 4.5: Deploy Frontend

1. Click **"Deploy site"**
2. Wait for build (2-3 minutes)
3. Once done, you'll get a URL like:
   ```
   https://random-name-123456.netlify.app
   ```

### Step 4.6: (Optional) Custom Domain

1. Click **"Site settings"**
2. Click **"Change site name"**
3. Enter: `ai-resumebuilder` (or any available name)
4. Your URL becomes: `https://ai-resumebuilder.netlify.app`

---

## ✅ PART 5: Testing & Verification (5 minutes)

### Step 5.1: Test Backend

1. Open backend URL in browser:
   ```
   https://resume-builder-backend-abc123.onrender.com/
   ```
2. **Expected:** `Server is live...` ✅

3. Test API endpoint:
   ```
   https://resume-builder-backend-abc123.onrender.com/api/users
   ```
4. **Expected:** Some JSON response (not 404)

### Step 5.2: Test Frontend

1. Open frontend URL:
   ```
   https://ai-resumebuilder.netlify.app
   ```
2. You should see the login/signup page

### Step 5.3: Test Full Flow

1. **Sign Up:**
   - Click "Sign Up"
   - Enter name, email, password
   - Click "Create Account"
   - Should redirect to dashboard ✅

2. **Create Resume:**
   - Click "Create New Resume"
   - Fill in details
   - Save resume
   - Should appear in dashboard ✅

3. **Test AI Features:**
   - Edit resume
   - Try "AI Enhance" on professional summary
   - Should generate AI content ✅

4. **Test Image Upload:**
   - Upload profile photo
   - Should upload successfully ✅

---

## 🐛 Troubleshooting

### Issue 1: Backend shows "Error connecting to MongoDB"

**Fix:**
- Check MongoDB URI format: `mongodb+srv://user:pass@cluster.mongodb.net`
- No query parameters (`?retryWrites=...`)
- Password special characters URL encoded
- Network Access: `0.0.0.0/0` allowed

### Issue 2: Frontend shows "Network Error" on login

**Fix:**
- Check `VITE_BASE_URL` environment variable on Netlify
- Should be: `https://your-backend-url.onrender.com`
- No trailing slash!
- Redeploy frontend after adding variable

### Issue 3: "CORS Error"

**Fix:**
- Already handled in code with `app.use(cors())`
- If still error, check backend is running
- Check backend URL is correct

### Issue 4: Backend is slow (30-60 seconds)

**Reason:**
- Render free tier sleeps after 15 min inactivity
- First request wakes it up (takes 30-60 sec)
- Normal behavior on free tier

**Fix:**
- Upgrade to paid tier for always-on service
- Or accept the delay on first request

### Issue 5: AI features not working

**Fix:**
- Check `OPENAI_API_KEY` is correct
- Check OpenAI account has credits
- Check API key permissions

### Issue 6: Image upload fails

**Fix:**
- Check all 3 ImageKit variables are set correctly
- Check ImageKit account is active

---

## 📊 Final Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created with password
- [ ] Network access allowed (`0.0.0.0/0`)
- [ ] MongoDB URI copied (no query params)
- [ ] OpenAI API key obtained
- [ ] ImageKit credentials obtained
- [ ] JWT secret generated
- [ ] Backend deployed on Render
- [ ] All 7 environment variables added to backend
- [ ] Backend logs show "Database connected successfully"
- [ ] Backend URL tested in browser
- [ ] Frontend deployed on Netlify
- [ ] `VITE_BASE_URL` environment variable added
- [ ] Frontend tested in browser
- [ ] Sign up/login working
- [ ] Resume creation working
- [ ] AI features working
- [ ] Image upload working

---

## 🎉 Success!

Your Resume Builder is now live!

- **Backend:** https://resume-builder-backend-abc123.onrender.com
- **Frontend:** https://ai-resumebuilder.netlify.app

Share it with the world! 🚀

---

## 📞 Need Help?

If you encounter any issues:

1. **Check Logs:**
   - Render: Dashboard → Service → Logs tab
   - Netlify: Dashboard → Site → Deploys → Deploy log
   - Browser: F12 → Console tab

2. **Common Log Locations:**
   - Backend errors: Render logs
   - Frontend errors: Browser console
   - API errors: Browser Network tab

3. **Verify Environment Variables:**
   - Render: Environment tab
   - Netlify: Site settings → Environment variables

---

## 🔄 Redeployment

If you make code changes:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. **Auto-Deploy:**
   - Render: Auto-deploys on push
   - Netlify: Auto-deploys on push

3. **Manual Deploy:**
   - Render: Manual Deploy tab → "Deploy latest commit"
   - Netlify: Deploys tab → "Trigger deploy"

---

**Good luck with your deployment! 🎯**
