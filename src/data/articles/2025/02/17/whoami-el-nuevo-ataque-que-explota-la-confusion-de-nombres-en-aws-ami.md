---
title: 'WhoAMI: El nuevo ataque que explota la confusión de nombres en AWS AMI'
description: Investigadores descubren el ataque 'whoAMI', una técnica que explota la confusión de nombres en las imágenes de máquinas de Amazon (AMI) para ejecutar código de forma remota en cuentas de AWS.
pubDate: 2025-02-17T19:34:00
lastModified: 2025-02-17T19:32:00
author: yuniel-acosta-perez
cover: /src/assets/images/whoAMI-cover.avif
coverAlt: whoami
tags:
  - aws
  - hacking
category: ciberseguridad
featured: true
draft: false
---
## ¿Qué es el ataque "whoAMI"?

Investigadores de ciberseguridad han revelado una nueva técnica de ataque denominada "whoAMI", que explota la confusión de nombres en las Imágenes de Máquina de Amazon (AMI) para ejecutar código de forma remota en cuentas de Amazon Web Services (AWS). Esta vulnerabilidad aprovecha la manera en que algunos desarrolladores buscan y seleccionan AMIs sin especificar correctamente los parámetros de propiedad.

El ataque funciona cuando un atacante publica una AMI con un nombre que coincide con los criterios de búsqueda utilizados por desarrolladores. Si estos no filtran correctamente los resultados, pueden terminar utilizando una AMI maliciosa en sus instancias EC2, permitiendo así la ejecución de código remoto dentro de su entorno AWS.

## Impacto y alcance

Seth Art, investigador de Datadog Security Labs, advierte que "si se ejecuta a gran escala, este ataque podría utilizarse para obtener acceso a miles de cuentas AWS". La investigación encontró que este patrón vulnerable está presente en numerosos repositorios de código, tanto privados como de código abierto, lo que amplifica su riesgo.

## Respuesta de AWS

AWS fue notificada del problema el 16 de septiembre de 2024 y abordó la vulnerabilidad tres días después. Según la compañía, no se ha encontrado evidencia de que la técnica haya sido explotada maliciosamente en el entorno real. En un comunicado, AWS afirmó:

> "Todos los servicios de AWS están operando según lo diseñado. Basado en un análisis exhaustivo de registros y monitoreo, nuestra investigación confirmó que la técnica descrita solo ha sido ejecutada por investigadores autorizados, sin evidencia de uso por otras partes."

## Medidas de mitigación

Para mitigar este riesgo, AWS ha introducido una nueva configuración llamada "Allowed AMIs", que permite a los administradores limitar el descubrimiento y uso de AMIs dentro de sus cuentas. Se recomienda a los clientes evaluar e implementar esta medida de seguridad.

![whoAMI - hacker server](../assets/images/whoami.avif "whoAMI")

Además, HashiCorp Terraform ha tomado acciones al respecto. En la versión 5.77.0 de su proveedor de AWS, se ha agregado una advertencia para los usuarios que utilicen `most_recent = true` sin un filtro de propietario. Se espera que esta advertencia se convierta en un error obligatorio en la versión 6.0.0.

## Conclusión

El ataque "whoAMI" pone en evidencia la importancia de definir correctamente los parámetros al seleccionar AMIs y de implementar controles de seguridad adecuados en entornos AWS. Las empresas y desarrolladores deben adoptar medidas como la verificación de propietarios de AMIs y la configuración de listas de AMIs permitidas para evitar posibles ataques.

Mantente informado sobre las últimas amenazas de ciberseguridad y toma medidas proactivas para proteger tu infraestructura en la nube.
