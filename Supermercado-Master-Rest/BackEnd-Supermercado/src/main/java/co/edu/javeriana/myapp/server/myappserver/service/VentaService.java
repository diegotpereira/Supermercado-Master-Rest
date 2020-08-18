package co.edu.javeriana.myapp.server.myappserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.edu.javeriana.myapp.server.myappserver.model.Detalle;
import co.edu.javeriana.myapp.server.myappserver.model.DetalleRepository;
import co.edu.javeriana.myapp.server.myappserver.model.Producto;
import co.edu.javeriana.myapp.server.myappserver.model.ProductoRepository;
import co.edu.javeriana.myapp.server.myappserver.model.Venta;
import co.edu.javeriana.myapp.server.myappserver.model.VentaRepository;

import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/venta")
public class VentaService {

	@Autowired
	private VentaRepository repositoryVenta;
		
	@Autowired
	private DetalleRepository repositoryDetalle;
	
	@Autowired
	private ProductoRepository repositoryProducto;
	
	@PreAuthorize("hasRole('ROLE_CAJERO')")
	@RequestMapping("")
	Iterable<Venta> findAll() {
		return repositoryVenta.findAll();
	}

	@PreAuthorize("hasRole('ROLE_CAJERO')")
	@RequestMapping("/{id}")
	Optional<Venta> find(@PathVariable("id") Long id) {
		return repositoryVenta.findById(id);
	}
	
	@PreAuthorize("hasRole('ROLE_CAJERO')")
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public Venta create(@RequestBody Venta v) {
		Venta auxVenta = repositoryVenta.save(v);
		if(v.getDetalles() != null) {
			for (Detalle d : v.getDetalles()) {
				d.setVenta(v);
				repositoryDetalle.save(d);
			}
		}
		return auxVenta;
    }
	
	

	@PreAuthorize("hasRole('ROLE_CAJERO')")
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
	public void delete(@PathVariable("id") Long id) {
		/*for (Detalle d : v.getDetalles()) {
			repositoryDetalle.delete(d);
		}*/
		repositoryVenta.deleteById(id);
	}
	
}