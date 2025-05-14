import React from 'react'; // Import React
import TextField from '@mui/material/TextField'; // Komponen input teks dari Material UI
import useInputState from '../hooks/useInputState'; // Custom hook untuk mengelola state input

// Komponen TodoForm menerima props: saveTodo (fungsi untuk menyimpan todo baru)
const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();
  // Menggunakan custom hook untuk mengelola state input
  // value: nilai saat ini dari input
  // reset: fungsi untuk mereset nilai input
  // onChange: handler untuk mengubah nilai input

  return (
    <form
      onSubmit={event => { // Event handler ketika form disubmit
        event.preventDefault(); // Mencegah reload halaman bawaan form

        saveTodo(value); // Memanggil fungsi saveTodo dengan nilai input
        reset(); // Mereset input kembali ke string kosong
      }}
    >
      <TextField
        variant="outlined" // Gaya field menjadi berbatas kotak
        placeholder="Add todo" // Placeholder di input
        margin="normal" // Margin default
        onChange={onChange} // Handler untuk mengubah nilai input
        value={value} // Nilai input saat ini dari state
      />
    </form>
  );
};

export default TodoForm; // Mengekspor komponen agar bisa digunakan di file lain