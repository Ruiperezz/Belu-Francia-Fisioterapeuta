# IMAGENES.md — Mapa completo de imágenes

## URLs originales en belufisio.com → Destino local

| Destino local | URL original |
|---|---|
| `assets/img/hero/hero-principal.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-17-03-16-scaled.jpg` |
| `assets/img/servicios/fisioterapia.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-16-25-09-scaled.jpg` |
| `assets/img/servicios/osteopatia.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-17-34-04-scaled.jpg` |
| `assets/img/servicios/rehabilitacion.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/IMG_4343.jpg` |
| `assets/img/servicios/ejercicio.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-17-28-16-scaled.jpg` |
| `assets/img/servicios/atm.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-16-46-04-scaled.jpg` |
| `assets/img/tecnologia/diatermia.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-17-43-56-1-scaled.jpg` |
| `assets/img/tecnologia/ondas-choque.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-17-40-41-scaled.jpg` |
| `assets/img/tecnologia/ecografia.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/93FD7461-22CD-43D4-8BDF-BFE721F09EFE.jpg` |
| `assets/img/tecnologia/presoterapia.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/IMG_4416.jpg` |
| `assets/img/tecnologia/ena.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-16-35-56-scaled.jpg` |
| `assets/img/tecnologia/vaf.jpg` | `https://belufisio.com/wp-content/uploads/2026/05/228762da43615752cdbe11922a2cd6d4-e1778493980444.jpg` |
| `assets/img/sobre-mi/belu-principal.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/IMG_0240-scaled.jpg` |
| `assets/img/galeria/galeria-1.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-17-03-16-scaled.jpg` |
| `assets/img/galeria/galeria-2.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/IMG_0215-scaled.jpg` |
| `assets/img/galeria/galeria-3.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-17-20-06-scaled.jpg` |
| `assets/img/galeria/galeria-4.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/IMG_0210-scaled.jpg` |
| `assets/img/galeria/galeria-5.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/IMG_0196-scaled.jpg` |
| `assets/img/metodo/metodo-1.jpg` | `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-17-19-51-1-scaled-e1778491140750.jpg` |

## Script para descargar todas (ejecutar en terminal)

```bash
# Descargar todas las imágenes originales
BASE="https://belufisio.com/wp-content/uploads"

curl -o assets/img/hero/hero-principal.jpg "$BASE/2024/12/Foto-5-11-24-17-03-16-scaled.jpg"
curl -o assets/img/servicios/fisioterapia.jpg "$BASE/2024/12/Foto-5-11-24-16-25-09-scaled.jpg"
curl -o assets/img/servicios/osteopatia.jpg "$BASE/2024/12/Foto-5-11-24-17-34-04-scaled.jpg"
curl -o assets/img/servicios/rehabilitacion.jpg "$BASE/2024/12/IMG_4343.jpg"
curl -o assets/img/servicios/ejercicio.jpg "$BASE/2024/12/Foto-5-11-24-17-28-16-scaled.jpg"
curl -o assets/img/servicios/atm.jpg "$BASE/2024/12/Foto-5-11-24-16-46-04-scaled.jpg"
curl -o assets/img/tecnologia/diatermia.jpg "$BASE/2024/12/Foto-5-11-24-17-43-56-1-scaled.jpg"
curl -o assets/img/tecnologia/ondas-choque.jpg "$BASE/2024/12/Foto-5-11-24-17-40-41-scaled.jpg"
curl -o assets/img/tecnologia/ecografia.jpg "$BASE/2024/12/93FD7461-22CD-43D4-8BDF-BFE721F09EFE.jpg"
curl -o assets/img/tecnologia/presoterapia.jpg "$BASE/2024/12/IMG_4416.jpg"
curl -o assets/img/tecnologia/ena.jpg "$BASE/2024/12/Foto-5-11-24-16-35-56-scaled.jpg"
curl -o assets/img/tecnologia/vaf.jpg "$BASE/2026/05/228762da43615752cdbe11922a2cd6d4-e1778493980444.jpg"
curl -o assets/img/sobre-mi/belu-principal.jpg "$BASE/2024/12/IMG_0240-scaled.jpg"
curl -o assets/img/galeria/galeria-1.jpg "$BASE/2024/12/Foto-5-11-24-17-03-16-scaled.jpg"
curl -o assets/img/galeria/galeria-2.jpg "$BASE/2024/12/IMG_0215-scaled.jpg"
curl -o assets/img/galeria/galeria-3.jpg "$BASE/2024/12/Foto-5-11-24-17-20-06-scaled.jpg"
curl -o assets/img/galeria/galeria-4.jpg "$BASE/2024/12/IMG_0210-scaled.jpg"
curl -o assets/img/galeria/galeria-5.jpg "$BASE/2024/12/IMG_0196-scaled.jpg"
curl -o assets/img/metodo/metodo-1.jpg "$BASE/2024/12/Foto-5-11-24-17-19-51-1-scaled-e1778491140750.jpg"

echo "✓ Todas las imágenes descargadas"
```

## Convertir a WebP (requiere cwebp o ffmpeg)

```bash
# Con cwebp (instalar: brew install webp / apt install webp)
find assets/img -name "*.jpg" -exec sh -c 'cwebp -q 82 "$1" -o "${1%.jpg}.webp"' _ {} \;

# O usar Squoosh CLI (npm): https://github.com/GoogleChromeLabs/squoosh/tree/dev/cli
```

## Tamaños recomendados (después de optimizar)

| Imagen | Tamaño máximo |
|---|---|
| Hero principal | 1920×1280 px, ~180KB WebP |
| Servicio (4:3) | 900×675 px, ~80KB WebP |
| Tecnología (16:9) | 900×506 px, ~70KB WebP |
| Galería | 1200×800 px, ~100KB WebP |
| Sobre mí (3:4) | 600×800 px, ~60KB WebP |

