import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FacturacionDataSource} from '../datasources';
import {DetalleFactura, DetalleFacturaRelations} from '../models';

export class DetalleFacturaRepository extends DefaultCrudRepository<
  DetalleFactura,
  typeof DetalleFactura.prototype.id,
  DetalleFacturaRelations
> {
  constructor(
    @inject('datasources.facturacion') dataSource: FacturacionDataSource,
  ) {
    super(DetalleFactura, dataSource);
  }
}
