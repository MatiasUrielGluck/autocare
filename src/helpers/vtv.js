export const formatearFechaVencimiento = (
  mesVencimiento,
  ultimaVerificacion
) => {
  let fechaActual = new Date();
  let mesActual = fechaActual.getMonth() + 1;
  let yearVencimiento = fechaActual.getFullYear();

  if (ultimaVerificacion) {
    let partesFecha = ultimaVerificacion.split("-");
    let yearVerificacion = Number(partesFecha[2]);

    if (
      mesActual > Number(mesVencimiento) &&
      yearVerificacion === yearVencimiento
    )
      yearVencimiento++;
  }

  switch (mesVencimiento) {
    case "0":
      return `31-10-${yearVencimiento}`;

    case "1":
      return `30-11-${yearVencimiento}`;

    case "2":
      return `28-02-${yearVencimiento}`;

    case "3":
      return `31-03-${yearVencimiento}`;

    case "4":
      return `30-04-${yearVencimiento}`;

    case "5":
      return `31-05-${yearVencimiento}`;

    case "6":
      return `30-06-${yearVencimiento}`;

    case "7":
      return `31-07-${yearVencimiento}`;

    case "8":
      return `31-08-${yearVencimiento}`;

    case "9":
      return `30-09-${yearVencimiento}`;

    default:
      return "-";
  }
};
