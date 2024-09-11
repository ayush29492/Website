exports.handler = async () => {
  try {
    const rawResponse = await fetch('https://api.notion.com/v1/databases/871802c3c1bf43aab97795626d4dbd87/query', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer secret_p1lgOW4I19gDNJWYnWs0jtHR2grKLfVDCTWtH49bt2W',
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify()
    });

    const content = await rawResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify(content),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
