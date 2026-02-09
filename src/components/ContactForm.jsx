import { useState } from 'react';
import Button from './Button';
import './ContactForm.css';

const initial = { name: '', contact: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.contact.trim()) next.contact = 'Phone or email is required';
    if (form.contact && !/^(\+?[\d\s()-]{7,}|\S+@\S+\.\S+)$/.test(form.contact)) next.contact = 'Enter a valid phone or email';
    if (!form.message.trim()) next.message = 'Message is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    setSuccess('');
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSuccess('Thanks! Your quote request has been received.');
    setForm(initial);
  };

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <label>Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={!!errors.name} /></label>
      {errors.name && <span className="error">{errors.name}</span>}
      <label>Phone or Email<input value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} aria-invalid={!!errors.contact} /></label>
      {errors.contact && <span className="error">{errors.contact}</span>}
      <label>Message<textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} aria-invalid={!!errors.message} /></label>
      {errors.message && <span className="error">{errors.message}</span>}
      <Button type="submit" disabled={submitting}>{submitting ? 'Sending request…' : 'Send Request'}</Button>
      {success && <p className="success" role="status">{success}</p>}
    </form>
  );
}
