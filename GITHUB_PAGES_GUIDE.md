# 🚀 GitHub Pages Deployment - Complete Guide

## ✅ What You'll Get:
- **Your URL**: `https://yourusername.github.io`
- **FREE Forever**
- **Professional Domain**
- **HTTPS Enabled**
- **Deploy Time**: 15 minutes

---

## 📋 Step 1: Install Git (5 minutes)

### Download Git:
1. You already have the page open: **https://git-scm.com/download/win**
2. Click the **"Click here to download"** button
3. Save the file (Git-2.xx.x-64-bit.exe)

### Install Git:
1. **Run the downloaded file**
2. Click **"Next"** for all screens (use default settings)
3. **Important**: On the "Adjusting your PATH environment" screen:
   - Select **"Git from the command line and also from 3rd-party software"**
   - Click **"Next"**
4. Continue clicking **"Next"** until installation completes
5. Click **"Finish"**

### Verify Installation:
1. **Close all PowerShell/Command Prompt windows**
2. Open a **NEW PowerShell window**
3. Type: `git --version`
4. You should see: `git version 2.xx.x`

✅ **Git is now installed!**

---

## 📋 Step 2: Create GitHub Account (3 minutes)

### Sign Up:
1. Go to: **https://github.com/signup**
2. Enter your email address
3. Create a password
4. **Choose a username** (IMPORTANT - this will be your URL!)

### Username Suggestions:
- `rishi` (if available) → `rishi.github.io` ⭐ BEST
- `rishi-tech` → `rishi-tech.github.io` ⭐ GREAT
- `rishipm` → `rishipm.github.io`
- `rishi-portfolio` → `rishi-portfolio.github.io`

**Tip**: Choose something professional and short!

### Complete Signup:
1. Verify you're human (puzzle)
2. Click **"Create account"**
3. **Check your email** and verify
4. Skip the personalization questions (or fill if you want)

✅ **GitHub account created!**

---

## 📋 Step 3: Create a New Repository (2 minutes)

### Create Repository:
1. After logging in, click the **"+"** icon (top right)
2. Click **"New repository"**

### Repository Settings:
1. **Repository name**: `portfolio` or `yourusername.github.io`
   - If you use `yourusername.github.io`, your site will be at the root!
   - Example: `rishi.github.io` → site at `https://rishi.github.io`
   
2. **Description**: "My professional portfolio website"

3. **Public** ✅ (Must be public for free GitHub Pages)

4. **DO NOT** check:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license

5. Click **"Create repository"**

✅ **Repository created!**

**IMPORTANT**: Copy the repository URL shown on the next page!
It looks like: `https://github.com/yourusername/portfolio.git`

---

## 📋 Step 4: Configure Git (2 minutes)

### Open PowerShell:
1. Press **Windows + E** (File Explorer)
2. Navigate to: `C:\Users\Rishi\site`
3. Click in the **address bar**
4. Type: `powershell`
5. Press **Enter**

### Configure Git (Run these commands):

```powershell
# Set your name (use your real name)
git config --global user.name "Rishi"

# Set your email (use the email you used for GitHub)
git config --global user.email "your-email@example.com"
```

**Replace**:
- `"Rishi"` with your actual name
- `"your-email@example.com"` with your GitHub email

✅ **Git configured!**

---

## 📋 Step 5: Deploy Your Site (5 minutes)

### In PowerShell (in C:\Users\Rishi\site), run these commands ONE BY ONE:

```powershell
# 1. Initialize Git repository
git init
```
**You should see**: `Initialized empty Git repository`

