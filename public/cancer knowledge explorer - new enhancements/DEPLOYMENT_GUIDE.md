# Cancer Knowledge Explorer - Deployment Guide

**Complete guide to deploy to GitHub and Lovable**

---

## TABLE OF CONTENTS

1. [GitHub Setup](#github-setup)
2. [Local Development](#local-development)
3. [Lovable Deployment](#lovable-deployment)
4. [Deployment Checklist](#deployment-checklist)
5. [Troubleshooting](#troubleshooting)

---

## GITHUB SETUP

### Step 1: Create GitHub Repository

```bash
# Initialize git in your project directory
cd cancer-knowledge-explorer
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Cancer Knowledge Explorer v2.0"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/cancer-knowledge-explorer.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Configure GitHub Secrets (for Lovable deployment)

1. Go to GitHub repository → Settings → Secrets and variables → Actions
2. Create new secrets:

```
LOVABLE_API_KEY=<your-lovable-api-key>
LOVABLE_PROJECT_ID=<your-lovable-project-id>
```

### Step 3: Enable GitHub Actions

1. Go to GitHub repository → Actions
2. Authorize GitHub Actions workflow
3. The deploy workflow will automatically run on push to main

---

## LOCAL DEVELOPMENT

### Prerequisites

```bash
# Node.js 18+
node --version  # Should be v18.0.0 or higher

# npm 9+
npm --version  # Should be v9.0.0 or higher
```

### Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/cancer-knowledge-explorer.git
cd cancer-knowledge-explorer

# Install dependencies
npm install

# Verify installation
npm list
```

### Development Server

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
# Hot reload is enabled - changes save automatically
```

### Build for Production

```bash
# Type check
npm run type-check

# Run linter
npm run lint

# Build
npm run build

# Output will be in ./dist directory
# Ready for deployment

# Preview production build
npm run preview
```

---

## LOVABLE DEPLOYMENT

### Method 1: Direct GitHub Push (Recommended for Lovable)

Lovable integrates with GitHub. Simply push to GitHub and Lovable will sync automatically:

```bash
# Make your changes
# git add, commit, push
git add .
git commit -m "Update cancer data and disclaimer components"
git push origin main

# Lovable automatically detects changes and deploys
# Check your Lovable project dashboard
```

### Method 2: Manual Deployment via Lovable CLI

```bash
# Install Lovable CLI
npm install -g @lovable/cli

# Login to Lovable
lovable login

# Deploy current directory
lovable deploy --project-id=<your-project-id>

# Or use with environment variable
export LOVABLE_PROJECT_ID=<your-project-id>
lovable deploy
```

### Method 3: Lovable Dashboard Upload

1. Go to Lovable Dashboard
2. Select your Cancer Knowledge Explorer project
3. Click "Sync from GitHub" or "Upload Files"
4. Select the `dist/` folder (after running `npm run build`)
5. Click Deploy

---

## PROJECT STRUCTURE

```
cancer-knowledge-explorer/
├── src/
│   ├── components/           # React components
│   │   ├── MedicalDisclaimerFooter.tsx
│   │   ├── DisclaimerModal.tsx
│   │   ├── CancerInlineDisclaimer.tsx
│   │   ├── CancerVideoCard.tsx
│   │   ├── CancerVideosSection.tsx
│   │   └── index.ts
│   ├── types/               # TypeScript types
│   │   └── cancer.ts
│   ├── data/                # Cancer data
│   │   └── cancers/
│   │       ├── breast-cancer.ts
│   │       └── index.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind CSS
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
├── tailwind.config.ts       # Tailwind config
├── postcss.config.js        # PostCSS config
├── .gitignore               # Git ignore rules
└── README.md                # Documentation
```

---

## ADDING NEW CANCER TYPES

### Step 1: Create Cancer Data File

Create `src/data/cancers/prostate-cancer.ts`:

```typescript
import { CancerEntry } from '@/types/cancer';

export const prostateCancer: CancerEntry = {
  id: 'prostate-cancer',
  name: 'Prostate Cancer',
  // ... rest of cancer data
};
```

### Step 2: Add to Cancer Index

Update `src/data/cancers/index.ts`:

```typescript
import { prostateCancer } from './prostate-cancer';

export const cancerDatabase: Record<string, CancerEntry> = {
  'breast-cancer': breastCancer,
  'prostate-cancer': prostateCancer,  // Add this line
};
```

### Step 3: Commit and Deploy

```bash
git add src/data/cancers/
git commit -m "Add prostate cancer data"
git push origin main
```

---

## ADDING VIDEOS TO CANCER ENTRIES

### Step 1: Create Video Data

In your cancer data file, update the `videos` array:

```typescript
videos: [
  {
    id: 'breast-001',
    cancerTypeId: 'breast-cancer',
    title: 'Understanding Breast Cancer Screening',
    description: 'Overview of mammography and when to get screened',
    duration: 425,
    source: {
      platform: 'youtube',
      youtubeId: 'dQw4w9WgXcQ',
    },
    organization: {
      name: 'National Cancer Institute',
      tier: 1,
    },
    category: 'diagnosis',
    targetAudience: 'general_public',
    uploadedDate: '2023-06-15',
    lastVerified: '2025-03-01',
    verifiedBy: 'Content Team',
    accessibility: {
      subtitles: true,
      closedCaptions: true,
      audioDescription: false,
      isAccessibilityOptimized: true,
    },
    language: 'en',
    tags: ['screening', 'mammography', 'prevention'],
  },
],
```

### Step 2: Update Verification

Always include verification metadata:
- `lastVerified`: Date video was last checked
- `verifiedBy`: Who verified it
- `accessibility`: Captions and transcripts

### Step 3: Deploy

```bash
git add src/data/cancers/
git commit -m "Add videos for breast cancer"
git push origin main
```

---

## UPDATING DISCLAIMERS

### Modify Disclaimer Text

Edit component files to update disclaimer language:

**Footer:** `src/components/MedicalDisclaimerFooter.tsx`  
**Modal:** `src/components/DisclaimerModal.tsx`  
**Inline:** `src/components/CancerInlineDisclaimer.tsx`

### Deploy Changes

```bash
git add src/components/
git commit -m "Update medical disclaimer text"
git push origin main
```

---

## UPDATING CONFIDENCE SCORES

### Update Verification Metadata

In cancer data files, update the `verification` section:

```typescript
verification: {
  verifiedDate: '2025-03-15',
  verifiedBy: 'Dr. Jane Smith, MD (Oncology)',
  nextVerificationDue: '2026-03-15',
  confidenceScore: 95,  // Update this
  // ... rest of verification data
},
```

### Deploy

```bash
git add src/data/cancers/
git commit -m "Update confidence scores after review"
git push origin main
```

---

## DEPLOYMENT CHECKLIST

Before deploying to production:

- [ ] **Build succeeds locally**
  ```bash
  npm run build
  ```

- [ ] **No TypeScript errors**
  ```bash
  npm run type-check
  ```

- [ ] **No linting errors**
  ```bash
  npm run lint
  ```

- [ ] **Disclaimers visible**
  - Modal appears on first visit
  - Footer visible on all pages
  - Inline warnings on cancer pages

- [ ] **All data verified**
  - Confidence scores accurate
  - Sources properly attributed
  - Last verified dates current

- [ ] **Videos accessible**
  - YouTube links functional
  - Captions/transcripts available
  - Tier assignments correct

- [ ] **Responsive on mobile**
  - Test on iPhone, Android
  - Test on tablet
  - All components readable

- [ ] **Performance acceptable**
  - Page load < 3 seconds
  - No console errors
  - Images optimized

---

## TROUBLESHOOTING

### Issue: Build fails locally

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Videos not loading

Check:
- YouTube video IDs are correct
- YouTube videos are public
- No CORS issues

### Issue: Tailwind styles not applying

```bash
# Rebuild Tailwind CSS
npm install --save-dev tailwindcss
npm run build
```

### Issue: GitHub Actions failing

1. Check GitHub Actions logs (Actions tab)
2. Verify Node.js version: `node --version`
3. Verify npm version: `npm --version`
4. Check GitHub secrets are configured

### Issue: Not deploying to Lovable

1. Verify `LOVABLE_API_KEY` and `LOVABLE_PROJECT_ID` are in GitHub Secrets
2. Check .github/workflows/deploy.yml exists
3. Ensure workflow is enabled in Actions

---

## PRODUCTION DEPLOYMENT URL

Once deployed to Lovable, your site will be available at:

```
https://cancer-knowledge-explorer.lovable.app/
```

(or your custom Lovable domain)

---

## CONTINUOUS INTEGRATION

Every push to `main` will:

1. ✅ Install dependencies
2. ✅ Run linter
3. ✅ Run type checking
4. ✅ Build production version
5. ✅ Deploy to Lovable (if all checks pass)

Check the Actions tab in GitHub for deployment status.

---

## ROLLBACK PROCEDURE

If something goes wrong after deployment:

```bash
# View commit history
git log --oneline

# Revert to previous commit
git revert <commit-hash>

# Push to trigger redeployment
git push origin main

# Lovable will automatically redeploy the previous version
```

---

## SUPPORT

For Lovable-specific questions:
- Documentation: https://lovable.dev/docs
- Support: support@lovable.dev

For GitHub Actions questions:
- Documentation: https://docs.github.com/en/actions

---

**Happy Deploying! 🚀**
