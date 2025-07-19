'use client';

import { useEffect, useState } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
}

export default function HomePage() {
  const [items, setItems] = useState<Item[]>([]);
  const [form, setForm] = useState({ name: '', description: '' });
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch('/api/items');
    const data = await res.json();
    setItems(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const endpoint = editId ? `/api/items/${editId}` : '/api/items';

    await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setForm({ name: '', description: '' });
    setEditId(null);
    fetchItems();
  };

  const handleEdit = (item: Item) => {
    setForm({ name: item.name, description: item.description });
    setEditId(item.id);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/items/${id}`, { method: 'DELETE' });
    fetchItems();
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow bg-white">
      <h1 className="text-2xl font-bold mb-4">CRUD Sederhana (Tugas 5)</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          className="border px-2 py-1 w-full"
          name="name"
          placeholder="Nama"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          className="border px-2 py-1 w-full"
          name="description"
          placeholder="Deskripsi"
          value={form.description}
          onChange={handleChange}
          required
        />
        <div>
          <button className="bg-blue-500 text-white px-4 py-1 rounded" type="submit">
            {editId ? 'Update' : 'Tambah'}
          </button>
          {editId && (
            <button
              className="ml-2 bg-gray-400 text-white px-4 py-1 rounded"
              type="button"
              onClick={() => {
                setEditId(null);
                setForm({ name: '', description: '' });
              }}
            >
              Batal
            </button>
          )}
        </div>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center border-b py-2">
            <div>
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </div>
            <div>
              <button className="text-green-600 mr-2" onClick={() => handleEdit(item)}>
                Edit
              </button>
              <button className="text-red-600" onClick={() => handleDelete(item.id)}>
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
