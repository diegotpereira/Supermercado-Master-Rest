package co.edu.javeriana.myapp.server.myappserver.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.edu.javeriana.myapp.server.myappserver.model.Usuario;
import co.edu.javeriana.myapp.server.myappserver.model.UsuarioRepository;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/usuario")
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;

	@RequestMapping(value = "")
	Iterable<Usuario> findAll() {
		System.out.println("listando++++++++++++++");
		return repository.findAll();
	}

	@RequestMapping("/{id}")
	Optional<Usuario> find(@PathVariable("id") Long id) {
		return repository.findById(id);
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public Usuario create(@RequestBody Usuario u) {
		System.out.println("registrando++++++++++++++");
		
		return repository.save(u);
    }
	
}
