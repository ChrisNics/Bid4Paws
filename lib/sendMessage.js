const sendMessage = async ({ channelBody, messageBody }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SENDBIRD_URL}/group_channels`, {
    method: 'POST',
    body: JSON.stringify(channelBody),
    headers: {
      'Content-Type': 'application/json',
      'Api-Token': process.env.NEXT_PUBLIC_SENDBIRD_TOKEN
    }
  });

  const { channel_url } = await res.json();

  const message = await fetch(
    `${process.env.NEXT_PUBLIC_SENDBIRD_URL}/group_channels/${channel_url}/messages`,
    {
      method: 'POST',
      body: JSON.stringify(messageBody),
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': process.env.NEXT_PUBLIC_SENDBIRD_TOKEN
      }
    }
  );

  return message;
};

export default sendMessage;
