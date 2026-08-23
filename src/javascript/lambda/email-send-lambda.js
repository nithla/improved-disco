const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const ses = new SESClient({ region: 'ap-southeast-2' });

exports.handler = async (event) => {
        const { name, email, message } = event;
    const params = {
        Destination: {
            ToAddresses: ['nithilareddygaddam@gmail.com']
        },
        Message: {
            Body: {
                Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` }
            },
            Subject: { Data: 'Contact from Website' }
        },
        Source: 'nithilareddygaddam@gmail.com'
    };

    try {
        const command = new SendEmailCommand(params);
        await ses.send(command);
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type"
            },
            body: ({ message: 'Email sent successfully' })
        };
    } 
    catch (error) {
        console.error('Error sending email:', error.message);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type"
            },
            body: JSON.stringify({ error: error.message })
        };
    }
};