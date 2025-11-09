# 💰 Expense Tracker - Bug4Fun

![Build Status](https://github.com/samsz07/ex-pense-tracker/actions/workflows/docker-build.yml/badge.svg)
![Python](https://img.shields.io/badge/python-3.11-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-success)
![React](https://img.shields.io/badge/React-Frontend-61dafb)
![Docker](https://img.shields.io/badge/Docker-Automated-blue)

---

## 👨‍💻 Kelompok Bug4Fun

| No | Nama | NIM | Keterangan |
|----|------|-----|-------------|
| 1 | **Samuel G. Christian Pakpahan** | 221113531 | Ketua Kelompok |
| 2 | **Jocelyn** | 221110108 | Anggota |
| 3 | **Maesi** | 221112816 | Anggota |
| 4 | **Sontiar Eseria Tampubolon** | 221112223 | Anggota |

---

## 📘 Deskripsi Proyek

**Expense Tracker** adalah aplikasi sederhana untuk mencatat dan memantau transaksi keuangan pribadi.  
Proyek ini dikembangkan menggunakan **FastAPI** untuk backend dan **React + TailwindCSS** untuk frontend.  
Selain itu, CI/CD terintegrasi menggunakan **GitHub Actions** yang otomatis membangun dan push image ke **Docker Hub**.

---

## 🧩 Struktur Folder

```
ex-pense-tracker/
├── .github/
│   └── workflows/
│       └── docker-build.yml
├── be/                      # Backend (FastAPI)
│   ├── app/
│   │   ├── main.py
│   │   ├── models.py
│   │   └── database.json
│   ├── requirements.txt
│   └── Dockerfile
├── fe/                      # Frontend (React + Vite)
│   ├── src/
│   ├── package.json
│   └── Dockerfile
└── README.md
```

---

## ⚙️ Cara Instalasi & Menjalankan

### 🔹 1. Clone Repository
```bash
git clone https://github.com/samsz07/ex-pense-tracker.git
cd ex-pense-tracker
```

---

### 🔹 2. Menjalankan Backend (FastAPI)
```bash
cd be
python -m venv venv
venv\Scripts\activate        # (Windows)
pip install -r requirements.txt
uvicorn app.main:app --reload
```
Backend akan berjalan di: **http://127.0.0.1:8000**

---

### 🔹 3. Menjalankan Frontend (React + Vite)
```bash
cd ../fe
npm install
npm run dev
```
Frontend akan berjalan di: **http://127.0.0.1:5173**

---

### 🔹 4. Menjalankan dengan Docker Compose
```bash
docker-compose up --build
```

Setelah berhasil, buka browser:
- Frontend → `http://localhost:5173`
- Backend API → `http://localhost:8000`

---

## 🧱 CI/CD (GitHub Actions + Docker Hub)

Setiap kali ada push ke branch `main`, GitHub Actions akan otomatis:
1. Build image Docker dari backend.
2. Push image ke **Docker Hub**:  
   👉 [https://hub.docker.com/r/samsz07/ex-pense-tracker](https://hub.docker.com/r/samsz07/ex-pense-tracker)

---

## 💾 Backup Kode Lengkap

📁 **Link Google Drive (Full Backup Project)**  
🔗 [https://drive.google.com/drive/folders/1vTw7TpM8RCr2gZRs-yC5gRXCUXS1e_Ic?usp=sharing](https://drive.google.com/drive/folders/1vTw7TpM8RCr2gZRs-yC5gRXCUXS1e_Ic?usp=sharing)

---

## 🖼️ Tampilan Aplikasi

### 💵 Dashboard Utama
![Dashboard](assets/dashboard.png)

### ➕ Form Tambah Transaksi
![Form](assets/form.png)

---

## 🚀 Teknologi yang Digunakan
- **Backend:** FastAPI, Python 3.11  
- **Frontend:** React + Vite + TailwindCSS  
- **Database:** JSON file (local storage)  
- **Containerization:** Docker  
- **CI/CD:** GitHub Actions  

---

## 📜 Lisensi
Proyek ini dibuat sebagai bagian dari **Ujian Tengah Semester (UTS) - Mata Kuliah DevOps**  
📚 Universitas Mikroskil - 2025

---

> 💡 “Build smart, track wisely.” — *Bug4Fun Team*
