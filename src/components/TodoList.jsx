import React from 'react'; // Import React
import List from '@mui/material/List'; // Komponen daftar dari Material UI
import ListItem from '@mui/material/ListItem'; // Item dalam daftar
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'; // Area aksi di sisi kanan item
import ListItemText from '@mui/material/ListItemText'; // Untuk menampilkan teks dalam item
import Checkbox from '@mui/material/Checkbox'; // Checkbox dari Material UI
import IconButton from '@mui/material/IconButton'; // Tombol berbasis ikon
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'; // Ikon delete

// Komponen TodoList menerima props: todos (array daftar tugas) dan deleteTodo (fungsi untuk menghapus)
const TodoList = ({ todos, deleteTodo }) => (
  <div>
    <List>
      {/* Melakukan iterasi terhadap setiap item todo */}
      {todos.map((todo, index) => (
        <ListItem key={index.toString()} dense button> {/* key unik untuk setiap item ,dense = lebih ramping, button = bisa diklik */}
          <Checkbox tabIndex={-1} disableRipple /> {/* Checkbox hanya untuk tampilan */}
          <ListItemText secondary={todo} /> {/* Menampilkan isi todo sebagai teks sekunder */}

          <ListItemSecondaryAction> {/* Bagian kanan item untuk aksi tambahan */}
            <IconButton
              aria-label="Delete" // Label aksesibilitas
              onClick={() => {
                deleteTodo(index); // Memanggil fungsi delete dengan index todo yang diklik
              }}
            >
              <DeleteOutlinedIcon stroke="red" fill="red" /> {/* Ikon hapus dengan warna merah */}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </div>
);

export default TodoList; // Mengekspor komponen agar bisa digunakan di tempat lain
