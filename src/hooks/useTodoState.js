import { useState } from 'react'; // Mengimpor hook useState dari React untuk mengelola state 

export default initialValue => { // Mendefinisikan dan mengekspor custom hook; menerima nilai awal todos

  const [todos, setTodos] = useState(initialValue); // Membuat state 'todos' dan fungsi 'setTodos' untuk update state

  return { // Mengembalikan sebuah objek berisi nilai todos dan dua fungsi pengelola state
    todos, // State todos yang berisi array daftar tugas

    addTodo: todoText => { // Fungsi untuk menambahkan todo baru ke dalam daftar
      setTodos([...todos, todoText]); // Menyalin todos lama dan menambahkan item baru ke akhir array
    },

    deleteTodo: todoIndex => { // Fungsi untuk menghapus todo berdasarkan indeks-nya
      const newTodos = todos.filter((_, index) => index !== todoIndex); // Menyaring todos dan menghilangkan yang sesuai dengan indeks
      setTodos(newTodos); // Memperbarui state todos dengan array yang sudah difilter
    }
  };
};
