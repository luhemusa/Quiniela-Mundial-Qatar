import Swal from 'sweetalert2'

export const FormatDate = (date) => {

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
        let formatted_date = fecha.getDate() + " " + (mes[fecha.getMonth()])
        return formatted_date
    } else {
        return "( Fecha no disponible )"
    }
}

export const PopUp = (title, msg, icon) => {
    Swal.fire(
        title,
        msg,
        icon
    )
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})


export const ToastPopUp = (title, icon) => {
    Toast.fire({
        icon: icon,
        title: title
    })
}