```powershell
# 2. Add all your files
git add .
```
**You should see**: Nothing (that's normal!)

```powershell
# 3. Commit your files
git commit -m "Initial commit: Portfolio website"
```
**You should see**: List of files added

```powershell
# 4. Rename branch to main
git branch -M main
```
**You should see**: Nothing (that's normal!)

```powershell
# 5. Add your GitHub repository
# REPLACE with your actual repository URL!
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

**Example**:
```powershell
git remote add origin https://github.com/rishi-tech/portfolio.git
```

**You should see**: Nothing (that's normal!)

```powershell
# 6. Push to GitHub
git push -u origin main
```

**You'll be prompted for credentials**:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (see below)

### Creating Personal Access Token:

**If git asks for password**:
1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Note**: "Portfolio deployment"
4. **Expiration**: 90 days (or No expiration)
5. **Select scopes**: Check ✅ **repo** (all repo permissions)
6. Click **"Generate token"**
7. **COPY THE TOKEN** (you won't see it again!)
8. **Paste it as password** in PowerShell

✅ **Code pushed to GitHub!**

---

## 📋 Step 6: Enable GitHub Pages (1 minute)

### Enable Pages:
1. Go to your repository on GitHub
   - URL: `https://github.com/yourusername/repository-name`

2. Click **"Settings"** (top right, gear icon)

3. Click **"Pages"** (left sidebar, under "Code and automation")

4. Under **"Source"**:
   - Branch: Select **"main"**
   - Folder: Select **"/ (root)"**
   - Click **"Save"**

5. **Wait 1-2 minutes**

6. **Refresh the page**

7. You'll see a green box:
   **"Your site is live at https://yourusername.github.io/repository-name"**

✅ **Your site is LIVE!**

---

## 🎉 Your Portfolio is Now Live!

### Your URL:
- If repo name is `portfolio`: `https://yourusername.github.io/portfolio`
- If repo name is `yourusername.github.io`: `https://yourusername.github.io`

### Test Your Site:
1. Click the URL GitHub Pages shows
2. Wait 30 seconds if it shows 404
3. Your portfolio should load!
4. Test the contact form
5. Check all sections

---

## 🔄 How to Update Your Site Later

### When you make changes to your site:

```powershell
# 1. Navigate to your site folder
cd C:\Users\Rishi\site

# 2. Add changes
git add .

# 3. Commit changes
git commit -m "Updated portfolio content"

# 4. Push to GitHub
git push
```

**Your site will update automatically in 1-2 minutes!**

---

## 🐛 Troubleshooting

### Problem: Git command not found
**Solution**: 
- Close PowerShell completely
- Open a NEW PowerShell window
- Git needs a restart to work

### Problem: Permission denied (publickey)
**Solution**:
- Use HTTPS URL (not SSH)
- URL should start with `https://github.com/`
- Use Personal Access Token as password

### Problem: Site shows 404
**Solution**:
- Wait 2-3 minutes
- Check GitHub Pages is enabled
- Make sure repository is Public
- Clear browser cache

### Problem: CSS/JS not loading
**Solution**:
- Check file paths in HTML
- Make sure all files were committed
- Run `git status` to check

### Problem: Authentication failed
**Solution**:
- Create Personal Access Token (see Step 5)
- Use token as password (not your GitHub password)
- Token needs `repo` permissions

---

## 📱 After Deployment

### Share Your Portfolio:
1. **LinkedIn**: Add to "Featured" section
2. **Resume**: Add under "Projects" or "Portfolio"
3. **Email Signature**: Include your URL
4. **Twitter/X Bio**: Add your portfolio link
5. **GitHub Profile**: Pin the repository

### Update Regularly:
- Add new projects
- Update experience
- Refresh content
- Keep it current

---

## 💡 Pro Tips

1. **Custom Domain** (Optional):
   - Buy a domain or use free `.tk` from Freenom
   - Add to GitHub Pages settings
   - Update DNS records

2. **Repository Name**:
   - Use `yourusername.github.io` for cleaner URL
   - Example: `rishi.github.io` instead of `rishi.github.io/portfolio`

3. **README.md**:
   - Add a README to your repository
   - Describe your portfolio
   - Makes your GitHub profile look professional

4. **Git Workflow**:
   - Make changes locally
   - Test in browser
   - Commit and push
   - Site updates automatically

---

## 📞 Need Help?

### Git Issues:
- Git Docs: https://git-scm.com/doc
- Git Tutorial: https://try.github.io

### GitHub Issues:
- GitHub Docs: https://docs.github.com
- GitHub Support: https://support.github.com

### Deployment Issues:
- GitHub Pages Docs: https://docs.github.com/pages
- Community: https://github.community

---

## ✅ Checklist

Before you start:
- [ ] Git downloaded
- [ ] Git installed
- [ ] PowerShell ready
- [ ] GitHub account created
- [ ] Username chosen

Deployment steps:
- [ ] Repository created
- [ ] Git configured
- [ ] Files committed
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site is live!

After deployment:
- [ ] Test all sections
- [ ] Test contact form
- [ ] Share on LinkedIn
- [ ] Add to resume
- [ ] Update social media

---

## 🎊 Congratulations!

Once you complete these steps, your portfolio will be:
- ✅ Live on the internet
- ✅ Professional domain
- ✅ FREE forever
- ✅ HTTPS enabled
- ✅ Easy to update
- ✅ Ready to share!

**Your URL**: `https://yourusername.github.io/repository-name`

---

**Ready to start? Begin with Step 1: Install Git!**

*Good luck! 🚀*
