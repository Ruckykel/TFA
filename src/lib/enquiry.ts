/**
 * Sends a project enquiry through Web3Forms. Shared by the "Start a Project"
 * modal and the contact page so both land in the same inbox the same way.
 * Resolves true on success, false on any failure.
 */
export async function sendEnquiry(fields: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  /** Extra details, sent as their own fields in the notification email. */
  [extra: string]: string | undefined;
}): Promise<boolean> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
        from_name: "TFA Studios Website",
        ...fields,
        subject: fields.subject || "New Contact Form Submission",
      }),
    });
    const result = await response.json();
    return Boolean(result.success);
  } catch {
    return false;
  }
}
