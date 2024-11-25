# ☁️ Download Public MEGA Files to Google Drive with Google Colab

This Colab notebook allows you to **download any public MEGA file link directly into your Google Drive**—no login required.

It's fast, free, and perfect for accessing large shared files using the [MEGA](https://mega.nz/) cloud platform.

---

## 🚀 Features

- ✅ No MEGA login required  
- ✅ Saves directly to your Google Drive  
- ✅ Works inside Google Colab  
- ✅ Great for large datasets or shared media  

---

## 📚 How to Use

### 1. Open in Google Colab

> [Click here to open in Colab](https://colab.research.google.com/)  
> Or upload the `.ipynb` notebook to [Google Colab](https://colab.research.google.com/)

---

### 2. Install Dependencies

```python
!pip install mega.py
```

### 3. Mount Your Google Drive

```python
from google.colab import drive
drive.mount('/content/drive')
```

### 4. Import and Initialize MEGA (No Login Needed)

```python
from mega import Mega
mega = Mega()
```

### 5. Enter a Public MEGA Link

```python
file_url = input("Enter the public MEGA file link: ")
```

### 6. Set the Google Drive Target Path

```python
target_path = '/content/drive/My Drive/'  # Default location
```

### 7. Download the File

```python
try:
    print("Downloading from MEGA...")
    file = mega.download_url(file_url, target_path)
    print(f"File successfully downloaded to Google Drive at: {file}")
except Exception as e:
    print(f"Error: {e}")
```

✅ Once downloaded, you’ll see your file inside the specified Google Drive folder.

## 📂 Example Use Case
- Download a dataset shared via MEGA
- Save educational videos or audio files for offline study
- Backup large media files directly to your cloud

## 💡 Notes
- Make sure the MEGA link is publicly shared
- Colab sessions expire after some time—ensure the download completes within that window
- You can also modify the `target_path` to save inside specific folders

## 📄 License
MIT — free to use, modify, and share.