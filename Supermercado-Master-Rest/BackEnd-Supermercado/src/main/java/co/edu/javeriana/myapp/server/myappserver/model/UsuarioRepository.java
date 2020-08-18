package co.edu.javeriana.myapp.server.myappserver.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface UsuarioRepository extends CrudRepository<Usuario, Long>{
	
	@Query("select u from Usuario u where u.nombre = :nombre")
    Usuario findByName(@Param("nombre") String nombre);
}
