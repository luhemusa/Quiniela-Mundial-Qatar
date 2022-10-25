export const FormatDate = (date) =>{

    const mes = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ];

    if (date !== null) {
        let fecha = new Date(date)
        let formatted_date = fecha.getDate() + " " + ( mes[fecha.getMonth()])
        return formatted_date
    } else {
        return "( Fecha no disponible )"
    }
}