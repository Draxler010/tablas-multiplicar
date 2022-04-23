# Tablas de Multiplicar (Aplicación de Consola)

Este es un ejercicio realizado del curso de Node JS de Fernando Herrera.

## Pasos de Instalación

1. Inicializar los paquetes de node:
    ```
        npm install
    ```

## Iniciar la Aplicación

Desde la consola, ejecutamos el siguiente comando:
```
    node app
```

Esto no abrirá la ayuda y mostrará los elementos que se necesitan. En este caso, se necesita mandar la base del número que queremos multiplicar.
```
    node app --base <numero_base>
```
o bien:
```
    node app -b <numero_base>
```

Si queremos mostrar el listado de números que se estan multiplicando, agregamos la bandera "-l":
```
    node app -b <numero_base> -l
```

o bien "--listar":
```
    node app -b <numero_base> --listar
```

Podemos indicar el número limite al que queremos multiplicar nuestra base. Para esto, agregamos la bandera "-h":
```
    node app -b <numero_base> -h
```

o bien "--hasta":
```
    node app -b <numero_base> --hasta
```

__NOTA:__ Si no se le coloca esta bandera, por defecto, el número hasta donde multiplicará, será hasta 10.

