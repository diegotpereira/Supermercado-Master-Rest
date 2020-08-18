package co.edu.javeriana.myapp.server.myappserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.edu.javeriana.myapp.server.myappserver.model.Detalle;
import co.edu.javeriana.myapp.server.myappserver.model.DetalleRepository;
import co.edu.javeriana.myapp.server.myappserver.model.Producto;
import co.edu.javeriana.myapp.server.myappserver.model.Venta;
import co.edu.javeriana.myapp.server.myappserver.model.VentaRepository;

import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/detalle")
public class DetalleService {

	
	
	@Autowired
	private DetalleRepository repositoryDetalle;

	@RequestMapping("")
	Iterable<Detalle> findAll() {
		return repositoryDetalle.findAll();
	}

	@RequestMapping("/{id}")
	Optional<Detalle> find(@PathVariable("id") Long id) {
		return repositoryDetalle.findById(id);
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public Detalle create(@RequestBody Detalle v) {

		
		return repositoryDetalle.save(v);
    }
}
