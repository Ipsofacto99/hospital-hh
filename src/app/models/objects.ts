export interface Usuario_tabla {
  nombre: string;
  id: number;
  usuario: string;
  administrador: string;
  medico: string;
  medico_acesso_recetas: string;
  responsable_sanitario: string;
  mostrador_farmacia: string;
}

export interface Usuario{
  id: number,
  original_id: number,
  first_name: string,
  last_name: string,
  username: string,
  hash: string,
  salt: string,
  shift: string,
  status: string,
  created_at: string,
  created_by: string
}