# Nombre del proyecto

> Una o dos oraciones: qué es el dispositivo y qué logra.

![Foto del dispositivo](fotos/principal.jpg)

**Trabajo Final Integrador · Electrónica Aplicada II**
Ingeniería Electrónica · UTN Facultad Regional Córdoba · Cohorte 2026

## Integrantes

| Nombre | GitHub |
|---|---|
| Nombre Apellido | [@usuario](https://github.com/usuario) |
| Nombre Apellido | [@usuario](https://github.com/usuario) |

## Descripción

Qué problema resuelve o qué demuestra el dispositivo, y cómo funciona a grandes rasgos (diagrama en bloques si lo tienen).

## Especificaciones

| Parámetro | Valor de diseño | Valor medido |
|---|---|---|
| Ej.: Ganancia de tensión | 40 dB | 39,2 dB |
| Ej.: Ancho de banda (-3 dB) | 20 Hz – 20 kHz | 18 Hz – 22 kHz |
| Ej.: Potencia de salida | 20 W sobre 8 Ω | 18,5 W |

## Diseño

- Topología elegida y por qué.
- Cálculos principales (o referencia a la sección del informe).
- Componentes clave: por ejemplo TL072, LM317, TIP142/TIP147.

## Simulación

Herramienta usada (por ejemplo LTspice) y resultados principales. Los archivos están en [`simulaciones/`](simulaciones/).

## Implementación y mediciones

- Esquemático y PCB en [`hardware/`](hardware/).
- Fotos del prototipo y capturas del osciloscopio en [`fotos/`](fotos/).
- Comparación entre lo diseñado, lo simulado y lo medido.

## Demo

[Video del dispositivo funcionando](https://youtube.com/...)

## Informe técnico

[Informe final (PDF)](informe/informe-tfi.pdf)

## Estructura del repositorio

```text
simulaciones/   Archivos de simulación (.asc, etc.)
hardware/       Esquemático y PCB (KiCad u otro)
firmware/       Código, si el proyecto lo tiene
informe/        Informe técnico final en PDF
fotos/          Fotos del prototipo y de las mediciones
```
