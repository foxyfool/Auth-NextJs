import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Two-Factor Code",
    html: `<div style="text-align: center; background-color: #F0F8FF; padding: 20px; border-radius: 5px;"> <p style="color: #007BFF; font-size: 18px;">Your Two-Factor Authentication code on 🔐Identity is:  ${token}</p></div>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your Password",
    html: `<div style="text-align: center; background-color: #F0F8FF; padding: 20px; border-radius: 5px;"> <p style="color: #007BFF; font-size: 18px;">Forgot your password on 🔐Identity? No worries , Simply reset your password  <a href="${resetLink}"> Here! </a></p></div>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confrim your email",
    html: `<div style="text-align: center; background-color: #F0F8FF; padding: 20px; border-radius: 5px;"> <p style="color: #007BFF; font-size: 18px;">Thanks for signing up on  🔐Identity! Please verify your email  <a href="${confirmLink}"> Here! </a></p></div>`,
  });
};
