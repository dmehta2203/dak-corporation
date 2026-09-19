import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim()
        : "";

    const company =
      typeof body.company === "string"
        ? body.company.trim()
        : "";

    const reason =
      typeof body.reason === "string"
        ? body.reason.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (!name) {
      return NextResponse.json(
        {
          error: "Name is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          error: "Email is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    if (!reason) {
      return NextResponse.json(
        {
          error: "Please select a reason for contacting.",
        },
        {
          status: 400,
        }
      );
    }

    if (!message) {
      return NextResponse.json(
        {
          error: "Message is required.",
        },
        {
          status: 400,
        }
      );
    }

    const contactEmail = process.env.DAK_CONTACT_EMAIL;

    if (!contactEmail) {
      console.error("DAK_CONTACT_EMAIL is missing.");

      return NextResponse.json(
        {
          error:
            "Contact email is not configured on the server.",
        },
        {
          status: 500,
        }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          error:
            "Email service is not configured on the server.",
        },
        {
          status: 500,
        }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeReason = escapeHtml(reason);
    const safeMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      from: "DAK Corporation <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `New DAK website enquiry — ${name}`,
      html: `
        <div
          style="
            margin: 0;
            padding: 40px 20px;
            background: #f8fafc;
            font-family: Arial, Helvetica, sans-serif;
            color: #0f172a;
          "
        >
          <div
            style="
              max-width: 680px;
              margin: 0 auto;
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 18px;
              overflow: hidden;
            "
          >
            <div
              style="
                padding: 28px 32px;
                background: #050507;
                color: #ffffff;
              "
            >
              <h1
                style="
                  margin: 0;
                  font-size: 24px;
                  letter-spacing: 1px;
                "
              >
                DAK CORPORATION
              </h1>

              <p
                style="
                  margin: 8px 0 0;
                  color: #a78bfa;
                  font-size: 13px;
                "
              >
                New website enquiry
              </p>
            </div>

            <div style="padding: 32px;">
              <div
                style="
                  margin-bottom: 24px;
                  padding: 18px;
                  background: #f8fafc;
                  border: 1px solid #e2e8f0;
                  border-radius: 12px;
                "
              >
                <p
                  style="
                    margin: 0 0 8px;
                    font-size: 12px;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                  "
                >
                  Contact details
                </p>

                <p style="margin: 6px 0;">
                  <strong>Name:</strong> ${safeName}
                </p>

                <p style="margin: 6px 0;">
                  <strong>Email:</strong> ${safeEmail}
                </p>

                <p style="margin: 6px 0;">
                  <strong>Company:</strong> ${safeCompany}
                </p>

                <p style="margin: 6px 0;">
                  <strong>Reason:</strong> ${safeReason}
                </p>
              </div>

              <div>
                <p
                  style="
                    margin: 0 0 10px;
                    font-size: 12px;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                  "
                >
                  Message
                </p>

                <div
                  style="
                    padding: 18px;
                    background: #fafafa;
                    border-left: 3px solid #8b5cf6;
                    border-radius: 8px;
                    line-height: 1.7;
                    white-space: pre-wrap;
                  "
                >
                  ${safeMessage}
                </div>
              </div>

              <div
                style="
                  margin-top: 30px;
                  padding-top: 20px;
                  border-top: 1px solid #e2e8f0;
                "
              >
                <p
                  style="
                    margin: 0;
                    font-size: 12px;
                    color: #64748b;
                  "
                >
                  Replying to this email will reply directly to
                  ${safeEmail}.
                </p>
              </div>
            </div>

            <div
              style="
                padding: 20px 32px;
                background: #f8fafc;
                border-top: 1px solid #e2e8f0;
              "
            >
              <p
                style="
                  margin: 0;
                  font-size: 12px;
                  color: #64748b;
                "
              >
                Sent from the official DAK Corporation website.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend contact form error:", error);

      return NextResponse.json(
        {
          error:
            error.message ||
            "Unable to send your message.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully.",
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("DAK contact form error:", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong while sending your message.",
      },
      {
        status: 500,
      }
    );
  }
}