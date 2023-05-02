const sendEmail = async (values, template, publicKey) => {
  return await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    // sending the email
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      service_id: 'service_1ddhr4x',
      template_id: template,
      user_id: publicKey,
      template_params: values
    })
  });
};

export default sendEmail;
