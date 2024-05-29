import { categorias, problema_info } from "../static_data/categorias_problemas"


export const fetchCategorias = async () => {
  return categorias.categorias
}

export const fetchInfoCategoria = async (idCategoria) => {
  let staticData = problema_info

  let dataCategoria = staticData.find(x => x.id == idCategoria)
  return dataCategoria
}