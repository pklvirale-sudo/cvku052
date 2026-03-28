import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Trash2, Edit2, Save, Loader2, Lock } from "lucide-react";

const API_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-projects`;

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  status: string;
  display_order: number;
}

const AdminPanel = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ title: "", description: "", image_url: "" });
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState({ title: "", description: "", image_url: "" });

  const storedPassword = () => password;

  const apiCall = async (action: string, project?: any) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, password: storedPassword(), project }),
    });
    return res.json();
  };

  const loadProjects = async () => {
    setLoading(true);
    const res = await apiCall("list");
    if (res.data) setProjects(res.data);
    setLoading(false);
  };

  const handleLogin = async () => {
    setPasswordError("");
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "list", password }),
    });
    const data = await res.json();
    if (res.ok && data.data) {
      setAuthenticated(true);
      setProjects(data.data);
    } else {
      setPasswordError("Password salah!");
    }
  };

  const handleAdd = async () => {
    if (!addForm.title.trim() || !addForm.description.trim()) return;
    setLoading(true);
    await apiCall("add", addForm);
    setAddForm({ title: "", description: "", image_url: "" });
    setShowAdd(false);
    await loadProjects();
  };

  const handleUpdate = async (id: string) => {
    setLoading(true);
    await apiCall("update", { id, ...editForm });
    setEditingId(null);
    await loadProjects();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus project ini?")) return;
    setLoading(true);
    await apiCall("delete", { id });
    await loadProjects();
  };

  const startEdit = (p: Project) => {
    setEditingId(p.id);
    setEditForm({ title: p.title, description: p.description, image_url: p.image_url || "" });
  };

  useEffect(() => {
    if (!open) {
      setAuthenticated(false);
      setPassword("");
      setPasswordError("");
      setEditingId(null);
      setShowAdd(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-background border border-border rounded-2xl w-full max-w-lg max-h-[85vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <h2 className="font-heading text-lg font-bold text-primary">Admin Panel</h2>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-muted transition-colors">
              <X size={20} className="text-muted-foreground" />
            </button>
          </div>

          {!authenticated ? (
            /* Login */
            <div className="p-6 flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Lock size={24} className="text-primary" />
              </div>
              <p className="text-muted-foreground text-sm text-center">Masukkan password admin</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Password"
                className="input-futuristic w-full"
                autoFocus
              />
              {passwordError && (
                <p className="text-red-400 text-sm">{passwordError}</p>
              )}
              <button onClick={handleLogin} className="btn-primary w-full justify-center">
                Masuk
              </button>
            </div>
          ) : (
            /* Project List */
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {loading && (
                <div className="flex justify-center py-8">
                  <Loader2 size={24} className="animate-spin text-primary" />
                </div>
              )}

              {!loading && projects.map((p) => (
                <div key={p.id} className="glass-card p-3 space-y-2">
                  {editingId === p.id ? (
                    <div className="space-y-2">
                      <input
                        value={editForm.title}
                        onChange={(e) => setEditForm(f => ({ ...f, title: e.target.value }))}
                        className="input-futuristic text-sm"
                        placeholder="Judul"
                      />
                      <textarea
                        value={editForm.description}
                        onChange={(e) => setEditForm(f => ({ ...f, description: e.target.value }))}
                        className="input-futuristic text-sm resize-none"
                        rows={2}
                        placeholder="Deskripsi"
                      />
                      <input
                        value={editForm.image_url}
                        onChange={(e) => setEditForm(f => ({ ...f, image_url: e.target.value }))}
                        className="input-futuristic text-sm"
                        placeholder="URL gambar (opsional)"
                      />
                      <div className="flex gap-2">
                        <button onClick={() => handleUpdate(p.id)} className="btn-primary-sm flex-1 justify-center">
                          <Save size={14} /> Simpan
                        </button>
                        <button onClick={() => setEditingId(null)} className="btn-outline-sm flex-1 justify-center">
                          Batal
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-foreground">{p.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{p.description}</p>
                      </div>
                      <div className="flex gap-1 flex-shrink-0">
                        <button onClick={() => startEdit(p)} className="p-1.5 rounded-lg hover:bg-primary/10 transition-colors">
                          <Edit2 size={14} className="text-primary" />
                        </button>
                        <button onClick={() => handleDelete(p.id)} className="p-1.5 rounded-lg hover:bg-red-500/10 transition-colors">
                          <Trash2 size={14} className="text-red-400" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Add form */}
              {showAdd ? (
                <div className="glass-card p-3 space-y-2 border-primary/30">
                  <input
                    value={addForm.title}
                    onChange={(e) => setAddForm(f => ({ ...f, title: e.target.value }))}
                    className="input-futuristic text-sm"
                    placeholder="Judul project"
                    autoFocus
                  />
                  <textarea
                    value={addForm.description}
                    onChange={(e) => setAddForm(f => ({ ...f, description: e.target.value }))}
                    className="input-futuristic text-sm resize-none"
                    rows={2}
                    placeholder="Deskripsi"
                  />
                  <input
                    value={addForm.image_url}
                    onChange={(e) => setAddForm(f => ({ ...f, image_url: e.target.value }))}
                    className="input-futuristic text-sm"
                    placeholder="URL gambar (opsional)"
                  />
                  <div className="flex gap-2">
                    <button onClick={handleAdd} className="btn-primary-sm flex-1 justify-center">
                      <Plus size={14} /> Tambah
                    </button>
                    <button onClick={() => setShowAdd(false)} className="btn-outline-sm flex-1 justify-center">
                      Batal
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowAdd(true)}
                  className="btn-outline w-full justify-center gap-2 text-sm"
                >
                  <Plus size={16} /> Tambah Project
                </button>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdminPanel;
