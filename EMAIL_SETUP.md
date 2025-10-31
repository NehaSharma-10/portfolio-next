# Email Setup Guide for Contact Form

This guide provides multiple options to set up the contact form email functionality.

## Option 1: Resend (Recommended - Server-side)

Resend is a modern email API that's easy to set up and reliable.

### Setup Steps:

1. **Sign up at [Resend](https://resend.com/)**
2. **Get your API key** from the dashboard
3. **Add to environment variables:**
   ```bash
   RESEND_API_KEY=your_api_key_here
   ```
4. **Update the domain** in `app/api/contact/route.js`:
   ```javascript
   from: 'Portfolio Contact <noreply@yourdomain.com>'
   ```

### Pros:
- ✅ Server-side (secure)
- ✅ Professional email delivery
- ✅ Good deliverability rates
- ✅ Free tier available

### Cons:
- ❌ Requires domain setup for production
- ❌ Need to configure DNS records

---

## Option 2: EmailJS (Easiest - Client-side)

EmailJS allows sending emails directly from the frontend without a backend.

### Setup Steps:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template**
4. **Get your credentials:**
   - Service ID
   - Template ID  
   - Public Key
5. **Update `app/lib/emailjs-config.js`** with your credentials
6. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```
7. **Update ContactMe component** to use EmailJS instead of API route

### EmailJS Template Example:
```
Subject: New Portfolio Contact from {{from_name}}

Hi Neha,

New message from your portfolio:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

Reply to: {{from_email}}
```

### Pros:
- ✅ Very easy to set up
- ✅ No backend required
- ✅ Works immediately
- ✅ Free tier available

### Cons:
- ❌ Client-side (less secure)
- ❌ API keys visible in frontend
- ❌ Rate limiting

---

## Option 3: Gmail + Nodemailer (Traditional)

Use Gmail SMTP with Nodemailer for server-side email sending.

### Setup Steps:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Install nodemailer:**
   ```bash
   npm install nodemailer
   ```
4. **Add environment variables:**
   ```bash
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_16_character_app_password
   ```
5. **Update API route** to use Nodemailer instead of Resend

### Pros:
- ✅ Server-side (secure)
- ✅ Uses your existing Gmail
- ✅ Free
- ✅ Reliable

### Cons:
- ❌ More complex setup
- ❌ Gmail daily sending limits
- ❌ Less professional than dedicated service

---

## Quick Start (EmailJS - Recommended for beginners)

For the fastest setup, use EmailJS:

1. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

2. **Update ContactMe component:**
   ```javascript
   import emailjs from '@emailjs/browser';
   import { emailJSConfig } from '../lib/emailjs-config';

   const handleSubmit = async (e) => {
     e.preventDefault();
     setIsSubmitting(true);

     try {
       await emailjs.send(
         emailJSConfig.serviceId,
         emailJSConfig.templateId,
         {
           from_name: formData.name,
           from_email: formData.email,
           subject: formData.subject,
           message: formData.message,
           to_name: 'Neha Sharma',
         },
         emailJSConfig.publicKey
       );

       setIsSubmitted(true);
       setFormData({ name: '', email: '', subject: '', message: '' });
     } catch (error) {
       setError('Failed to send message. Please try again.');
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

3. **Configure your EmailJS credentials** in `app/lib/emailjs-config.js`

---

## Environment Variables

Create a `.env.local` file in your project root:

```bash
# For Resend
RESEND_API_KEY=your_resend_api_key

# For Gmail + Nodemailer  
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# For EmailJS (optional - can be in config file)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Testing

1. **Development:** Test with console.log to see form data
2. **Production:** Use a test email to verify delivery
3. **Spam Check:** Check spam folders during testing
4. **Rate Limits:** Test multiple submissions

---

## Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Check API keys/credentials
   - Verify environment variables are loaded

2. **Emails not received**
   - Check spam folder
   - Verify email addresses
   - Check service status

3. **CORS errors (EmailJS)**
   - Add your domain to EmailJS dashboard
   - Check public key configuration

4. **Rate limiting**
   - Implement client-side rate limiting
   - Add server-side validation

---

Choose the option that best fits your needs and technical comfort level!