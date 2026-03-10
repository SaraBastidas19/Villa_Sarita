import { useState } from 'react';
import { createReservation } from '../services/api';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  visitDate: '',
  guests: 1,
  message: ''
};

function ReservationForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setFeedback('');

    try {
      await createReservation(form);
      setFeedback('Reserva enviada con éxito. Te contactaremos pronto.');
      setForm(initialForm);
    } catch (error) {
      setFeedback(error.response?.data?.message || 'No fue posible enviar la reserva. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
        <input className="input" name="name" placeholder="Name" value={form.name} onChange={onChange} required />
        <input className="input" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
        <input className="input" name="phone" placeholder="Phone" value={form.phone} onChange={onChange} required />
        <input className="input" name="guests" type="number" min="1" max="20" value={form.guests} onChange={onChange} required />
        <input
          className="input md:col-span-2"
          name="visitDate"
          type="date"
          value={form.visitDate}
          onChange={onChange}
          required
        />

        <textarea
          className="input md:col-span-2"
          name="message"
          rows="4"
          placeholder="Message"
          value={form.message}
          onChange={onChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 rounded-full bg-bosque px-6 py-3 font-semibold text-white transition hover:bg-hoja disabled:opacity-60"
        >
          {loading ? 'Enviando...' : 'Enviar reserva'}
        </button>
      </form>

      {feedback && <p className="mt-4 text-sm text-stone-700">{feedback}</p>}
    </>
  );
}

export default ReservationForm;
