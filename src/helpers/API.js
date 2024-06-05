import { categorias, problema_info } from "../static_data/categorias_problemas"
import { notifications_sample } from "../static_data/notifications_sample"


export const fetchCategorias = async () => {
  return categorias.categorias
}

export const fetchInfoCategoria = async (idCategoria) => {
  let staticData = problema_info

  let dataCategoria = staticData.find(x => x.id == idCategoria)
  return dataCategoria
}



export const fetchNotifications = async () => {
  return notifications_sample.notifications
}