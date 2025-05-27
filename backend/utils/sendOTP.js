const nodemailer = require("nodemailer");

const sendOTP = async (email, otp) => {
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
    subject: "🔐 Verify Your Email - OTP Code Inside",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style type="text/css">
          /* IBM/Google-inspired animations */
          @keyframes materialEnter {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
          }
          @keyframes ripple {
            0% { transform: scale(0.8); opacity: 0.6; }
            100% { transform: scale(2.5); opacity: 0; }
          }
          @keyframes wave {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          .animated {
            animation-duration: 0.6s;
            animation-fill-mode: both;
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          .material-enter { animation-name: materialEnter; }
          .float { animation: float 3s ease-in-out infinite; }
          .delay-1 { animation-delay: 0.1s; }
          .delay-2 { animation-delay: 0.2s; }
          .delay-3 { animation-delay: 0.3s; }
          
          /* IBM-inspired design elements */
          .ripple-container {
            position: relative;
            display: inline-block;
            overflow: hidden;
            border-radius: 50%;
          }
          .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(76, 175, 80, 0.3);
            transform: scale(0);
            pointer-events: none;
          }
          .wave-underline {
            position: relative;
            display: inline-block;
          }
          .wave-underline:after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #4CAF50, transparent);
            transform: translateX(-100%);
          }
          .wave-underline:hover:after {
            animation: wave 1.5s linear infinite;
          }
        </style>
      </head>
      <body style="font-family: 'Google Sans', Arial, sans-serif; margin: 0; padding: 0; background-color: #f8f9fa;">
        <div style="max-width: 600px; margin: 20px auto; padding: 0 10px;">
          <div style="background-color: white; border-radius: 8px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            <!-- IBM-style header with subtle animation -->
            <div class="animated material-enter" style="text-align: center; margin-bottom: 30px;">
              <div class="ripple-container" style="width: 80px; height: 80px; margin: 0 auto; background-color: #f1f8e9; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#4CAF50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CAF50" stroke-width="2"/>
                  <path d="M12 8V12" stroke="#4CAF50" stroke-width="2" stroke-linecap="round"/>
                  <path d="M12 16H12.01" stroke="#4CAF50" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <div class="ripple-effect"></div>
              </div>
            </div>
            
            <h1 class="animated material-enter delay-1" style="color: #202124; text-align: center; margin-bottom: 20px; font-weight: 500;">Email Verification Required</h1>
            
            <p class="animated material-enter delay-2" style="color: #5f6368; line-height: 1.6; margin-bottom: 25px; text-align: center; font-size: 15px;">
              To complete your sign up, please enter this verification code when prompted:
            </p>
            
            <!-- Google-style OTP box with floating animation -->
            <div class="animated material-enter delay-3 float" style="background-color: #f1f8e9; border-radius: 8px; padding: 20px; margin: 30px auto; text-align: center; max-width: 300px; border-left: 4px solid #4CAF50;">
              <div style="font-size: 32px; font-weight: 500; color: #202124; letter-spacing: 5px; font-family: 'Roboto Mono', monospace;">
                ${otp}
              </div>
              <div style="font-size: 13px; color: #5f6368; margin-top: 8px;">
                Valid for 10 minutes
              </div>
            </div>
            
            <p class="animated material-enter delay-1" style="color: #5f6368; line-height: 1.6; margin-bottom: 25px; text-align: center; font-size: 14px;">
              If you didn't request this code, you can safely ignore this email.
            </p>
            
            <!-- IBM-style footer with subtle hover effects -->
            <div class="animated material-enter delay-2" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
              <p style="color: #5f6368; font-size: 14px; margin-bottom: 5px;">Need help?</p>
              <a href="#" class="wave-underline" style="color: #4CAF50; text-decoration: none; font-weight: 500;">Contact our support team</a>
              <p style="color: #9aa0a6; font-size: 12px; margin-top: 20px;">
                © ${new Date().getFullYear()} Authify. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
        <script>
          // Simple script to trigger ripple effect (works in some email clients)
          document.addEventListener('DOMContentLoaded', function() {
            const rippleContainers = document.querySelectorAll('.ripple-container');
            rippleContainers.forEach(container => {
              container.addEventListener('click', function(e) {
                const ripple = this.querySelector('.ripple-effect');
                if (ripple) {
                  ripple.style.left = (e.pageX - this.getBoundingClientRect().left - this.offsetWidth / 2) + 'px';
                  ripple.style.top = (e.pageY - this.getBoundingClientRect().top - this.offsetHeight / 2) + 'px';
                  ripple.style.width = this.offsetWidth + 'px';
                  ripple.style.height = this.offsetHeight + 'px';
                  ripple.style.animation = 'ripple 0.6s linear';
                  setTimeout(() => {
                    ripple.style.animation = 'none';
                  }, 600);
                }
              });
            });
          });
        </script>
      </body>
      </html>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendOTP;