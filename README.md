"¡Bienvenidos! 
En este repositorio, encontrarás mi contribución al proyecto de Recepcion de pagos de HSBC denominado RAP.

Mi aporte se centra en la implementación del cálculo del dígito verificador del Módulo 97, utilizado para verificar la integridad de datos en diferentes contextos.

Mediante el uso de la fórmula adecuada y el formato de tabla en Markdown, he facilitado la comprensión y visualización de este proceso, incluido el codigo desarrollado en typescript.

Agradezco sinceramente tu atención y el tiempo dedicado a revisar mi contribución. Espero que esta implementación sea de utilidad y contribuya al éxito de tu proyecto. ¡No dudes en explorar y utilizar esta funcionalidad en tu propio trabajo! Si tienes alguna pregunta o sugerencia, estaré encantado de recibir tus comentarios. ¡Gracias de nuevo por tu interés!"



Manual para el cálculo del dígito verificador del Módulo 97 - HSBC.

Este módulo de validación realiza el cálculo del doble dígito verificador de la referencia proporcionada  por el cliente, esta puede ser numérica o alfanumérica con una longitud máxima de 38 caracteres.

Referencias Alfanuméricas

En caso que la referencia contenga caracteres alfabéticos, es necesario convertirla toda a numérica,
para ello se toma en cuenta la siguiente tabla:

| Letra    | Número correspondiente |
| -------- | ----------------------- |
| A        | 1                       |
| B, K, S  | 2                       |
| C, L, T  | 3                       |
| D, M, U  | 4                       |
| E, N, V  | 5                       |
| F, O, W  | 6                       |
| G, P, X  | 7                       |
| H, Q, Y  | 8                       |
| I, R, Z  | 9                       |

Ejemplo: 

Referencia alfanumérica: 15ABC13b 

Referencia Alfabética: EmpresaX 

Referencia numérica: 15123132 

Referencia numérica: 54795217

Una vez que la referencia sea numérica, se aplica la rutina de cálculo. 

Rutina de cálculo

Ejemplo: Referencia: 0 7 6 8 0 5 0 0 0 0 0 3 0 0 0 7 0 
1) Para realizar el cálculo, se ignora el último dígito de la referencia, los dígitos restantes se deben 
multiplicar por los números 13,17,19, 23, 11 iniciando de derecha a izquierda y siempre con el 
número 13; aún cuando el número a multiplicar sea 0, este debe tomarse en cuenta:

| Referencia | 0 | 7 | 6 | 8 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 7 | 0 |
|------------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Algoritmo  | 13 | 11 | 23 | 19 | 17 | 13 | 11 | 23 | 19 | 17 | 13 | 11 | 23 | 19 | 17 | 13 |   |


2) Se multiplica la referencia por el Algoritmo:

| Referencia | 0 | 7 | 6 | 8 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 7 | 0 |
|------------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|      *     | x |  x |  x | x | x | x | x | x | x | x | x | x | x | x | x | x |   |
| Algoritmo  | 13 | 11 | 23 | 19 | 17 | 13 | 11 | 23 | 19 | 17 | 13 | 11 | 23 | 19 | 17 | 13 |   |
| Multiplicacion  | 0 | 77 | 138 | 152 | 0 | 65 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 91 |   |



3) Se suman los resultados de las multiplicaciones: 
0 + 77 + 138 + 152 + 0 + 65 + 0 + 0 + 0 + 0 + 0 + 33 + 0 + 0 + 0 + 91 = 556

4) Al resultado obtenido, se le suma el número 330 : 330 + 556 = 886

5) El resultado anterior se divide entre el número 97 y al residuo se le suma el número 1: 

el cálculo del dígito verificador del Módulo 97.

 ![image](https://github.com/JCarlosQuiroz/react.hsbc.template/assets/31607410/f1e312db-6e68-4ef1-b9ee-6642526d0dc2)


NOTA: Si el resultado de la suma es de un solo dígito, es necesario anteponer un cero (0) 
 Suma = 2 el doble dígito verificador será: 02
 
6) Como resultado se obtiene el doble dígito verificador de la referencia 14, la cual queda de la 
siguiente forma:

***0 7 6 8 0 5 0 0 0 0 0 3 0 0 0 7 0 – 14***



