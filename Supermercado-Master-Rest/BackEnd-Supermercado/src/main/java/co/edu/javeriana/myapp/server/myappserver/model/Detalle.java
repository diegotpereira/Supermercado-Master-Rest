package co.edu.javeriana.myapp.server.myappserver.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Detalle {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private int cantidad;
	
	private double subdescuento;
	
	private double subTotal;
	
	@OneToOne
	private Producto producto;
	
	@ManyToOne
	private Venta venta;

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public double getSubdescuento() {
		return subdescuento;
	}

	public void setSubdescuento(double subdescuento) {
		this.subdescuento = subdescuento;
	}

	public double getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(double subTotal) {
		this.subTotal = subTotal;
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}



	public void setVenta(Venta venta) {
		this.venta = venta;
	}

	
	
	
}
