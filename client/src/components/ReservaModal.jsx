import ReservationForm from './ReservationForm';

function ReservaModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-soft md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-bosque">Reserva tu experiencia</h2>
          <button type="button" onClick={onClose} className="text-stone-500 hover:text-stone-700">
            Cerrar
          </button>
        </div>

        <ReservationForm />
      </div>
    </div>
  );
}

export default ReservaModal;
