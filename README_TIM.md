# 🤝 Panduan Kolaborasi Tim — Expense Tracker

## 🎯 Tujuan
<!-- Bagian ini menjelaskan tujuan utama panduan, yaitu membantu anggota tim berkolaborasi secara efektif di GitHub dan memahami alur kerja CI/CD.  -->
Panduan ini untuk membantu anggota **Bug4Fun** agar dapat:
- Berkontribusi ke repository GitHub
- Melakukan update kode
- Memicu workflow otomatis (CI/CD)
- Melihat hasil build di tab **Actions**

---

## 1️⃣ Terima Undangan Kolaborasi
<!-- Bagian pertama menjelaskan proses penerimaan undangan kolaborasi agar anggota bisa mendapatkan akses penuh ke repository. -->
1. Buka email/GitHub → **Accept invitation** ke repo `sampakpahan17/ex-pense-tracker`
2. Setelah diterima, kamu dapat melakukan `push`, `pull`, dan `pull request`.

---

## 2️⃣ Clone Repository
<!-- Tahapan cloning repository agar setiap anggota memiliki salinan proyek di komputer lokalnya. -->
```bash
git clone https://github.com/sampakpahan17/ex-pense-tracker.git
cd ex-pense-tracker
```

---

## 3️⃣ Buat Branch Baru
<!-- Pembuatan branch bertujuan agar setiap anggota bekerja di cabang terpisah tanpa mengganggu branch utama (main). -->
Gunakan branch terpisah untuk setiap fitur.
```bash
git checkout -b fitur-namaKamu
```
Contoh:
```bash
git checkout -b fitur-jocelyn
```

---

## 4️⃣ Jalankan Project di Lokal
<!-- Instruksi menjalankan proyek baik secara manual maupun dengan Docker agar pengujian bisa dilakukan di lingkungan lokal. -->

### Tanpa Docker
#### Backend:
```bash
cd be
uvicorn app.main:app --reload
```

#### Frontend:
```bash
cd fe
npm install
npm run dev
```

### Dengan Docker (Direkomendasikan)
```bash
docker compose up -d
```

> Jalankan perintah ini di **root folder** (`ex-pense-tracker/`)

---

## 5️⃣ Commit & Push Perubahan
<!-- Tahapan untuk menyimpan dan mengirim perubahan kode ke GitHub agar bisa direview atau digabung (merge) ke branch utama. -->
```bash
git add .
git commit -m "feat: perbaiki tampilan dashboard"
git push origin fitur-namaKamu
```

---

## 6️⃣ Buat Pull Request (PR)
<!-- Panduan untuk membuat Pull Request, yaitu permintaan agar perubahan dari branch fitur digabung ke main. -->
1. Buka GitHub → tab **Pull Requests**
2. Klik **New Pull Request**
3. Pilih branch kamu → `main`
4. Klik **Create Pull Request**
5. Tambahkan deskripsi perubahan

---

## 7️⃣ Workflow Otomatis (CI/CD)
<!-- Penjelasan proses otomatis (CI/CD) di GitHub Actions, termasuk build, push image Docker, dan auto-deploy via Watchtower. -->
Setiap kali ada commit/push:
- GitHub Actions akan build backend & frontend
- Push image ke DockerHub
- Watchtower akan auto-deploy di server

---

## 8️⃣ Merge PR
<!-- Tahapan untuk menggabungkan hasil kerja anggota setelah PR lolos dari pipeline CI/CD. -->
Setelah workflow ✅ sukses → ketua tim (Samuel) merge PR ke `main`.

---

## 9️⃣ Pantau Aktivitas
<!-- Tabel untuk membantu anggota mengetahui di mana memantau aktivitas proyek di GitHub. -->
| Aktivitas | Lokasi di GitHub |
|------------|------------------|
| Commit anggota | Tab **Commits** |
| Pull Request | Tab **Pull Requests** |
| Workflow CI/CD | Tab **Actions** |
| Kontributor | **Insights → Contributors** |

---

## 🧠 Tips Git Penting
<!-- Tips tambahan untuk membantu penggunaan Git yang lebih efisien. -->
| Perintah | Fungsi |
|-----------|--------|
| `git pull origin main` | Sinkronisasi kode terbaru |
| `git status` | Lihat status file |
| `git branch` | Cek branch aktif |
| `git branch -d nama-branch` | Hapus branch lokal setelah merge |

---

## 🏁 Penutup
<!-- Bagian akhir berisi ringkasan bahwa panduan ini mendukung kolaborasi berbasis DevOps dengan GitHub Actions dan Docker. -->
Dengan panduan ini, seluruh tim **Bug4Fun** dapat berkolaborasi secara DevOps-ready:
- Kolaborasi → Version Control
- Otomasi → GitHub Actions
- Deployment → Docker + Watchtower

Selamat berkreasi dan semoga sukses untuk **UTS DevOps! 🚀**
