import React from 'react'; // import react untuk membuat component
import ReactDOM from 'react-dom'; // import react-dom untuk render component ke DOM (meskipun tidak digunakan lansung dalam kode ini)
import Typography from '@mui/material/Typography'; // import Typography dari material-ui untuk membuat judul
import TodoForm from './components/TodoForm'; // import TodoForm component untuk membuat form tambah todo dari file TodoForm.jsx
import TodoList from './components/TodoList'; // import TodoList component untuk menampilkan daftar todo dari file TodoList.jsx
import useTodoState from './hooks/useTodoState'; // import useTodoState hook untuk mengelola state todo dari file useTodoState.jsx
import './App.css' // import file css untuk styling
import Button from '@mui/material/Button'; // import Button dari material-ui untuk membuat tombol (meskipun tidak digunakan lansung dalam kode ini)
import TextField from '@mui/material/TextField'; // import TextField dari material-ui untuk membuat input text (meskipun tidak digunakan lansung dalam kode ini)

export default function App() { // komponent utama App yang akan dirender ke DOM

  const { todos, addTodo, deleteTodo } = useTodoState([]); // panggil useTodoState hook untuk mengelola state todo
  // todos: array daftar todo
  // addTodo: fungsi untuk menambahkan todo
  // deleteTodo: fungsi untuk menghapus todo

  return (
    <div className="App"> {/* container utama dengan class App untuk styling */}

      {/*} 
      // CONTOH: penggunaan komponen dari material-ui (tidak digunakan dalam aplikasi ini)
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          alert('clicked');
        }} > Button </Button>
      */}

      <Typography component="h1" variant="h2"> {/* judul dengan komponen Typography dari material-ui */}
        Todos {/* teks judul */}
      </Typography>

      <TodoForm // komponen TodoForm untuk membuat form tambah todo 
        saveTodo={todoText => { // fungsi saveTodo untuk menambahkan todo baru 
          const trimmedText = todoText.trim(); // hapus spasi di awal dan akhir teks 

          if (trimmedText.length > 0) // jika teks tidak kosong 
            addTodo(trimmedText); // panggil fungsi addTodo untuk menambahkan todo baru ke state
        }
        }
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} /> {/* komponen TodoList untuk menampilkan daftar todo dan menerima fungsi deleteTodo untuk menghapus */}
    </div>
  );
}
