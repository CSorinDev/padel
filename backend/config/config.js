const PORT = process.env.PORT || 3000
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173'
const JWT_SECRET =
  process.env.JWT_SECRET ||
  'secreto_mas_secreto_que_nadie_sabe_pero_yo_lo_se_por_que_lo_pongo_en_el_codigo_espero_que_no_lo_veas'

export { PORT, CORS_ORIGIN, JWT_SECRET }
