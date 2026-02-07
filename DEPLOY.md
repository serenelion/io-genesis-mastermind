# Deployment Guide

## ✅ What's Complete

### Repository
- ✅ GitHub repo created: https://github.com/serenelion/io-genesis-mastermind
- ✅ Code pushed to `main` branch
- ✅ Clean commit history initialized

### Marketing Website
- ✅ Simplified UX copy with clear brand script
- ✅ New hero: "Upgrade Your Human Experience"
- ✅ Persistent header with "Apply to Join" button
- ✅ Primary CTA: "Apply to Join" (scrolls to form)
- ✅ Secondary CTA: "Subscribe for future event invitations" (footer)
- ✅ Simplified form button: "Submit Application"
- ✅ Newsletter subscription in footer
- ✅ Eco-luxury design system (light, warm, breathable)
- ✅ Netlify Forms configured (no backend required)

### Forms
Two forms configured with Netlify Forms + honeypot spam protection:

1. **Genesis Application** (`name="genesis-application"`)
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Dream manifestation question (required)

2. **Newsletter** (`name="newsletter"`)
   - Email (required)

## 🚀 Deploy to Netlify

### Option 1: Netlify Web UI (Recommended)
1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Select the `io-genesis-mastermind` repository
5. Configure build settings:
   - **Build command**: (leave empty)
   - **Publish directory**: `.` (root directory)
6. Click "Deploy site"
7. Wait 1-2 minutes for deployment
8. Your site will be live at: `https://[random-name].netlify.app`

### Option 2: Netlify CLI
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Navigate to website directory
cd ~/Documents/integrative-organizing-mastermind/website

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Follow prompts:
# - Create & configure a new site
# - Choose your team
# - Site name: genesis-event (or custom)
# - Build command: (leave empty)
# - Publish directory: .

# Deploy to production
netlify deploy --prod
```

## 📋 Post-Deployment Checklist

### 1. Custom Domain (Optional)
If you have a custom domain:
1. Go to Site settings → Domain management
2. Add custom domain (e.g., `genesis.terralux.org` or `genesis-event.com`)
3. Configure DNS:
   - **CNAME record**: `subdomain` → `[site-name].netlify.app`
   - OR **A record**: `@` → Netlify's load balancer IP
4. Enable HTTPS (automatic with Netlify)

### 2. Forms Setup
After first deployment:
1. Go to Site settings → Forms
2. Confirm both forms are detected:
   - `genesis-application`
   - `newsletter`
3. Configure form notifications:
   - Email notifications to: `genesis@terralux.org`
   - Optional: Slack/Discord webhook for instant alerts

### 3. Test Forms
1. Visit your live site
2. Submit test application (use test email)
3. Submit test newsletter signup
4. Check Netlify dashboard → Forms → Submissions
5. Verify email notifications arrive at `genesis@terralux.org`

### 4. Analytics (Optional but Recommended)
Add to Netlify:
- **Netlify Analytics**: Built-in, privacy-friendly ($9/month)
- **Google Analytics**: Free, add GA4 tag to `<head>`
- **Plausible/Fathom**: Privacy-focused alternatives

## 🧪 Local Testing

The website is currently running locally at:
```
http://localhost:8080
```

To restart local server:
```bash
cd ~/Documents/integrative-organizing-mastermind/website
python3 -m http.server 8080
```

**Note**: Netlify Forms won't work locally. They only work on deployed Netlify sites.

## 🎨 Making Updates

### Content Changes
1. Edit `index.html` directly
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: [describe change]"
   git push origin main
   ```
3. Netlify auto-deploys in ~30 seconds

### Design Changes
1. Edit `src/styles/eco-luxury.css`
2. Test locally at http://localhost:8080
3. Commit and push (same as above)

## 📧 Form Submissions Management

### View Submissions
1. Log into Netlify dashboard
2. Go to your site → Forms
3. Click form name (`genesis-application` or `newsletter`)
4. View all submissions with export options

### Export Data
- CSV export available for all form submissions
- Integrate with Zapier/Make.com for automatic CRM sync

### Spam Protection
- Honeypot fields included (bots fill hidden fields)
- Netlify's built-in spam filtering
- Manual moderation available in dashboard

## 🔒 Security & Privacy

### SSL/HTTPS
- ✅ Automatic with Netlify (Let's Encrypt)
- ✅ Forced HTTPS redirect

### Form Data
- Stored securely on Netlify servers
- GDPR compliant
- Can be deleted manually from dashboard

### Environment Variables
Not needed for this static site, but available if you add API integrations later.

## 📞 Support

**Technical Issues:**
- Netlify docs: https://docs.netlify.com
- Netlify support: https://answers.netlify.com

**Content Questions:**
- genesis@terralux.org

## 🎯 Next Steps

1. Deploy to Netlify (see Option 1 above)
2. Configure form notifications to `genesis@terralux.org`
3. Test both forms thoroughly
4. Add custom domain (if applicable)
5. Launch marketing campaign!

---

**Repository**: https://github.com/serenelion/io-genesis-mastermind  
**Local Preview**: http://localhost:8080  
**Ready to deploy**: Yes ✅
