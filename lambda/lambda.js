const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const ses = new SESClient({ region: 'ap-southeast-2' });
exports.handler = async (event) => {
    const params = {
        Destination: {
            ToAddresses: ['nithilareddygaddam@gmail.com']
        },
        Message: {
            Body: {
                Text: {
                    Data: 'This is a test email sent from AWS Lambda.'
                }
            },
            Subject: {
                Data: 'Contact from Website'
            }
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
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    }
    catch (error) {
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



