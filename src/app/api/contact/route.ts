import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      formType,
      name,
      fullName,
      email,
      phone,
      mobile,
      mobileNumber,
      course,
      interestedIn,
      city,
      qualification,
      experience,
      jobRef,
      resume,
      message,
      contactTime,
      mode,
    } = body;

    const applicantName = name || fullName || "Valued Prospect";
    const applicantEmail = email || "Not Provided";
    const applicantPhone = phone || mobile || mobileNumber || "Not Provided";
    const submissionType = formType || "Enquiry Form";
    const subjectTitle = `[NEXZEN WEBSITE] New ${submissionType} from ${applicantName}`;

    // SMTP Transporter configuration
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER || "bankasiva2002@gmail.com";
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || "bankasiva2002@gmail.com";

    // Format all submitted data into a clean HTML email template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #091F38 0%, #0066FF 50%, #C69214 100%); padding: 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px;">NEXZEN ASSET</h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">New ${submissionType} Submission Received</p>
        </div>

        <div style="padding: 24px; color: #09101D;">
          <div style="background: #f4f7fb; border-left: 4px solid #0066FF; padding: 12px 16px; margin-bottom: 20px; border-radius: 4px;">
            <strong style="color: #0066FF; font-size: 14px; text-transform: uppercase;">Submission Details (${submissionType})</strong>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #2d3748;">
            ${applicantName ? `<tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px 0; font-weight: bold; width: 35%;">Full Name:</td><td style="padding: 10px 0;">${applicantName}</td></tr>` : ""}
            ${applicantEmail ? `<tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px 0; font-weight: bold;">Email Address:</td><td style="padding: 10px 0;"><a href="mailto:${applicantEmail}" style="color: #0066FF; font-weight: bold;">${applicantEmail}</a></td></tr>` : ""}
            ${applicantPhone ? `<tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px 0; font-weight: bold;">Phone / Mobile:</td><td style="padding: 10px 0;"><a href="tel:${applicantPhone}" style="color: #0066FF; font-weight: bold;">${applicantPhone}</a></td></tr>` : ""}
            ${city ? `<tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px 0; font-weight: bold;">City:</td><td style="padding: 10px 0;">${city}</td></tr>` : ""}
            ${course || interestedIn ? `<tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px 0; font-weight: bold;">Program / Course:</td><td style="padding: 10px 0;">${course || interestedIn}</td></tr>` : ""}
            ${qualification ? `<tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px 0; font-weight: bold;">Qualification:</td><td style="padding: 10px 0;">${qualification}</td></tr>` : ""}
            ${experience ? `<tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px 0; font-weight: bold;">Experience:</td><td style="padding: 10px 0;">${experience}</td></tr>` : ""}
            ${mode ? `<tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px 0; font-weight: bold;">Preferred Mode:</td><td style="padding: 10px 0;">${mode}</td></tr>` : ""}
            ${contactTime ? `<tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px 0; font-weight: bold;">Contact Time:</td><td style="padding: 10px 0;">${contactTime}</td></tr>` : ""}
            ${jobRef ? `<tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px 0; font-weight: bold;">Job Reference ID:</td><td style="padding: 10px 0; font-weight: bold; color: #0066FF;">${jobRef}</td></tr>` : ""}
            ${resume ? `<tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px 0; font-weight: bold;">Resume Link:</td><td style="padding: 10px 0;"><a href="${resume}" target="_blank" style="color: #0066FF; font-weight: bold;">View Resume</a></td></tr>` : ""}
            ${message ? `<tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message / Query:</td><td style="padding: 10px 0;">${message}</td></tr>` : ""}
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096; text-align: center;">
            This email notification was dispatched directly to <strong>bankasiva2002@gmail.com</strong> by the NexZen Asset web portal.
          </div>
        </div>
      </div>
    `;

    // Send email via Nodemailer if SMTP pass exists
    if (user && pass && pass !== "your-gmail-app-password") {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
        from: `"NexZen Portal" <${user}>`,
        to: receiver,
        replyTo: applicantEmail !== "Not Provided" ? applicantEmail : user,
        subject: subjectTitle,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, message: `Email sent to ${receiver} successfully!` });
    } else {
      // Console log backup for dev mode
      console.log(`[NEXZEN FORM -> ${receiver}]`);
      console.log("Subject:", subjectTitle);
      console.log("Submitted Data:", body);

      return NextResponse.json({
        success: true,
        message: `Form data dispatched to ${receiver}`,
        data: body,
      });
    }
  } catch (error: any) {
    console.error("Nodemailer API error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to process form submission" },
      { status: 500 }
    );
  }
}
