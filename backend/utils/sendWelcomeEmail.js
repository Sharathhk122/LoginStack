const nodemailer = require("nodemailer");

const sendWelcomeEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Authify Team" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "🎉 Welcome to Authify! Your Account Is Ready",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style type="text/css">
          /* Google/IBM-inspired animations */
          @keyframes materialScale {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes dash {
            to { stroke-dashoffset: 0; }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .animated {
            animation-duration: 0.6s;
            animation-fill-mode: both;
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          .material-scale { animation-name: materialScale; }
          .fade-in-up { animation-name: fadeInUp; }
          .delay-1 { animation-delay: 0.1s; }
          .delay-2 { animation-delay: 0.2s; }
          .delay-3 { animation-delay: 0.3s; }
          
          /* Google-style design elements */
          .checkmark-circle {
            stroke-dasharray: 166;
            stroke-dashoffset: 166;
            animation: dash 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
          }
          .checkmark {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            display: inline-block;
            stroke-width: 2;
            stroke: #4CAF50;
            stroke-miterlimit: 10;
            box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
          }
          .checkmark-check {
            transform-origin: 50% 50%;
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            animation: dash 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
          }
          .rotate {
            animation: rotate 2s linear infinite;
          }
          .card-hover {
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .card-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          }
        </style>
      </head>
      <body style="font-family: 'Google Sans', Arial, sans-serif; margin: 0; padding: 0; background-color: #f8f9fa;">
        <div style="max-width: 600px; margin: 20px auto; padding: 0 10px;">
          <div class="card-hover" style="background-color: white; border-radius: 8px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            <!-- Google-style checkmark animation -->
            <div class="animated material-scale" style="text-align: center; margin-bottom: 30px;">
              <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
            
            <h1 class="animated fade-in-up delay-1" style="color: #202124; text-align: center; margin-bottom: 20px; font-weight: 500;">Welcome to Authify!</h1>
            
            <p class="animated fade-in-up delay-2" style="color: #5f6368; line-height: 1.6; margin-bottom: 15px; text-align: center; font-size: 15px;">
              Your account has been successfully verified and is ready to use.
            </p>
            
            <p class="animated fade-in-up delay-2" style="color: #5f6368; line-height: 1.6; margin-bottom: 25px; text-align: center; font-size: 15px;">
              We're excited to have you join our community of users who value security and simplicity.
            </p>
            
            <!-- IBM-style action card -->
            <div class="animated fade-in-up delay-3" style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 30px 0; text-align: center;">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#4CAF50" style="margin-bottom: 10px;">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              <h3 style="color: #202124; font-weight: 500; margin-bottom: 10px;">Next Steps</h3>
              <p style="color: #5f6368; font-size: 14px; margin-bottom: 15px;">
                Explore our documentation to get the most out of Authify.
              </p>
              <a href="#" style="display: inline-block; background-color: #4CAF50; color: white; padding: 10px 20px; border-radius: 4px; text-decoration: none; font-weight: 500; font-size: 14px; transition: background-color 0.3s;">
                View Documentation
              </a>
            </div>
            
            <!-- Google-style footer -->
            <div class="animated fade-in-up delay-2" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
              <p style="color: #5f6368; font-size: 14px; margin-bottom: 5px;">Have questions?</p>
              <a href="#" style="color: #4CAF50; text-decoration: none; font-weight: 500;">Contact our support team</a>
              <p style="color: #9aa0a6; font-size: 12px; margin-top: 20px;">
                © ${new Date().getFullYear()} Authify. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
        <script>
          // Simple animation trigger (works in some email clients)
          document.addEventListener('DOMContentLoaded', function() {
            const checkmark = document.querySelector('.checkmark');
            if (checkmark) {
              setTimeout(() => {
                checkmark.classList.add('rotate');
                setTimeout(() => {
                  checkmark.classList.remove('rotate');
                }, 2000);
              }, 1000);
            }
          });
        </script>
      </body>
      </html>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendWelcomeEmail;