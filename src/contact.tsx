import { Hono } from 'hono'
import {Resend} from 'resend';
import ContactEmail from './emails/contact-email';

export type Env = {
    RESEND_API_KEY: string
};

const app = new Hono<{ Bindings: Env }>()

app.post('/', async (c) => {
    const resend = new Resend(c.env.RESEND_API_KEY);
    const data = await c.req.json<reqData>();

    type reqData = {
        name: string;
        email: string;
        message: string;
        contactMethod?: string;
    };

    if (!data.name || !data.email || !data.message) {
        return c.json({ error: 'Missing required fields' }, 400);
    }

    await resend.emails.send({
        from: data.name + '<contact@rorystock.com>',
        to: 'rorystock06@gmail.com',
        subject: 'New message from ' + data.name,
        react: <ContactEmail data={data} />,
    });

    return c.json(data);
});

export default app
