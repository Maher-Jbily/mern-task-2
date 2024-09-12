import './ContactForm.css'

export default function ContactForm() {
  return (
    <form className='com-form'>
        <span className='form-span'>
            <label >Full Name</label>
            <input type="text" placeholder='Your Name...'/>
        </span>
        <span className='form-span'>
            <label >Email Address</label>
            <input type="email" placeholder='Your E-mail...'/>
        </span>
        <span className='form-span'>
            <label >Subject</label>
            <input type="text"placeholder='Subject...' />
        </span>
        <span className='form-span'>
            <label >Message</label>
            <textarea placeholder='Message...'></textarea>
        </span>
        <button className='form-but'>Send Message</button>
    </form>
  )
}
