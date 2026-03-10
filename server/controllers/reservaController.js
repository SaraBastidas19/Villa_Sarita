import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, '..', 'data', 'reservas.json');

const requiredFields = ['name', 'email', 'phone', 'visitDate', 'guests'];

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const createReserva = async (req, res, next) => {
  try {
    const payload = {
      name: req.body.name ?? req.body.nombre,
      email: req.body.email,
      phone: req.body.phone ?? req.body.telefono,
      visitDate: req.body.visitDate ?? req.body.fechaLlegada,
      guests: req.body.guests ?? req.body.personas,
      message: req.body.message ?? req.body.comentarios ?? ''
    };

    for (const field of requiredFields) {
      if (!payload[field]) {
        return res.status(400).json({ message: `El campo ${field} es obligatorio` });
      }
    }

    if (!isValidEmail(String(payload.email))) {
      return res.status(400).json({ message: 'Email inválido' });
    }

    if (Number(payload.guests) < 1) {
      return res.status(400).json({ message: 'El número de huéspedes debe ser mayor a 0' });
    }

    const reserva = {
      name: String(payload.name).trim(),
      email: String(payload.email).trim(),
      phone: String(payload.phone).trim(),
      visitDate: payload.visitDate,
      guests: Number(payload.guests),
      message: payload.message ? String(payload.message).trim() : '',
      createdAt: new Date().toISOString()
    };

    const content = await fs.readFile(dataFile, 'utf-8');
    const reservas = JSON.parse(content);
    reservas.push(reserva);
    await fs.writeFile(dataFile, JSON.stringify(reservas, null, 2));

    return res.status(201).json({ message: 'Reserva creada correctamente', reserva });
  } catch (error) {
    return next(error);
  }
};
