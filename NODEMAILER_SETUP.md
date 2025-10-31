# 📧 Nodemailer Setup Guide

Simple setup to make your contact form work with Gmail and Nodemailer.

## Step 1: Enable 2-Factor Authentication

1. Go to your [Google Account](https://myaccount.google.com/)
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", click "2-Step Verification"
4. Follow the steps to enable 2-factor authentication

## Step 2: Generate App Password

1. In the same "Security" section, click "2-Step Verification"
2. Scroll down and click "App passwords"
3. Select "Mail" from the dropdown
4. Click "Generate"
5. **Copy the 16-character password** (it looks like: `abcd efgh ijkl mnop`)

## Step 3: Set Environment Variables

1. Create a `.env.local` file in your project root
2. Add your Gmail credentials:

```bash
EMAIL_USER=shrmatwinkle246@gmail.com
EMAIL_PASS=your_16_character_app_password
```

**Example:**
```bash
EMAIL_USER=shrmatwinkle246@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

## Step 4: Test Your Contact Form

1. Save the `.env.local` file
2. Restart your development server: `npm run dev`
3. Go to your contact form
4. Fill out and submit a test message
5. Check your Gmail inbox for the message!

## 🎉 That's It!

Your contact form now works with Nodemailer and Gmail. When someone submits the form:

1. **You receive an email** with their message and contact details
2. **They receive a confirmation email** thanking them for reaching out
3. **You can reply directly** to their email from your Gmail

## Features

✅ **Professional Email Templates** - Beautiful HTML emails  
✅ **Automatic Confirmation** - Users get instant confirmation  
✅ **Direct Reply** - Reply directly from your Gmail  
✅ **Secure** - Uses Gmail's secure SMTP servers  
✅ **Free** - No additional costs  

## Troubleshooting

### "Authentication failed" error?
- Make sure you're using the **App Password**, not your regular Gmail password
- Double-check that 2-Factor Authentication is enabled
- Verify the email address is correct

### Not receiving emails?
- Check your spam folder
- Make sure the `.env.local` file is in the project root
- Restart your development server after adding environment variables

### Still having issues?
- Check the browser console for error messages
- Verify your Gmail settings allow "Less secure app access" (though App Passwords are preferred)

## Security Notes

- Never commit your `.env.local` file to version control
- The App Password is specific to this application
- You can revoke the App Password anytime from your Google Account settings

---

**Need help?** The contact form will show clear error messages if something goes wrong.