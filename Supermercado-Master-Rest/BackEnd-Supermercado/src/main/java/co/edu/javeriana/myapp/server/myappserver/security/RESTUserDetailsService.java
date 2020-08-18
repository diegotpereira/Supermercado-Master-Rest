package co.edu.javeriana.myapp.server.myappserver.security;

import co.edu.javeriana.myapp.server.myappserver.model.User;
import co.edu.javeriana.myapp.server.myappserver.model.Usuario;
import co.edu.javeriana.myapp.server.myappserver.model.UsuarioRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class RESTUserDetailsService implements UserDetailsService {
	Map<String, User> users = new HashMap<>();
	
	@Autowired
	private UsuarioRepository repository;

	public RESTUserDetailsService() {
		super();
		//users.put("user", new User("user", "password", "ROLE_USER"));
		//users.put("admin", new User("admin", "password", "ROLE_ADMIN"));

	}
	@Override
	public User loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO En este método debería recuperarlse la info del usuario desde la base de datos
		
		/*for (Usuario u : this.repository.findAll()) {
			if(u.getNombre().compareTo(username) == 0) {
			 	return new User(u.getNombre(),u.getContrasena(),u.getRol());
			}
			System.out.println("-----------+++++++++++++++++++++++++++*************************************2");
		}*/
		try {
			Usuario u = this.repository.findByName(username);
			
			if(u == null) {
				throw new UsernameNotFoundException("Error");
			}

			return new User(u.getNombre(),u.getContrasena(),u.getRol());
			
		}catch(Exception e){
			throw new UsernameNotFoundException("Error");
		}
		
		//return new User("michael","1234","ROLE_CAJERO");
		
	}	

}
