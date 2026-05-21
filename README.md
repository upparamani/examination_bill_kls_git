# Exam Bills KLS GIT — Android APK Builder

## How to get your APK (step-by-step)

### 1. Create a GitHub repository
- Go to https://github.com/new
- Repository name: `exam-bills-app` (or anything)
- Set to **Private** (recommended — your data config is here)
- Click **Create repository**

### 2. Upload these files to the repo
Upload the entire folder contents maintaining this structure:

```
exam-bills-app/
├── www/
│   └── index.html          ← your app
├── .github/
│   └── workflows/
│       └── build-apk.yml   ← the auto-build workflow
├── config.xml
└── package.json
```

You can drag-and-drop files in the GitHub web UI, or use:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/exam-bills-app.git
git push -u origin main
```

### 3. Watch the build
- Go to your repo → **Actions** tab
- You'll see **"Build Android APK"** workflow running
- Wait ~5–8 minutes for it to complete ✅

### 4. Download the APK
- Click the completed workflow run
- Scroll down to **Artifacts**
- Click **ExamBills-KLS-GIT-debug** → downloads a ZIP
- Extract the ZIP → install `app-debug.apk` on your Android phone

### 5. Install on Android
- Transfer the APK to your phone
- Go to **Settings → Install unknown apps** → allow your browser/file manager
- Tap the APK file to install

---

## Re-building after changes
Just replace `www/index.html` with your updated file and push/commit.  
The workflow triggers automatically and a new APK appears in Artifacts.

## App details
| Field | Value |
|-------|-------|
| Package ID | `com.klsgit.ise.exambills` |
| Min Android | 5.1 (API 22) |
| Target Android | 14 (API 34) |
| Orientation | Portrait only |
