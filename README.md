# AmazeHeads — Folder-based Media Gallery (Firebase)

## Files to commit
- firebase-config.js (paste your Firebase config)
- helpers.js
- styles.css
- index.html
- admin-login.html
- admin-dashboard.html

## Firebase setup
1. Create a Firebase project: https://console.firebase.google.com
2. Add a Web App, copy config and paste into firebase-config.js
3. Enable Firestore, Storage, and Authentication (Email/Password)
4. Create one admin user in Auth → Users

## Development Firestore & Storage rules (dev)
Firestore:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /media/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /folders/{folderId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}

Storage:
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /media/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}

## Deploy on GitHub Pages
1. Push all files to your GitHub repo root (branch `main`)
2. In repo Settings → Pages: Source → choose `main` branch and `/ (root)`
3. Save and wait ~1 minute. Visit `https://<username>.github.io/<repo>/`

## Notes
- After creating a folder in admin dashboard, upload media into it — public gallery will show it immediately.
- Tighten rules before production to restrict writes to specific admin UIDs.
