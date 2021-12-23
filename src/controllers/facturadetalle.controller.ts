import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {DetalleFactura} from '../models';
import {DetalleFacturaRepository} from '../repositories';

export class FacturadetalleController {
  constructor(
    @repository(DetalleFacturaRepository)
    public detalleFacturaRepository : DetalleFacturaRepository,
  ) {}

  @post('/detalle-factura')
  @response(200, {
    description: 'DetalleFactura model instance',
    content: {'application/json': {schema: getModelSchemaRef(DetalleFactura)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleFactura, {
            title: 'NewDetalleFactura',
            
          }),
        },
      },
    })
    detalleFactura: DetalleFactura,
  ): Promise<DetalleFactura> {
    return this.detalleFacturaRepository.create(detalleFactura);
  }

  @get('/detalle-factura/count')
  @response(200, {
    description: 'DetalleFactura model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DetalleFactura) where?: Where<DetalleFactura>,
  ): Promise<Count> {
    return this.detalleFacturaRepository.count(where);
  }

  @get('/detalle-factura')
  @response(200, {
    description: 'Array of DetalleFactura model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DetalleFactura, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DetalleFactura) filter?: Filter<DetalleFactura>,
  ): Promise<DetalleFactura[]> {
    return this.detalleFacturaRepository.find(filter);
  }

  @patch('/detalle-factura')
  @response(200, {
    description: 'DetalleFactura PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleFactura, {partial: true}),
        },
      },
    })
    detalleFactura: DetalleFactura,
    @param.where(DetalleFactura) where?: Where<DetalleFactura>,
  ): Promise<Count> {
    return this.detalleFacturaRepository.updateAll(detalleFactura, where);
  }

  @get('/detalle-factura/{id}')
  @response(200, {
    description: 'DetalleFactura model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DetalleFactura, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DetalleFactura, {exclude: 'where'}) filter?: FilterExcludingWhere<DetalleFactura>
  ): Promise<DetalleFactura> {
    return this.detalleFacturaRepository.findById(id, filter);
  }

  @patch('/detalle-factura/{id}')
  @response(204, {
    description: 'DetalleFactura PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleFactura, {partial: true}),
        },
      },
    })
    detalleFactura: DetalleFactura,
  ): Promise<void> {
    await this.detalleFacturaRepository.updateById(id, detalleFactura);
  }

  @put('/detalle-factura/{id}')
  @response(204, {
    description: 'DetalleFactura PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() detalleFactura: DetalleFactura,
  ): Promise<void> {
    await this.detalleFacturaRepository.replaceById(id, detalleFactura);
  }

  @del('/detalle-factura/{id}')
  @response(204, {
    description: 'DetalleFactura DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.detalleFacturaRepository.deleteById(id);
  }
}
