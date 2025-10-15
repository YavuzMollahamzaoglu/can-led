<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## CAN LED — Modern LED Çözümleri

Yerelde geliştirme, derleme ve GitHub Pages’e dağıtım adımları.

### Yerelde Çalıştırma
1. Bağımlılıkları kurun: `npm ci`
2. Geliştirme sunucusunu başlatın: `npm run dev`
3. Tarayıcıda açın: http://localhost:3000

> Aynı ağdaki cihazlardan erişmek için `npm run dev -- --host` kullanabilirsiniz.

### Yapay Zekâ Sohbeti (Opsiyonel)
- `.env` dosyanıza API anahtarını ekleyin:
  ```
  VITE_GOOGLE_API_KEY=YOUR_API_KEY
  ```

### Production Derleme
- `npm run build` → çıktılar `dist/` klasöründe oluşur.

### GitHub Pages’e Dağıtım
1. Bu repo’yu GitHub’a push’layın (main/master).
2. Repo’da Settings → Pages → Source: “GitHub Actions”.
3. Workflow (`.github/workflows/deploy.yml`) otomatik çalışır:
   - `--base=/<repo-adi>/` ile doğru base path kullanılır.
   - `dist/` artefact olarak yüklenip Pages’e deploy edilir.
4. URL: `https://<kullanici-adi>.github.io/<repo-adi>/`

#### Gizli Anahtar (Opsiyonel)
- AI için `VITE_GOOGLE_API_KEY` i Secrets → Actions → New repository secret olarak ekleyebilirsiniz.
