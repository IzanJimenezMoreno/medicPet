package com.gruptd.medicPet.dao;

import com.gruptd.medicPet.models.Factura;
import com.gruptd.medicPet.models.LiniaFactura;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author pmorante
 */
public interface LiniaFacturaDAO extends CrudRepository<LiniaFactura, Long> {
    
    public LiniaFactura findByNumeroDeLineaAndFactura(int numeroDeLinea, Factura factura);
    
}
