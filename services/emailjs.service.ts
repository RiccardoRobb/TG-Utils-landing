

export async function send(
    yourname: string,
    to_name: string,
    message: string,
    email: string,
    costumer: string
    ) {
    
        const data = {
            service_id: 'service_tg',
            template_id: 'template_o4qc0a6',
            user_id: 'tCMX0X3AI6SwTnGZs',
            template_params: {
                from_name: yourname,
                to_name: to_name,
                message: message,
                email: email,
                costumer: costumer
            }
        };

        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }
    )
    if (await res.text() === 'OK') {
        return res;
    } else {
        throw new Error('error sending email')
    }
}

