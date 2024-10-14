import { Hono } from 'hono'
import contact from './resend/contact'

const app = new Hono()

app.route('/contact', contact)

export default app
