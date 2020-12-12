---
puppeteer:
    pdf:
        format: letter
        displayHeaderFooter: true
        margin:
            top: 1cm
            right: 0.5cm
            bottom: 1cm
            left: 0.5cm
    image:
        quality: 90
        fullPage: true
    
---

# SteepSheep de trabajo en laravel{style="color:darkblue"}

Orden de trabajo desde la terminal

1. Controladores
2. Modelos
3. migraciones

## **Controladores**{style="color:teal}
***

Para crear el controlador con todos los recursos de http, se agrega [[-r]]{style="color:teal} abreviación de [[--resources]]{style="color:teal}

!!! note crear controladores


    `php artisan`{style="color:CORNFLOWERBLUE"} `make:controller`{style="color:SLATEBLUE"} `TablaController`{style="color:teal"} `-r`{style="color:SLATEBLUE"}


Para nombrar el controlador se debe seguir la siguiente estructura:

!!! warning para tener en cuenta

    El nombre del controlador lleva el nombre de la tabla en Minuscula y con la primera letra en mayuscula

    !!! success ""

        `Tabla`{style="color:teal"}

    seguido de la palabra `Controller` 

    Por lo tanto quedaría:

    !!! success ""
        `TablaController`{style="color:teal"}

</br>

## **Modelos**{style="color:teal}
***

Para crear unicamente el modelo:

!!! note crear modelos


    `php artisan`{style="color:CORNFLOWERBLUE"} `make:model`{style="color:SLATEBLUE"} `Tabla`{style="color:teal"}

!!! warning para tener en cuenta

    El nombre del modelo lleva el nombre de la tabla en Minuscula y con la primera letra en mayuscula

    !!! success ""

        `Tabla`{style="color:teal"}

Para crear la migración asociada al modelo se agrega el metodo abreviado [[-m]] de [[--migration]]{style="color:teal}{style="color:teal}, quedando de la siguiente manera:

!!! note crear modelos


    `php artisan`{style="color:CORNFLOWERBLUE"} `make:model`{style="color:SLATEBLUE"} `Tabla`{style="color:teal"} `-m`{style="color:SLATEBLUE"}

    lo cual creará la tabla asociada correspondiente al nombre en plurar y con minusculas: `tablas`{style="color:teal"}

si se requiere usar un nombre de tabla distinto sugerido por la estrustura de laravel, se debe indicar en el modelo usando:

!!! primary ""

    `protected`{style="color:CORNFLOWERBLUE"} `$table =`{style="color:SLATEBLUE"} ` OtroNombre`{style="color:teal"};

en caso de usar otro nombre para la llave primaria:

!!! primary ""

    `protected`{style="color:CORNFLOWERBLUE"} `$primaryKey =`{style="color:SLATEBLUE"} ` OtroId`{style="color:teal"};

## **Migraciones**{style="color:teal}
***
para crear una migracion con toda la estructura básica para elaborar una tabla:

!!! note crear modelos

    `php artisan`{style="color:CORNFLOWERBLUE"} `make:migration`{style="color:SLATEBLUE"} `create_`{style="color:CORNFLOWERBLUE"} `tablas`{style="color:teal"}`_table `{style="color:CORNFLOWERBLUE"}  `--create=`{style="color:CORNFLOWERBLUE"}`tablas`{style="color:teal"}

estructura para dar nombre a las tablas 

!!! warning para tener en cuenta

    El nombre de la tabla debe ser en Minusculas y en plural 

    !!! success ""

        `tablas`{style="color:teal"}

### insertar campos{style="color:MEDIUMPURPLE"}

para insertar campos en una tabla

!!! note crear modelos

    `php artisan`{style="color:CORNFLOWERBLUE"} `make:migration`{style="color:SLATEBLUE"} `add_`{style="color:CORNFLOWERBLUE"} `campo`{style="color:teal"}`_to_table `{style="color:CORNFLOWERBLUE"}  `--tabla=`{style="color:CORNFLOWERBLUE"}`tablas`{style="color:teal"}

para añadir el campo luego de uno específico se escribe:

```php
$table=>String('campo')->after('campoAnterior')->nullable();
```

hacer la migracion a ala tabla de la BD (actualizar)

!!! primary ""

    `php artisan`{style="color:CORNFLOWERBLUE"} `migrate`{style="color:SLATEBLUE"}

para limpiar la BD

!!! primary ""

    `php artisan`{style="color:CORNFLOWERBLUE"} `migrate:rollback`{style="color:SLATEBLUE"}

Realizar las dos al tiempo

!!! primary ""

    `php artisan`{style="color:CORNFLOWERBLUE"} `migrate:refresh`{style="color:SLATEBLUE"}