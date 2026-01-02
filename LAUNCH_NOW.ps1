# Run this in PowerShell as Administrator if needed

Write-Host \"========================================\" -ForegroundColor Cyan
Write-Host \"AreTeCracy Website Launch Script\" -ForegroundColor Cyan
Write-Host \"Target: January 8, 2026\" -ForegroundColor Yellow
Write-Host \"========================================\" -ForegroundColor Cyan
Write-Host \"\"

# Navigate to project directory
Set-Location D:\\GitHub\\Pillars-Showcase

# Fix 1: Rename Public to public (Vite expects lowercase)
if (Test-Path \"Public\") {
    Write-Host \"Renaming Public to public...\" -ForegroundColor Yellow
    Rename-Item -Path \"Public\" -NewName \"public\" -Force
    Write-Host \"✓ Folder renamed\" -ForegroundColor Green
}

# Fix 2: Update constants.ts with real images
Write-Host \"Updating constants.ts...\" -ForegroundColor Yellow
Copy-Item -Path \"constants_UPDATED.ts\" -Destination \"constants.ts\" -Force
Write-Host \"✓ Constants updated\" -ForegroundColor Green

# Fix 3: Test if npm is installed
Write-Host \"Checking dependencies...\" -ForegroundColor Yellow
npm --version > $null 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host \"X Node.js not found. Please install from nodejs.org\" -ForegroundColor Red
    exit
}

# Fix 4: Install dependencies if needed
if (-not (Test-Path \"node_modules\")) {
    Write-Host \"Installing dependencies...\" -ForegroundColor Yellow
    npm install
}

Write-Host \"\"
Write-Host \"========================================\" -ForegroundColor Green
Write-Host \"READY TO LAUNCH!\" -ForegroundColor Green
Write-Host \"========================================\" -ForegroundColor Green
Write-Host \"\"
Write-Host \"Choose an option:\" -ForegroundColor Cyan
Write-Host \"1. Test locally (recommended first)\" -ForegroundColor White
Write-Host \"2. Build for production\" -ForegroundColor White
Write-Host \"3. Both\" -ForegroundColor White
Write-Host \"\"

$choice = Read-Host \"Enter choice (1-3)\"

switch ($choice) {
    1 {
        Write-Host \"Starting development server...\" -ForegroundColor Yellow
        Write-Host \"Open browser to: http://localhost:5173/Pillars-Showcase/\" -ForegroundColor Cyan
        npm run dev
    }
    2 {
        Write-Host \"Building for production...\" -ForegroundColor Yellow
        npm run build
        Write-Host \"✓ Build complete! Files are in /docs folder\" -ForegroundColor Green
        Write-Host \"\"
        Write-Host \"Next steps to deploy:\" -ForegroundColor Yellow
        Write-Host \"1. git add .\" -ForegroundColor White
        Write-Host \"2. git commit -m 'Launch AreTeCracy MVP'\" -ForegroundColor White
        Write-Host \"3. git push\" -ForegroundColor White
        Write-Host \"4. Go to GitHub repo settings > Pages\" -ForegroundColor White
        Write-Host \"5. Set source to /docs folder\" -ForegroundColor White
    }
    3 {
        Write-Host \"Testing locally first...\" -ForegroundColor Yellow
        Start-Process powershell -ArgumentList \"cd D:\\GitHub\\Pillars-Showcase; npm run dev\"
        Start-Sleep -Seconds 5
        Write-Host \"Building for production...\" -ForegroundColor Yellow
        npm run build
        Write-Host \"✓ Build complete!\" -ForegroundColor Green
    }
}
`
}