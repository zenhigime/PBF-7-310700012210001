import { useState } from 'react'; // Mengimpor useState dari React untuk mengelola state

// Custom hook tanpa nama (anonymous default export)
export default () => {
  const [value, setValue] = useState(''); // Mendeklarasikan state 'value' dengan nilai awal string kosong

  return {
    value, // Nilai saat ini dari input

    // Handler untuk mengubah nilai input berdasarkan event
    onChange: event => {
      setValue(event.target.value); // Mengubah nilai state sesuai dengan input pengguna
    },

    // Fungsi untuk mereset nilai input kembali ke string kosong
    reset: () => setValue('')
  };
};
