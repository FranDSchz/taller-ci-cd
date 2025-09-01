# Taller de CI/CD: Pipeline Automatizado para una API con Node.js ⚙️

Este repositorio demuestra la implementación de un pipeline de Integración Continua y Despliegue Continuo (CI/CD) utilizando **GitHub Actions**. El objetivo es automatizar el proceso de testing, análisis de calidad de código y deployment de una API REST simple construida con Node.js y Express.

Este proyecto es el resultado práctico de un taller enfocado en los principios de DevOps, mostrando cómo asegurar la calidad y la fiabilidad del software en cada cambio.

---

### Diagrama del Pipeline de CI/CD

El siguiente diagrama ilustra el flujo de trabajo automatizado que se activa con cada `push` a la rama `main`:

![Diagrama del Pipeline CI/CD](https://imgur.com/a/05Ynh2Z)

---

## 🚀 Etapas del Pipeline

El flujo de trabajo (`.github/workflows/ci.yml`) está compuesto por las siguientes etapas (jobs):

1.  **🧪 Testing (Pruebas Automatizadas):**
    * **Unit & Integration Tests:** Se ejecutan pruebas unitarias y de integración utilizando **Jest** y **Supertest**. Esto garantiza que la lógica de negocio y los endpoints de la API funcionen como se espera antes de integrar el código.

2.  **📊 Code Quality Analysis (Análisis de Calidad de Código):**
    * **Static Analysis with SonarQube:** El código se analiza en busca de bugs, vulnerabilidades y "code smells" utilizando **SonarCloud**. Un Quality Gate está configurado para detener el pipeline si la calidad del código no cumple con los estándares definidos, previniendo que el código de baja calidad llegue a producción.

3.  **🚀 Deployment (Despliegue):**
    * **Automatic Deploy to Render:** Si todas las etapas anteriores son exitosas, la aplicación se despliega automáticamente en la plataforma **Render**, asegurando una entrega continua y fiable.

---

## 🛠️ Stack Tecnológico

![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![SonarCloud](https://img.shields.io/badge/SonarCloud-F3702A?style=for-the-badge&logo=sonarcloud&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)

---

## ⚙️ Uso Local

Para probar la aplicación y ejecutar los tests en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/FranDSchz/taller-ci-cd.git
    cd taller-ci-cd
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta la aplicación:**
    ```bash
    npm start
    ```
    La API estará disponible en `http://localhost:3000`.

4.  **Ejecuta los tests:**
    ```bash
    npm test
    ```
    Esto correrá todas las pruebas definidas en la carpeta `__tests__`.