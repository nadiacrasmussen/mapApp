MapsApp
No usar directamente en AngularCLI (a menos que estén creadas las variables de entorno), ya que las variables de entorno se crean basados en el .env

Pasos:
Clonar el .env.template y renombrarlo a .env
Llenar las variables de entorno acorde
Crear Angular Envs (opcional)
npm run envs
Para development ejecutar:
npm run start
Para producción ejecutar:
npm run build
