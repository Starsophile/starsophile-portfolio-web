# Free Contact Form Setup Guide

## Problem
You want to receive emails from your contact form without paying for a backend server or hosting service.

## Solution: Web3Forms (100% FREE)

**Web3Forms** is a completely free service that sends form submissions directly to your email. No credit card required!

### Features
- ✅ **FREE Forever** - 250 submissions/month
- ✅ **No Backend Needed** - Works with static sites
- ✅ **No Credit Card** - Completely free signup
- ✅ **Spam Protection** - Built-in honeypot and reCAPTCHA
- ✅ **Email Notifications** - Get emails instantly
- ✅ **Custom Redirects** - Redirect after submission

---

## Step-by-Step Setup

### Step 1: Get Your Access Key

1. Go to **https://web3forms.com**
2. Enter your email address (where you want to receive messages)
3. Click **"Create Access Key"**
4. Check your email and verify
5. Copy your **Access Key** (looks like: `a1b2c3d4-1234-5678-abcd-1234567890ab`)

### Step 2: Update Your HTML Form

Open `index.html` and find the contact form section (around line 465-485).

Replace the entire form with this:

```html
<form class="contact-form" id="contactForm" action="https://api.web3forms.com/submit" method="POST">
    <!-- Replace YOUR_ACCESS_KEY_HERE with your actual key -->
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    
    <!-- Optional: Custom subject line -->
    <input type="hidden" name="subject" value="New Contact from Portfolio">
    
    <!-- Optional: From name -->
    <input type="hidden" name="from_name" value="Portfolio Contact Form">
    
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your name">
    </div>
    
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="your.email@example.com">
    </div>
    
    <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required placeholder="Your message..."></textarea>
    </div>
    
    <!-- Honeypot for spam protection (keep this hidden) -->
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
    
    <button type="submit" class="btn btn-primary btn-full">Send Message</button>
</form>

<div class="form-success" id="formSuccess" style="display: none;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <h3>Message Sent!</h3>
    <p>Thanks for reaching out. I'll get back to you soon.</p>
</div>
```

### Step 3: Update JavaScript

Open `script.js` and replace the contact form handling section (around line 60-80) with this:

```javascript
// ===================================
// CONTACT FORM HANDLING (Web3Forms)
// ===================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });
            
            const result = await response.json();
            
            if (response.ok) {
                // Success!
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                
                // Reset form after 5 seconds
                setTimeout(() => {
                    contactForm.style.display = 'flex';
                    formSuccess.style.display = 'none';
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 5000);
            } else {
                throw new Error(result.message || 'Something went wrong');
            }
        } catch (error) {
            alert('Oops! Something went wrong. Please try again.');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}
```

### Step 4: Test It!

1. Save both files
2. Open `index.html` in your browser
3. Fill out the contact form
4. Click "Send Message"
5. Check your email inbox!

---

## Alternative Free Options

If you want other options:

### 1. **Formspree** (Free: 50 submissions/month)
- Website: https://formspree.io
- Similar setup to Web3Forms
- Good dashboard

### 2. **EmailJS** (Free: 200 emails/month)
- Website: https://www.emailjs.com
- Requires JavaScript SDK
- More complex setup

### 3. **Netlify Forms** (Free: 100 submissions/month)
- Only works if you deploy on Netlify
- Very simple setup
- Just add `netlify` attribute to form

---

## What Happens When Someone Contacts You?

1. **User fills out form** → Enters name, email, message
2. **Clicks "Send Message"** → Form submits to Web3Forms
3. **Web3Forms processes** → Validates and forwards
4. **You receive email** → Message arrives in your inbox
5. **You reply** → Respond directly from your email

## Email Format You'll Receive

```
From: noreply@web3forms.com
Subject: New Contact from Portfolio

Name: John Doe
Email: john@example.com
Message: Hi Rishi, I'd like to discuss...
```

---

## Pro Tips

### Add reCAPTCHA (Optional)
To prevent spam, add Google reCAPTCHA:

1. Get reCAPTCHA key from https://www.google.com/recaptcha
2. Add to your form:
```html
<input type="hidden" name="recaptcha_response" id="recaptchaResponse">
<script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY"></script>
```

### Custom Thank You Page
Redirect to a custom page after submission:
```html
<input type="hidden" name="redirect" value="https://yoursite.com/thank-you">
```

### Email Templates
Customize the email format in Web3Forms dashboard

---

## Troubleshooting

**❌ Not receiving emails?**
- Check spam folder
- Verify your access key is correct
- Make sure email is verified on Web3Forms

**❌ Form not submitting?**
- Check browser console for errors
- Ensure `action` URL is correct
- Verify all required fields have `name` attributes

**❌ Getting spam?**
- Enable honeypot (already included)
- Add reCAPTCHA
- Use Web3Forms spam filter

---

## Cost Comparison

| Service | Free Tier | Paid Plan |
|---------|-----------|-----------|
| Web3Forms | 250/month | $0 (always free) |
| Formspree | 50/month | $10/month |
| EmailJS | 200/month | $7/month |
| Custom Backend | N/A | $5-20/month |

**Recommendation**: Start with Web3Forms. It's free forever and 250 submissions/month is more than enough for a portfolio!

---

## Summary

1. ✅ Sign up at https://web3forms.com
2. ✅ Get your access key
3. ✅ Update HTML form with access key
4. ✅ Update JavaScript to handle submission
5. ✅ Test and receive emails!

**No backend, no hosting costs, completely FREE!** 🎉

---

Need help? Check:
- Web3Forms Docs: https://docs.web3forms.com
- Support: support@web3forms.com
